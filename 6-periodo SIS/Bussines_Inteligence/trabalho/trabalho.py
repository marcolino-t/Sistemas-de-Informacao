import pandas as pd

# 1. Carregar os dados diretamente da URL
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/WorldDBTables/CountryTable.csv"
df = pd.read_csv(url)

print("dados carregados com sucesso! - shape:", df.shape)

# Converter life_expectancy para numérico
df['life_expectancy'] = pd.to_numeric(df['life_expectancy'], errors='coerce')


# País mais populoso de cada continente
pais_mais_populoso = df.loc[df.groupby('continent')['population'].idxmax()]
print("\nPaís mais populoso de cada continente:")
print(pais_mais_populoso[['continent', 'name', 'population']])

# 10 países mais populosos
top_10_populosos = df.nlargest(10, 'population')
print("\nTop 10 países mais populosos:")
print(top_10_populosos[['name', 'population']])

# 10 países com mais expectativa de vida
top_10_expectativa_vida = df.nlargest(10, 'life_expectancy')
print("\nTop 10 países com mais expectativa de vida:")
print(top_10_expectativa_vida[['name', 'life_expectancy']])

# Qual a média de expectativa de vida
media_expectativa_vida = df['life_expectancy'].mean()
print(f"\nMédia de expectativa de vida: {media_expectativa_vida:.2f} anos")


# Carregar dados de cidades
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/WorldDBTables/CityTable.csv"
df_cidades = pd.read_csv(url)
print("\nDados de cidades carregados com sucesso! - shape:", df_cidades.shape)

# Média de habitantes por país
media_habitantes_por_pais = df_cidades.groupby('country_code')['population'].mean()
print("\nMédia de habitantes por país:")
print(media_habitantes_por_pais)

# Cidade mais populosa de cada país
cidades_mais_populosas = df_cidades.loc[df_cidades.groupby('country_code')['population'].idxmax()]
print("\nCidade mais populosa de cada país:")
print(cidades_mais_populosas[['country_code', 'name', 'population']])

# Top 10 cidades mais populosas do mundo
top_10_cidades = df_cidades.nlargest(10, 'population')
print("\nTop 10 cidades mais populosas do mundo:")
print(top_10_cidades[['country_code', 'name', 'population']])