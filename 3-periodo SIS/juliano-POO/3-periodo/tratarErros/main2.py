a = 12
b = 0

try:
    print(a/b)
except ZeroDivisionError as erro :
    print('Erro', erro , 'Informe esse erro')
else: 
    print('Sem nenhum erro')
finally:
    print('Aqui sempre vai printar')
    
