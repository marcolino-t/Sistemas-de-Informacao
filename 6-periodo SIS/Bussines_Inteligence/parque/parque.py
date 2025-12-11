import pandas as pd
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
CSV_PATH = BASE_DIR / "dados.csv"
PARQUET_PATH = BASE_DIR / "dados.parquet"

df = pd.read_csv(CSV_PATH)
df.to_parquet(PARQUET_PATH, engine="pyarrow", index=False)
