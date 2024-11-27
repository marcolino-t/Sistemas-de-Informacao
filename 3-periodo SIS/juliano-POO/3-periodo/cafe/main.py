from cafe_class import Cafe

pequeno = Cafe("pequeno",5)
medio = Cafe("medio",8)
grande = Cafe("grande",10)

try:
    user_budget = float(input("Quantos você tem: "))
except ValueError:
    exit('Por favor, coloque um numero')

for cafe in [pequeno, medio, grande]:
    cafe.vender(user_budget)