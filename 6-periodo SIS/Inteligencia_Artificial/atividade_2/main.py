import csv, random, argparse, os
from deap import base, creator, tools, algorithms

def load_items(csv_path):

    items = []
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            items.append({
                "id": int(row["id"]),
                "name": row["name"],
                "category": row["category"],
                "weight": int(row.get("weight",0.0)),
                "value": float(row.get("value",0.0)),
                "volume": float(row.get("volume", 0.0)),
            })
    return items

def make_eval(items, capacity):
    avg_vpw = sum(it["value"]/it["weight"] for it in items) / len(items)
    penalty_per_unit = max(10.0, 5.0 * avg_vpw)
    # var_lambda = 1.0
    def eval_knapsack(individual):
        total_w, total_v = 0, 0.0
        for gene, it in zip(individual, items):
            if gene:
                total_w += it["weight"]
                total_v += it["value"]
        if total_w > capacity:
            over = total_w - capacity
            total_v -= penalty_per_unit * over
            # total_v -= var_lambda*(total_w-capacity)
        return (total_v,)
        # return (max(1e-9, total_v),)
    return eval_knapsack

def decode(individual, items):
    chosen = []
    total_w, total_v = 0, 0.0
    for gene, it in zip(individual, items):
        if gene:
            chosen.append(it)
            total_w += it["weight"]
            total_v += it["value"]
    return chosen, total_w, total_v


# Hiperparâmetros
CAPACITY   = 500
POP        = 300
GEN        = 200
CXPB       = 0.7  #probabilidade de ter cruzamento - 70%
MUTPB      = 0.05 #probabilidade de ter mutacao < 5%
TOURNSIZE  = 3    # tamanho
SEED       = 42   # fixo somente para reproduzir os dados
OUT_CSV    = "/content/knapsack_products_output.csv"
CSV_PATH   = "/content/knapsack_products.csv"

# Reprodutibilidade
random.seed(SEED)
items = load_items(CSV_PATH)

# Evitar erro ao reexecutar células no Colab:
from deap import creator
try:
    del creator.FitnessMax
    del creator.Individual
except Exception:
    pass

creator.create("FitnessMax", base.Fitness, weights=(1.0,))
creator.create("Individual", list, fitness=creator.FitnessMax)

toolbox = base.Toolbox()
# Inicialização com baixa densidade de 1s (5%)
toolbox.register("attr_bool", random.choices, [0,1], weights=[0.95, 0.05], k=1)
toolbox.register("individual", tools.initRepeat, creator.Individual, lambda: toolbox.attr_bool()[0], n=len(items))
toolbox.register("population", tools.initRepeat, list, toolbox.individual)

eval_func = make_eval(items, CAPACITY)
toolbox.register("evaluate", eval_func)
toolbox.register("mate", tools.cxTwoPoint)
toolbox.register("mutate", tools.mutFlipBit, indpb=MUTPB)
toolbox.register("select", tools.selTournament, tournsize=TOURNSIZE)
# toolbox.register("select", tools.selRoulette)

pop = toolbox.population(n=POP)
hof = tools.HallOfFame(1, similar=lambda a,b: a==b)
stats = tools.Statistics(lambda ind: ind.fitness.values[0])
stats.register("avg", lambda fits: sum(fits)/len(fits))
stats.register("max", max)

pop, log = algorithms.eaSimple(pop, toolbox, cxpb=CXPB, mutpb=MUTPB,
                               ngen=GEN, stats=stats, halloffame=hof, verbose=True)

best = hof[0]
chosen, total_w, total_v = decode(best, items)

print("\n== Melhor solução ==")
print(f"Itens selecionados: {len(chosen)}")
print(f"Peso total: {total_w} / Capacidade: {CAPACITY}")
print(f"Valor total: {total_v:.2f}")
if total_w > CAPACITY:
    print("ATENÇÃO: solução final acima da capacidade (penalizada). Considere mais gerações ou parâmetros diferentes.")

# Salvar resultado em CSV
with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["id","name","category","weight","value","selected"])
    for ind, it in enumerate(items):
        writer.writerow([it["id"], it["name"], it["category"], it["weight"],
                         f"{it['value']:.2f}", int(best[ind])])
    # linha de totais com o MESMO número de colunas
    writer.writerow(["TOTAL", "", "", total_w, f"{total_v:.2f}", ""])
print(f"Solução salva em: {OUT_CSV}")

import pandas as pd
df = pd.read_csv(OUT_CSV)