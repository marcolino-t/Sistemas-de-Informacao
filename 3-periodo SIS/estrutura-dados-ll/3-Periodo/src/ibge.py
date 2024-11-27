import requests

def busca(nome):
    url = f'https://servicodados.ibge.gov.br/api/v2/censos/nomes/{nome}'
    resposta = requests.get(url)
    return resposta.json()

def get_res(obj):
    if len(obj) >0:
        conteudo = obj[0]
        return conteudo.get('res',[])
    else:
        return []

    
def calcula_ocorrencias(var_json):
    conteudo = get_res(var_json)
    resposta = conteudo.get('res',[])
    soma = []
    for elemento in resposta:
        frequencia = elemento.get("frequencia",0)
        soma.append(frequencia)

    return sum(soma)

def frequencia_min(nome):
    dados = busca(nome)
    lista = get_res(dados)
    if len(lista) > 0:
        minimo = lista[0]["frequencia"]
        periodo = lista[0]["periodo"]
        for index in range(1, len(lista)):
            if lista[index]["frequencia"] < minimo:
                minimo = lista[index]["frequencia"]
                periodo = lista[index]["periodo"]
        return periodo, minimo

def frequencia_max(nome):
    dados = busca(nome)
    lista = get_res(dados)
    if len(lista) > 0:
        maximo = lista[0]["frequencia"]
        periodo = lista[0]["periodo"]
        for index in range(1, len(lista)):
            if lista[index]["frequencia"] > maximo:
                maximo = lista[index]["frequencia"]
                periodo = lista[index]["periodo"]
        return periodo, maximo

        
def frequencia_max(nome):
    dados = busca(nome)
    lista = get_res(dados)
    if len(lista) > 0:
        maximo = lista[0]["frequencia"]
        periodo = lista[0]["periodo"]
        for index in range(1, len(lista)):
            if lista[index]["frequencia"] > maximo:
                maximo = lista[index]["frequencia"]
                periodo = lista[index]["periodo"]
        return periodo, maximo
    
def ordena(nome):
    dados = busca(nome)
    lista= get_res(dados)
    for elemento in range(0,len(lista)-1):
        menor= elemento
        for j in range(elemento+1,len(nome)):
            if lista[menor]['frequencia']>lista[j]['frequencia']:
                menor = j
            lista[elemento],lista[menor] = lista[menor],lista[elemento]
    return lista

def bubble_sort(L):
    j = len(L)-1 
    while j > 0:
        for i in range(0,j):
            if L[i]['frequencia'] > L[i+1]['frequencia']:
                L[i],L[i+1] = L[i+1],L[i] 
        j = j-1
    return L
    
def estado(UF):
    url = 'https://servicodados.ibge.gov.br/api/v1/localidades'
    resposta = requests.get(url)
    return resposta.json()
    