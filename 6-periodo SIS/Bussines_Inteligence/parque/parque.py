import pandas as pd

#criando DataFrame

data = {"id": [1, 2, 3], "nome":['Ana', 'Bruno', 'Carlos'], "idade":[23, 35, 29]}

df = pd.DataFrame(data)


#salvando em Parquet
df.to_parquet("dados.parquet", engine="pyarrow", index=False)