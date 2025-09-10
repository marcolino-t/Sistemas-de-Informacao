import duckdb

con = duckdb.connect()

# Quantas pessoas embarcaram em cada porto?
result = con.execute("""
SELECT Embarked, COUNT(*) 
FROM 'parque/dados.parquet' 
GROUP BY Embarked
""").fetchall()
print("Quantidade por porto:", result)

# Pessoas que não embarcaram (Embarked é NULL)
result = con.execute("""
SELECT * 
FROM 'parque/dados.parquet' 
WHERE Embarked IS NULL
""").fetchall()
print("Embarked NULL:", result)

# Quantidade de sobreviventes e mortos por categoria e por gênero
result = con.execute("""
SELECT Pclass, Sex, Survived, COUNT(*) 
FROM 'parque/dados.parquet' 
GROUP BY Pclass, Sex, Survived
""").fetchall()
print("Sobreviventes/Mortos por categoria e gênero:", result)

# Quantas crianças (<=12 anos) sobreviveram e quantas morreram?
result = con.execute("""
SELECT Survived, COUNT(*) 
FROM 'parque/dados.parquet' 
WHERE Age <= 12 
GROUP BY Survived
""").fetchall()
print("Crianças sobreviventes/mortas:", result)

# Média de idade dos sobreviventes e dos que morreram
result = con.execute("""
SELECT Survived, AVG(Age) 
FROM 'parque/dados.parquet' 
GROUP BY Survived
""").fetchall()
print("Média de idade por sobrevivência:", result)