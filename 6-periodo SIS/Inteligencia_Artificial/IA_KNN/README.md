# Classificação de Câncer de Mama com k-NN

Este projeto utiliza o algoritmo k-Nearest Neighbors (k-NN) para classificar tumores de mama como malignos ou benignos, utilizando o conjunto de dados Breast Cancer do scikit-learn. O pipeline inclui preparação dos dados, treinamento, tuning de hiperparâmetros, avaliação e scripts para inferência.

---

## 📁 Estrutura dos Arquivos

- **Cópia_de_IA_KNN_prep.ipynb**  
  Notebook principal com todo o fluxo: carregamento dos dados, treinamento, tuning, avaliação, geração de gráficos e scripts de inferência.

- **outputs/**  
  Diretório para artefatos gerados: modelos treinados (`.joblib`), gráficos de matriz de confusão e curva ROC, tabelas de métricas (`.csv`).

- **predict_one.py**  
  Script CLI para prever a classe de uma única amostra informando 30 features via linha de comando.

- **predict_csv.py**  
  Script CLI para prever classes de múltiplas amostras a partir de um arquivo CSV com 30 colunas (features).

- **novas_amostras.csv**  
  Exemplo de arquivo CSV gerado para teste de inferência em lote.

---

## 🚀 Como Executar

### 1. Treinamento e Avaliação

Execute o notebook `Cópia_de_IA_KNN_prep.ipynb` para:

- Carregar e dividir o dataset (70% treino / 30% teste, estratificado)
- Treinar três configurações de k-NN:
  - **A (baseline):** k=5, uniform, euclidean
  - **B (best_grid):** melhores hiperparâmetros via GridSearchCV
  - **C (variant):** k=7, distance, manhattan
- Avaliar cada configuração (accuracy, precision, recall, F1)
- Gerar gráficos de matriz de confusão e curva ROC
- Salvar modelo vencedor e tabela de métricas

### 2. Inferência de Uma Amostra

Execute no terminal:

```
python predict_one.py f1 f2 ... f30
```
Onde `f1 ... f30` são os valores das 30 features (números reais).

### 3. Inferência de Múltiplas Amostras

Execute no terminal:

```
python predict_csv.py novas_amostras.csv
```
O arquivo CSV deve conter 30 colunas (f1, f2, ..., f30), cada linha representando uma amostra.

---

## 📊 Resultados

- As métricas de cada configuração (A/B/C) são exibidas no notebook e salvas em `outputs/table_ABC.csv`.
- Gráficos de matriz de confusão e curva ROC são salvos em `outputs/`.
- O modelo vencedor (configuração B) é salvo em `outputs/knn_pipeline_best.joblib`.

---

## 🛠️ Requisitos

- Python 3.7+
- scikit-learn
- pandas
- numpy
- matplotlib
- joblib

Instale as dependências com:

```
pip install scikit-learn pandas numpy matplotlib joblib
```

---

## 📚 Referências

- [Breast Cancer Wisconsin (Diagnostic) Data Set — scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_breast_cancer.html)
- [Documentação do k-NN — scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html)

---

## 💡 Observações

- Os scripts de inferência (`predict_one.py` e `predict_csv.py`) são gerados automaticamente pelo notebook.
- Para rodar os scripts, o modelo treinado (`knn_pipeline_best.joblib`) deve estar presente na pasta `outputs`.
- O projeto pode ser facilmente adaptado para outros datasets com pequenas modificações.

---