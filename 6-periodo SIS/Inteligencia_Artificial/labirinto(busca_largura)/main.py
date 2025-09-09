from collections import deque

MOVES = {
    'C': (-1, 0),
    'B': (1, 0),
    'E': (0, -1),
    'D': (0, 1),
}

def ler_mapa(caminho_arquivo):
    grid = []
    start = goal = None
    with open(caminho_arquivo, 'r', encoding='utf-8') as f:
        for r, line in enumerate(l.strip('\n') for l in f):
            grid.append(list(line))
            for c, ch in enumerate(line):
                if ch == 'S':
                    start = (r, c)
                elif ch == 'G':
                    goal = (r, c)
    if start is None or goal is None:
        raise ValueError("Mapa inválido: faltam S ou G.")
    return grid, start, goal

def vizinhos(grid, r, c):
    R, C = len(grid), len(grid[0])
    for move, (dr, dc) in MOVES.items():
        nr, nc = r + dr, c + dc
        if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] != '#':
            yield move, (nr, nc)

def bfs(grid, start, goal):
    #busca em largura
    fila = deque([start])
    visitado = {start}
    pai = {start: (None, None)}  # estado -> (estado_pai, move_usado)
    expandidos = 0

    while fila:
        atual = fila.popleft()
        expandidos += 1
        if atual == goal:
            # Reconstruir caminho
            caminho_moves = []
            cur = atual
            while pai[cur][0] is not None:
                caminho_moves.append(pai[cur][1])
                cur = pai[cur][0]
            caminho_moves.reverse()
            return caminho_moves, expandidos

        r, c = atual
        for move, nxt in vizinhos(grid, r, c):
            if nxt not in visitado:
                visitado.add(nxt)
                pai[nxt] = (atual, move)
                fila.append(nxt)

    return None, expandidos  # sem solução

def marcar_caminho(grid, start, moves):
    r, c = start
    for mv in moves:
        dr, dc = MOVES[mv]
        r, c = r + dr, c + dc
        if grid[r][c] not in ('S', 'G'):
            grid[r][c] = '*'
    return grid

def imprimir_grid(grid):
    for linha in grid:
        print(''.join(linha))

if __name__ == "__main__":
    mapa = input("nome do mapa: ")
    grid, start, goal = ler_mapa(mapa)
    caminho, expandidos = bfs(grid, start, goal)
    if caminho is None:
        print("Sem solução. Nós expandidos:", expandidos)
    else:
        print("Passos mínimos:", len(caminho))
        print("Caminho (moves):", ''.join(caminho))
        grid_marcado = marcar_caminho(grid, start, caminho)
        imprimir_grid(grid_marcado)
        print("Nós expandidos:", expandidos)