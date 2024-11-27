def quickSort(lista):
    quickSortOrdena(lista, 0, len(lista)-1)

def quickSortOrdena(lista, esq, dir):
    if esq < dir:
        indice = particao(lista, esq, dir)
        quickSortOrdena(lista, esq, indice-1)
        quickSortOrdena(lista, indice+1, dir)

def particao (lista, esq, dir):
    pivo = lista[esq]
    #particionamento
    i = esq
    j = dir
    while i <= j:
        #Encontrar elemento maior que o pivo
        while i <= dir and lista[i] <= pivo:
            i += 1
            
        while j >= esq and  lista[j] > pivo:
            j -= 1
            
        if i <= j:
            lista[i], lista[j] = lista[j], lista[i]

     #posiciona o pivo no local correto   

    lista[esq], lista[j] = lista[j], lista[esq]

    #retornar o indice do pivo
    return j

lista = [7, 2, 9, 4, 3, 7, 6, 1]

quickSort(lista)
print (lista)