from random import randint
secret_number = randint(0,100)

while True:
    number = input("Adivinhe o número: ")

    try:
        number = int(number)
    except:
        print('Desculpe, isso não é um número')
        continue

    if number != secret_number:
        if number > secret_number:
            print(number, 'é maior que o numero secreto')

        elif number < secret_number:
            print(number, 'é menor que o numero secreto')

    else:
        print('Você adivinhou o numero: ', secret_number)
        break