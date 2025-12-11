# csv_to_parquet.py
import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
CSV_PATH = BASE_DIR / "dados_anonimizados3.csv"
PARQUET_PATH = BASE_DIR / "anonimizados.parquet"

df = pd.read_csv(CSV_PATH)
df.to_parquet(PARQUET_PATH, index=False)

print(f"CSV convertido para Parquet: {PARQUET_PATH}")
