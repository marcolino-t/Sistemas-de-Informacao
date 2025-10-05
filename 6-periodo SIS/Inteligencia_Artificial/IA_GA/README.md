# IA_GA — Problema da Mochila com Algoritmo Genético (DEAP)

Este repositório contém uma implementação de Algoritmo Genético (AG), usando a biblioteca DEAP, para resolver uma variante do problema da mochila com restrições de peso e volume. O código pode ser executado tanto no Google Colab (fluxo original) quanto localmente em Python.

## Visão geral
- **Linguagem**: Python
- **Bibliotecas principais**: `deap`, `pandas`, `gdown`
- **Entrada**: arquivo CSV com itens (`id`, `name`, `category`, `weight`, `value`, `volume`)
- **Saída**: arquivos CSV com a melhor seleção por semente e um resumo consolidado

## Estrutura do repositório
- `Cópia_de_IA_GA_dados.ipynb`: notebook Colab com o fluxo completo (download do CSV, configuração e execução do AG).
- `cópia_de_ia_ga_dados.py`: versão script do notebook, com a mesma lógica central do AG.

## Requisitos
- Python 3.9+
- pip (gerenciador de pacotes)

Bibliotecas Python:
```bash
pip install deap pandas gdown
```

> Observação: No Colab, o notebook já executa `!pip install deap` quando necessário.

## Dados de entrada
O dataset é baixado do Google Drive via `gdown` no fluxo do Colab. ID do arquivo:
- `1ljr5-z2BlPWJuIsaO_3Mu0n3HYBCiUkM`

Se preferir executar localmente, baixe manualmente o CSV e ajuste o caminho (`CSV_PATH`) no script.

## Como executar

### 1) Google Colab (recomendado para reproduzir o notebook)
1. Abra o arquivo `Cópia_de_IA_GA_dados.ipynb` no Colab.
2. Execute as células em ordem. O notebook:
   - instala a DEAP;
   - baixa o CSV com `gdown` para `/content/knapsack_products.csv`; 
   - roda o Algoritmo Genético para várias sementes;
   - salva os resultados em `/content/resultados_por_semente/` e um `resumo_sementes.csv`.

### 2) Execução local (script Python)
1. Garanta os requisitos instalados:
   ```bash
   pip install deap pandas gdown
   ```
2. Baixe o CSV de itens e defina um caminho local, por exemplo: `data/knapsack_products.csv`.
3. Edite no arquivo `cópia_de_ia_ga_dados.py` as constantes abaixo, se necessário:
   - `CSV_PATH`: caminho para o CSV local
   - `OUT_DIR`: pasta de saída para os resultados
4. Execute:
   ```bash
   python cópia_de_ia_ga_dados.py
   ```

> Nota: O script herdado do Colab usa caminhos como `/content/...`. Para uso local, substitua por caminhos válidos no seu sistema (ex.: `./data/knapsack_products.csv`).

## Hiperparâmetros principais
No código, os parâmetros do AG podem ser ajustados diretamente nas constantes:
- `CAPACITY`: capacidade máxima de peso da mochila
- `CAPACITY_VOL`: capacidade máxima de volume da mochila
- `POP`: tamanho da população
- `GEN`: número de gerações
- `CXPB`: probabilidade de crossover
- `MUTPB`: probabilidade de mutação por bit
- `TOURNSIZE`: tamanho do torneio na seleção
- `seeds`: lista de sementes para replicabilidade

A função de avaliação usa penalização caso peso/volume excedam a capacidade e um bônus proporcional ao uso de volume quando viável.

## Saídas geradas
Para cada semente, é criado um CSV com os itens selecionados e totais agregados; além disso, um `resumo_sementes.csv` consolida os resultados por semente. Por padrão no notebook:
- Pasta: `/content/resultados_por_semente/`
- Arquivos: `itens_seed_<SEED>.csv`, `resumo_sementes.csv`

Ao executar localmente, os caminhos dependerão de `OUT_DIR`.

