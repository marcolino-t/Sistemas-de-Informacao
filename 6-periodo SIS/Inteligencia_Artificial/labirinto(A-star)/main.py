import heapq  
import tkinter as tk
from tkinter import filedialog, messagebox

# C = Cima, B = Baixo, E = Esquerda, D = Direita
MOVES = {
    'C': (-1, 0),
    'B': (1, 0),
    'E': (0, -1),
    'D': (0, 1),
}

# Função: ler_mapa
def ler_mapa(caminho_arquivo):
    """
    Lê o arquivo do mapa e retorna a matriz (grid) e as posições de start (S) e goal (G)
    """
    grid = []  # Lista de listas, cada linha do arquivo vira uma lista de caracteres
    start = goal = None  # Inicializa posições do início e objetivo

    # Abre o arquivo e lê linha a linha
    with open(caminho_arquivo, 'r', encoding='utf-8') as f:
        # enumerate fornece o índice da linha (r) e o conteúdo (line)
        for r, line in enumerate(l.strip('\n') for l in f):
            grid.append(list(line))  # Converte a linha em lista de caracteres

            # Procura 'S' e 'G' em cada coluna da linha
            for c, ch in enumerate(line):
                if ch == 'S':
                    start = (r, c)  # Armazena coordenadas do início
                elif ch == 'G':
                    goal = (r, c)  # Armazena coordenadas do objetivo

    # Verifica se o mapa possui S e G
    if start is None or goal is None:
        raise ValueError("Mapa inválido: faltam S ou G.")

    return grid, start, goal

# Função: vizinhos
def vizinhos(grid, r, c):
    """
    Gera os vizinhos válidos da célula (r, c)
    """
    R, C = len(grid), len(grid[0])  # Dimensões do grid
    for move, (dr, dc) in MOVES.items():  # Para cada movimento possível
        nr, nc = r + dr, c + dc  # Calcula coordenadas do vizinho
        # Verifica se o vizinho está dentro do grid e não é parede
        if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] != '#':
            yield move, (nr, nc)  # Retorna o movimento e a coordenada do vizinho

# =========================
# Função: heuristica_manhattan
# =========================
def heuristica_manhattan(a, b):
    """
    Calcula a distância Manhattan entre os pontos a e b
    """
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

# =========================
# Função: a_star
# =========================
def a_star(grid, start, goal):
    """
    Implementa o algoritmo A* para encontrar o caminho mínimo
    """
    heap = []  # Fila de prioridade
    # Adiciona nó inicial com prioridade = heurística, custo = 0
    heapq.heappush(heap, (heuristica_manhattan(start, goal), 0, start))
    pai = {start: (None, None)}  # Para reconstruir o caminho
    custo = {start: 0}  # Custo acumulado para cada célula
    expandidos = 0  # Contador de nós expandidos

    while heap:
        _, g, atual = heapq.heappop(heap)  # Nó com menor f = g + h
        expandidos += 1

        if atual == goal:  # Se encontrou o objetivo
            caminho_moves = []
            cur = atual
            # Reconstrói o caminho a partir do dicionário pai
            while pai[cur][0] is not None:
                caminho_moves.append(pai[cur][1])
                cur = pai[cur][0]
            caminho_moves.reverse()
            return caminho_moves, expandidos

        r, c = atual
        # Expande todos os vizinhos válidos
        for move, nxt in vizinhos(grid, r, c):
            novo_custo = g + 1  # Cada movimento tem custo 1
            # Se o vizinho nunca foi visitado ou encontrou caminho melhor
            if nxt not in custo or novo_custo < custo[nxt]:
                custo[nxt] = novo_custo
                prioridade = novo_custo + heuristica_manhattan(nxt, goal)
                heapq.heappush(heap, (prioridade, novo_custo, nxt))
                pai[nxt] = (atual, move)  # Atualiza pai do vizinho

    return None, expandidos  # Retorna None se não encontrou caminho

# =========================
# Função: marcar_caminho
# =========================
def marcar_caminho(grid, start, moves):
    """
    Marca o caminho no grid com '*'
    """
    r, c = start
    for mv in moves:
        dr, dc = MOVES[mv]
        r, c = r + dr, c + dc
        if grid[r][c] not in ('S', 'G'):
            grid[r][c] = '*'
    return grid

# =========================
# Função: desenhar_labirinto
# =========================
def desenhar_labirinto(canvas, grid, cell_size=30):
    """
    Desenha o labirinto no canvas do Tkinter
    """
    canvas.delete("all")  # Limpa canvas
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
                canvas.create_text((x0 + x1)//2, (y0 + y1)//2, text=ch,
                                   font=("Arial", cell_size//2, "bold"))

# =========================
# Função: rodar_interface
# =========================
def rodar_interface():
    """
    Inicializa a interface gráfica e conecta todas as funções
    """
    root = tk.Tk()
    root.title("Busca A* em Labirinto")

    # Frame lateral
    frame = tk.Frame(root)
    frame.pack(side=tk.LEFT, padx=10, pady=10)

    # Label de instrução
    info = tk.Label(frame, text="Selecione um mapa para rodar o A*", font=("Arial", 12))
    info.pack(pady=5)

    # Label para mostrar resultados
    resultado_var = tk.StringVar()
    resultado_label = tk.Label(frame, textvariable=resultado_var, justify="left", font=("Arial", 10))
    resultado_label.pack(pady=5)

    # Canvas para desenhar labirinto
    canvas = tk.Canvas(root, width=600, height=600, bg="white")
    canvas.pack(side=tk.RIGHT, padx=10, pady=10)

    # =========================
    # Função interna: abrir_mapa
    # =========================
    def abrir_mapa():
        """
        Abre arquivo de mapa, executa A* e atualiza canvas e resultados
        """
        caminho = filedialog.askopenfilename(
            title="Selecione o arquivo do mapa",
            filetypes=[("Arquivos de texto", "*.txt")]
        )
        if not caminho:
            return  # Sai se usuário cancelar

        try:
            # Lê mapa, start e goal
            grid, start, goal = ler_mapa(caminho)
            # Executa A*, criando cópia do grid
            caminho_moves, expandidos = a_star([linha[:] for linha in grid], start, goal)

            if caminho_moves is None:
                # Sem solução
                resultado_var.set(f"Sem solução.\nNós expandidos: {expandidos}")
                desenhar_labirinto(canvas, grid)
            else:
                # Marca caminho e atualiza label e canvas
                grid_marcado = marcar_caminho([linha[:] for linha in grid], start, caminho_moves)
                resultado_var.set(
                    f"Passos mínimos: {len(caminho_moves)}\n"
                    f"Caminho (moves): {''.join(caminho_moves)}\n"
                    f"Nós expandidos: {expandidos}"
                )
                desenhar_labirinto(canvas, grid_marcado)
        except Exception as e:
            # Mostra erro se houver problema
            messagebox.showerror("Erro", str(e))

    # Botão para abrir mapa e executar A*
    btn = tk.Button(frame, text="Abrir mapa e rodar A*", command=abrir_mapa, font=("Arial", 12))
    btn.pack(pady=10)

    # Loop principal do Tkinter
    root.mainloop()


# =========================
# Ponto de entrada do programa
# =========================
if __name__ == "__main__":
    rodar_interface()
