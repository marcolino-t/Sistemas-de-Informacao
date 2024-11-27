try: 
    with open('arquiv.txt' , 'r') as file_object:
        texto = file_object.read()
        print(texto)
except FileNotFoundError as error:
    print(error)


