from flask import Blueprint, render_template, request, redirect, url_for
from app.models.exame import Exame  
from flask import session

exame_blueprint = Blueprint('exame', __name__)


@exame_blueprint.route('/login')
def login_fake():
    return render_template('login.html')


@exame_blueprint.route('/inicio')
def pagina_inicio():
    return render_template('inicio.html')

# Rota para listar todos os exames
@exame_blueprint.route('/exames', methods=['GET'])
def listar_exames():
    termo_busca = request.args.get('busca', '').strip()

    if termo_busca:
        exames = Exame.buscar_por_nome_paciente(termo_busca)
    else:
        exames = Exame.listar_exames()

    return render_template('index.html', exames=exames)



# Rota para exibir o formulário de cadastro de novo exame
@exame_blueprint.route('/exames/novo', methods=['GET'])
def novo_exame():
    return render_template('novo_exame.html')

# Rota para criar um novo exame
@exame_blueprint.route('/exames', methods=['POST'])
def criar_exame():
    nome_paciente = request.form['nome_paciente']  
    nome = request.form['nome']
    descricao = request.form['descricao']
    data_hora = request.form['data_hora']  
    status = request.form['status'] 
    preco = request.form['preco'] 

    Exame.criar_exame(nome_paciente, nome, descricao, data_hora, status, preco)
    return redirect(url_for('exame.listar_exames'))

# Rota para editar um exame
@exame_blueprint.route('/exames/editar/<int:id>', methods=['GET', 'POST'])
def editar_exame(id):
    exame_encontrado = Exame.buscar_exame_por_id(id)

    if request.method == 'POST':
        nome_paciente = request.form['nome_paciente']
        nome = request.form['nome']
        descricao = request.form['descricao']
        data_hora = request.form['data_hora']
        status = request.form['status']
        preco = request.form['preco']

        Exame.editar_exame(id, nome_paciente, nome, descricao, data_hora, status, preco)
        return redirect(url_for('exame.listar_exames'))

    return render_template('editar_exame.html', exame=exame_encontrado)

# Rota para excluir um exame
@exame_blueprint.route('/exames/deletar/<int:id>', methods=['GET'])
def deletar_exame(id):
    Exame.deletar_exame(id)
    return redirect(url_for('exame.listar_exames'))

@exame_blueprint.route('/login')
def logout():
    session.clear()
    return redirect(url_for('exame.login_fake'))


