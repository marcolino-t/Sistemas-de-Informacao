from flask import Blueprint, render_template, request, redirect, url_for
from app import mysql

exame_blueprint = Blueprint('exame', __name__)

# Rota para listar todos os exames
@exame_blueprint.route('/exames', methods=['GET'])
def listar_exames():
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM exames') 
    exames = cursor.fetchall()  
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

    cursor = mysql.connection.cursor()
    cursor.execute('''INSERT INTO exames (nome_paciente, nome, descricao, data_hora, status, preco) 
                      VALUES (%s, %s, %s, %s, %s, %s)''', 
                   (nome_paciente, nome, descricao, data_hora, status, preco))
    mysql.connection.commit() 
    return redirect(url_for('exame.listar_exames'))

# Rota para editar um exame
@exame_blueprint.route('/exames/editar/<int:id>', methods=['GET', 'POST'])
def editar_exame(id):
    cursor = mysql.connection.cursor()
    cursor.execute('SELECT * FROM exames WHERE id = %s', (id,))
    exame = cursor.fetchone()

    if request.method == 'POST':
        nome_paciente = request.form['nome_paciente']
        nome = request.form['nome']
        descricao = request.form['descricao']
        data_hora = request.form['data_hora']
        status = request.form['status']
        preco = request.form['preco']

        cursor.execute('''UPDATE exames SET nome_paciente=%s, nome=%s, descricao=%s, data_hora=%s, status=%s, preco=%s 
                          WHERE id=%s''', 
                       (nome_paciente, nome, descricao, data_hora, status, preco, id))
        mysql.connection.commit()
        return redirect(url_for('exame.listar_exames'))

    return render_template('editar_exame.html', exame=exame)

# Rota para excluir um exame
@exame_blueprint.route('/exames/deletar/<int:id>', methods=['GET'])
def deletar_exame(id):
    cursor = mysql.connection.cursor()
    cursor.execute('DELETE FROM exames WHERE id = %s', (id,))
    mysql.connection.commit()
    return redirect(url_for('exame.listar_exames'))
