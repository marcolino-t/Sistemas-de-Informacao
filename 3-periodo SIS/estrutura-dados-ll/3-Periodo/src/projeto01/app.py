from flask import Flask, request
from funcoes import sigla, ordenar_cidades , lista_Cidades

# Instanciar a aplicação
app = Flask(__name__)

@app.route("/lista_ibge")       #rota para trazer todas as cidades do pais em ordem alfabética
def Todas_cidades(): #aqui foi criada uma função para trazer as cidades
    cidades = lista_Cidades() #variavel cidades, armazena uma outra função que foi chamada que contem as cidades
    ordenadas = ordenar_cidades(cidades) #variavel ordenadas chama outra função que ordena as cidade em ordem alfabética
    return ordenadas #aqui eu retorno a lista pronta

    

@app.route("/consulta_ibge", methods=['GET'])  #rota para trazer cidades pela "UF" com suas info
def estado(): #aqui foi criada uma função para compeltar a URL com o parametro que falta("UF")
    UF = request.args.get('UF') #Variavel UF faz uma requisição do valor de 'UF' para ser usado na url
    resposta = sigla(UF) #variavel resposta chama uma função, passando o parametro "UF"
    return resposta #aqui eu retorno a lista de cidade de acordo com a sigla que passei para UF

@app.route("/ordenar_cidades", methods=['GET']) #rota para ordenar os nomes das cidade pela UF
def ordenar(): #aqui foi criada minha função
    UF = request.args.get('UF') #variavel UF apenas para implementação na resposta
    cidades = estado()  # Obtém todas as cidades pela UF que passei na URL
    cidades_ordenadas = ordenar_cidades(cidades)  # chama uma função que ordena as cidades
    return {f"cidades_ordenadas de {UF}": cidades_ordenadas} #Retorna minha resposta e no lugar de {UF} ele traz a sigla do estado

if __name__ == "__main__":
    app.run(debug=True)