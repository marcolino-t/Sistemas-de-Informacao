import duckdb

con = duckdb.connect("titanic.duckdb")
#con.execute("CREATE VIEW titanic AS SELECT * FROM 'titanic.parquet';")
con.execute("CREATE OR REPLACE VIEW titanic AS SELECT * FROM 'C:/Users/tmarc/OneDrive/Documentos/github/Sistemas-de-Informacao/6-periodo SIS/Bussines_Inteligence/duckDb/titanic.parquet' ")
con.close()