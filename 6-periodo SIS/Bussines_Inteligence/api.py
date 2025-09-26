from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"])

df = pd.read_csv("https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv")

@app.get("/")
def dados():
    # Contar sobreviventes por gênero
    genero = df.groupby(['Sex', 'Survived']).size()
    
    return {
        "masculino_sobreviveu": int(genero[('male', 1)]),
        "masculino_morreu": int(genero[('male', 0)]),
        "feminino_sobreviveu": int(genero[('female', 1)]),
        "feminino_morreu": int(genero[('female', 0)]),
        "total": len(df)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
