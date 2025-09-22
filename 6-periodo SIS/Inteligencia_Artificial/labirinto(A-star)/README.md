# 🟢 Busca A\* em Labirintos – README

## **Descrição do Projeto**

Este projeto implementa o **algoritmo A**\* para encontrar o caminho mínimo em labirintos representados por arquivos de texto. Ele possui uma interface gráfica em **Tkinter**, permitindo que o usuário carregue mapas, visualize o caminho encontrado e acompanhe o número de nós expandidos.

O objetivo é demonstrar de forma didática como o A\* funciona, utilizando a **heurística Manhattan** para otimizar a busca.

---

## **Formato do Mapa**

O mapa deve ser um arquivo de texto (`.txt`) contendo:

* `S` → ponto de início
* `G` → objetivo
* `#` → parede (não atravessável)
* `.` → célula livre

**Exemplo de mapa 5x5:**

```
S . # . G
. . # . #
# . . . .
. # . # .
. . . . .

```

---

## **Estrutura do Projeto**

O código foi modularizado em **4 partes principais**:

### **1. Leitura do Mapa (`ler_mapa` e `vizinhos`)**

* `ler_mapa(caminho_arquivo)`:

  * Lê o arquivo linha por linha.
  * Transforma cada linha em uma **lista de caracteres**.
  * Localiza o início (`S`) e o objetivo (`G`).
  * Retorna: `grid` (matriz), `start`, `goal`.
* `vizinhos(grid, r, c)`:

  * Gera todos os vizinhos válidos de uma célula.
  * Verifica se estão dentro do grid e se não são paredes (`#`).
  * Retorna: `(movimento, coordenada do vizinho)`.

**Exemplo de vizinhos:**

Se `MOVES = {'C':(-1,0), 'B':(1,0), 'E':(0,-1), 'D':(0,1)}` e `S=(0,0)`,
vizinhos válidos: `(1,0)` (baixo) e `(0,1)` (direita).

---

### **2. Algoritmo A**\*

#### **Heurística Manhattan**

```python
h(n) = |linha_n - linha_goal| + |coluna_n - coluna_goal|
```

* Estima a distância restante até o objetivo.
* Direciona a busca para os nós mais promissores.
* Admissível para movimento 4-direções sem pesos.

#### **Funcionamento do A**\* (`a_star(grid, start, goal)`)

1. Inicializa a fila de prioridade (`heap`) com o nó inicial: `(f=g+h, g, posição)`.
2. Mantém:

   * `pai` → para reconstruir o caminho
   * `custo` → custo acumulado
   * `expandidos` → contagem de nós processados
3. Enquanto houver nós na fila:

   * Retira o nó com **menor f = g + h**.
   * Se for o objetivo → reconstrói o caminho usando `pai`.
   * Para cada vizinho válido:

     * Calcula `novo_custo = g + 1`.
     * Atualiza fila se é a primeira vez ou encontrou caminho melhor.

**Exemplo passo a passo:**

```
Labirinto 5x5:
S . # . G
. . # . #
# . . . .
. # . # .
. . . . .

Fila inicial: [(4,0,(0,0))]  # f,g,pos
Nós expandidos: 0
```

Expansão do nó `(0,0)` → vizinhos `(0,1)` e `(1,0)`

* Calcula f = g+h → fila ordenada: nós mais próximos do objetivo são priorizados.

Continua até chegar em `G`.

**Reconstrução do caminho:**

* Usa o dicionário `pai` que guarda o nó anterior e o movimento.
* Inverte a lista de movimentos para obter o caminho do início ao fim.

---

### **3. Marcação e Desenho do Caminho**

* `marcar_caminho(grid, start, moves)`:

  * Marca o caminho encontrado com `*` sem sobrescrever `S` ou `G`.

* `desenhar_labirinto(canvas, grid, cell_size=30)`:

  * Percorre todas as células do grid.
  * Desenha retângulos coloridos:

    * `#` = preto
    * `.` = branco
    * `S` = verde
    * `G` = vermelho
    * `*` = amarelo (caminho encontrado)
  * Adiciona texto para `S` e `G`.



### **4. Interface Gráfica (Tkinter)**

* Botão: **Abrir mapa e rodar A**\*
* Exibe:

  * Caminho mínimo encontrado
  * Sequência de movimentos (`C, B, E, D`)
  * Número de nós expandidos
* Atualiza o canvas com o labirinto e o caminho marcado.

**Funcionalidade principal:**

1. Usuário escolhe arquivo de mapa.
2. Programa lê o mapa → executa A\* → marca o caminho → desenha o labirinto.
3. Resultado exibido no painel lateral.

---

## **Resumo do Fluxo do Programa**

1. Carrega mapa → transforma em matriz → encontra `S` e `G`.
2. A\* explora os nós, guiado pela heurística Manhattan.
3. Reconstrói o caminho mínimo usando o dicionário `pai`.
4. Marca o caminho no grid e desenha no canvas.
5. Exibe resultados e contagem de nós expandidos.

---

## **Exemplo de Saída**

```
Passos mínimos: 7
Caminho (moves): DDRDDRD
Nós expandidos: 12
```


## **Dependências**

* Python 3
* Tkinter (normalmente já vem com Python)
* heapq (módulo padrão do Python)
