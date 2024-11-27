from flask import Flask, request

# instanciar a aplicação (um objeto)
app = Flask (__name__)

@app.route('/')
def index():
    return 'aplicação online'

@app.route('/calcula', methods=['GET'])
def calcula():
    # http://127.0.0.1:5000/calcula?quantidade=50&preco=2
    quantidade = int(request.args.get('quantidade'))
    preco = int(request.args.get('preco'))
    return f'R$ {quantidade*preco}'

@app.route('/paridade',methods=['GET'])
def paridade():
    numero = request.args.get('valor')
    if int(numero) % 2 == 0:
        return f"{numero} é par"
    else:
        return f"{numero} é impar"
    
@app.route('/somar_ate', methods=['GET'])
        #http://127.0.0.1:5000/somar_ate?valor=6
def somar_ate():
    try:
        numero= int(request.args.get('valor'))
        lista_numeros= list(range(1,numero,+1))
        return{
            "soma": sum(lista_numeros)
        }
    except Exception as e:
        return "falha no processamento"
    

# rodar app
# debug == True para não ser necessaraio recarreegar a app no navegador, por ex. 
# Só utilizar em ambiente de desenvolvimento
app.run(debug=True)
