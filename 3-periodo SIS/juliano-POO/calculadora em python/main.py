from operadores import operadores

def somar():
    #variaveis que recebe o valor de entrada
    Valor1 = float(input("Valor1: "))
    Valor2 = float(input("Valor2: "))
    numeros = operadores(Valor1, Valor2)
    print(operadores.somar(numeros))

def subtrair():
    #variaveis que recebe o valor de entrada
    Valor1 = float(input("Valor1: "))
    Valor2 = float(input("Valor2: "))
    numeros = operadores(Valor1, Valor2)
    print(operadores.subtrair(numeros))

def multiplicar():
    #variaveis que recebe o valor de entrada
    Valor1 = float(input("Valor1: "))
    Valor2 = float(input("Valor2: "))
    numeros = operadores(Valor1, Valor2)
    print(operadores.multiplicar(numeros))

def dividir():
    #variaveis que recebe o valor de entrada
    Valor1 = float(input("Valor1: "))
    Valor2 = float(input("Valor2: "))
    numeros = operadores(Valor1, Valor2)
    print(operadores.dividir(numeros))

while True:
    print("---------CALCULADORA-----------")
    print("1 - Somar")
    print("2 - Subtrair")
    print("3 -multiplicar")
    print("4 - Dividir")
    print("5 - Sair")

    opcao = int(input("Digite a opção: "))

    if opcao == 1:
        somar()
    elif opcao == 2:
        subtrair()
    elif opcao == 3:
        multiplicar()
    elif opcao == 4:
        dividir()
    elif opcao == 5:
        break
    else:
        print("Opção inválida")