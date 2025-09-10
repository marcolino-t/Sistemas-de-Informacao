import pandas as pd

#1Carregar os dados diretamente da URL
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
df = pd.read_csv(url)
print("dados carregados com sucesso! - shape:", df.shape)

#2Visualizar as primeiras linhas do dataframe
print("\nPrimeiras linhas do dataframe:")
print(df.head())

#3Resumo das colunas e tipos de dados
print("\nInfo do dataframe:")
df.info()

#E4statisticas Descritivas das colunas numericas
print("\nEstatísticas descritivas :")
print(df.describe())

#5identificar valores faltando por coluna
print("\nValores faltando por coluna:")
print(df.isnull().sum())

#6tratar valores faltando apenas em 'Age'
df['Age'] = df['Age'].fillna(df['Age'].median())

#7f(options) remover colunas menos uteis para BI/Modelagem
df.drop(columns=['Cabin', 'Ticket','Name'], inplace=True)

#8converter colunas categóricas em numéricas
df['Sex'] = df['Sex'].map({'male': 0, 'female': 1})

#9EMbarked ficará como string  (não será prenchido enem convertido)
print(df['Embarked'].unique())

#Quantas pessoas embarcaram por cada porto?
embarked_counts = df['Embarked'].value_counts()
print("\nNúmero de pessoas que embarcaram por cada porto:")
print(embarked_counts)  

# Qual a quantidade de pessoas sobreviventes e que morreram por porto, por categoria e por gênero?
sobreviventes_por_porto = df[df['Survived'] == 1].groupby('Embarked').size()
mortes_por_porto = df[df['Survived'] == 0].groupby('Embarked').size()

print("\nQuantidade de sobreviventes por porto:")
print(sobreviventes_por_porto)

print("\nQuantidade de mortes por porto:")
print(mortes_por_porto)

#Quantas crianças (<12 anos) sobreviveram e quantas morreram?
criancas = df[df['Age'] < 12]   
sobreviventes_criancas = criancas[criancas['Survived'] == 1].shape[0]
mortes_criancas = criancas[criancas['Survived'] == 0].shape[0]
print(f"\nCrianças (<12 anos) que sobreviveram: {sobreviventes_criancas}")
print(f"Crianças (<12 anos) que morreram: {mortes_criancas}")

#Qual o percentual de crianças que sobreviveram vs o percentual de adultos que sobreviveram?
total_criancas = criancas.shape[0]
total_adultos = df[df['Age'] >= 12].shape[0]
percentual_criancas_sobreviveram = (sobreviventes_criancas / total_criancas) * 100 if total_criancas > 0 else 0
percentual_adultos_sobreviveram = (df[df['Survived'] == 1].shape[0] - sobreviventes_criancas) / total_adultos * 100 if total_adultos > 0 else 0
print(f"\nPercentual de crianças que sobreviveram: {percentual_criancas_sobreviveram:.2f}%")
print(f"Percentual de adultos que sobreviveram: {percentual_adultos_sobreviveram:.2f}%")