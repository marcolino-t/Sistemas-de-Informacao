import heapq
import tkinter as tk
from tkinter import filedialog, messagebox

MOVES = {
    'C': (-1, 0),
    'B': (1, 0),
    'E': (0, -1),
    'D': (0, 1),
}

def ler_mapa(caminho_arquivo):
    grid = [] # Lista de listas
    start = goal = None # Coordenadas (linha, coluna)
    with open(caminho_arquivo, 'r', encoding='utf-8') as f: # Abre o arquivo
        for r, line in enumerate(l.strip('\n') for l in f): # Lê linha a linha
            grid.append(list(line)) # Converte a linha em lista de caracteres
            for c, ch in enumerate(line): # Procura S e G
                if ch == 'S': 
                    start = (r, c) # Armazena coordenadas de S
                elif ch == 'G': # Armazena coordenadas de G
                    goal = (r, c) 
    if start is None or goal is None:
        raise ValueError("Mapa inválido: faltam S ou G.")
    return grid, start, goal

def vizinhos(grid, r, c): # Gera vizinhos válidos
    R, C = len(grid), len(grid[0]) 
    for move, (dr, dc) in MOVES.items(): 
        nr, nc = r + dr, c + dc 
        if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] != '#':
            yield move, (nr, nc) 

def heuristica_manhattan(a, b): # Distância Manhattan
    return abs(a[0] - b[0]) + abs(a[1] - b[1]) # Diferença de linhas + Diferença de colunas

def a_star(grid, start, goal): # Algoritmo A*
    heap = [] 
    heapq.heappush(heap, (heuristica_manhattan(start, goal), 0, start)) #
    pai = {start: (None, None)} 
    custo = {start: 0}
    expandidos = 0

    while heap:
        _, g, atual = heapq.heappop(heap)
        expandidos += 1
        if atual == goal:
            caminho_moves = []
            cur = atual
            while pai[cur][0] is not None:
                caminho_moves.append(pai[cur][1])
                cur = pai[cur][0]
            caminho_moves.reverse()
            return caminho_moves, expandidos

        r, c = atual
        for move, nxt in vizinhos(grid, r, c):
            novo_custo = g + 1
            if nxt not in custo or novo_custo < custo[nxt]:
                custo[nxt] = novo_custo
                prioridade = novo_custo + heuristica_manhattan(nxt, goal)
                heapq.heappush(heap, (prioridade, novo_custo, nxt))
                pai[nxt] = (atual, move)

    return None, expandidos

def marcar_caminho(grid, start, moves):
    r, c = start
    for mv in moves:
        dr, dc = MOVES[mv]
        r, c = r + dr, c + dc
        if grid[r][c] not in ('S', 'G'):
            grid[r][c] = '*'
    return grid

def desenhar_labirinto(canvas, grid, cell_size=30): # Função para desenhar o labirinto
    canvas.delete("all")
    cores = {
        '#': 'black',
        '.': 'white',
        'S': 'green',
        'G': 'red',
        '*': 'yellow'
    }
    for r, linha in enumerate(grid):
        for c, ch in enumerate(linha):
            x0 = c * cell_size
            y0 = r * cell_size
            x1 = x0 + cell_size
            y1 = y0 + cell_size
            cor = cores.get(ch, 'white')
            canvas.create_rectangle(x0, y0, x1, y1, fill=cor, outline='gray')
            if ch in ('S', 'G'):
                canvas.create_text((x0+x1)//2, (y0+y1)//2, text=ch, font=("Arial", cell_size//2, "bold"))

def rodar_interface():
    root = tk.Tk()
    root.title("Busca A* em Labirinto")

    frame = tk.Frame(root)
    frame.pack(side=tk.LEFT, padx=10, pady=10)

    info = tk.Label(frame, text="Selecione um mapa para rodar o A*", font=("Arial", 12))
    info.pack(pady=5)

    resultado_var = tk.StringVar()
    resultado_label = tk.Label(frame, textvariable=resultado_var, justify="left", font=("Arial", 10))
    resultado_label.pack(pady=5)

    canvas = tk.Canvas(root, width=600, height=600, bg="white")
    canvas.pack(side=tk.RIGHT, padx=10, pady=10)

    def abrir_mapa():
        caminho = filedialog.askopenfilename(
            title="Selecione o arquivo do mapa",
            filetypes=[("Arquivos de texto", "*.txt")]
        )
        if not caminho:
            return
        try:
            grid, start, goal = ler_mapa(caminho)
            caminho_moves, expandidos = a_star([linha[:] for linha in grid], start, goal)
            if caminho_moves is None:
                resultado_var.set(f"Sem solução.\nNós expandidos: {expandidos}")
                desenhar_labirinto(canvas, grid)
            else:
                grid_marcado = marcar_caminho([linha[:] for linha in grid], start, caminho_moves)
                resultado_var.set(
                    f"Passos mínimos: {len(caminho_moves)}\n"
                    f"Caminho (moves): {''.join(caminho_moves)}\n"
                    f"Nós expandidos: {expandidos}"
                )
                desenhar_labirinto(canvas, grid_marcado)
        except Exception as e:
            messagebox.showerror("Erro", str(e))

    btn = tk.Button(frame, text="Abrir mapa e rodar A*", command=abrir_mapa, font=("Arial", 12))
    btn.pack(pady=10)

    root.mainloop()

if __name__ == "__main__":
    rodar_interface()