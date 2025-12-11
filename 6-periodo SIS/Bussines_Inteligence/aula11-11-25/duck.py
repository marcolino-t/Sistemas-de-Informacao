import duckdb
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
PARQUET_PATH = BASE_DIR / "anonimizados.parquet"
DUCKDB_PATH = BASE_DIR / "dados.duckdb"

if not PARQUET_PATH.exists():
    raise FileNotFoundError(f"Arquivo Parquet não encontrado: {PARQUET_PATH}")

con = duckdb.connect(str(DUCKDB_PATH))

con.execute(
    """
    CREATE OR REPLACE TABLE dados AS
    SELECT * FROM read_parquet(?)
    """,
    [str(PARQUET_PATH)],
)

print(con.execute("SELECT * FROM dados LIMIT 5").fetchdf())

con.close()

print(f"Banco DuckDB criado a partir do Parquet: {DUCKDB_PATH}")
