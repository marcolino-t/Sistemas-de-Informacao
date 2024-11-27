from flask import Flask, request
from ibge import busca,calcula_ocorrencias,frequencia_min,frequencia_max,ordena,bubble_sort,estado


app = Flask(__name__)

#http://127.0.0.1:5000/busca_nome?nome=jose
@app.route("/busca_nome")
def busca_rota():
    try:
        nome= request.args.get("nome")
        print(nome)
        response = busca(nome)
        print(response)
        soma = calcula_ocorrencias(response)
        objeto_retorno = {
            "nome_procurado": nome,
            "total_ocorrencia": soma
        }
        return objeto_retorno
    except Exception as e :
        return(f"falha na rota /busca_nome: {e}")
    
@app.route("/frequencia_min")
def minimo():
    try:
        nome= request.args.get("nome")
        periodo,minimo= frequencia_min(nome)
        return {
            "nome": nome,
            "frequencia_minima":minimo,
            "periodo": periodo

        }
    except Exception as e :
        return(f"falha na rota /frequencia_min: {e}")
    
@app.route("/frequencia_max")
def maximo():
    try:
        nome= request.args.get("nome")
        periodo,maximo= frequencia_max(nome)
        return {
            "nome": nome,
            "frequencia_maximo":maximo,
            "periodo": periodo

        }
    except Exception as e :
        return(f"falha na rota frequencia_max: {e}")    
    
@app.route("/ordenar")
def ordem():
    try:
        nome= request.args.get("nome")
        ordenado =  ordena(nome)
        return ordenado
    except Exception as e :
        return(f"falha na rota/ Ordenar: {e}")
    
@app.route("/bubble_sort")
def ordena_frequencia():
    #127.0.0.1:5000/bubble_sort?nome=jose
    try:
        nome= request.args.get("nome")
        bolha =  bubble_sort(nome)
        return bolha
    except Exception as e :
        return(f"falha na rota/ bubble: {e}")
    
@app.route("/ordena_cidade")
def ordena_cidade():
    #127.0.0.1:5000/ordena_cidade?UF=MG
    try:
        estados = estado()
        return estados
    except Exception as e :
        return(f"falha na rota/ordena_cidade: {e}")

app.run(debug=True)