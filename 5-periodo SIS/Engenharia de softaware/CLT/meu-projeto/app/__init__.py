# app/__init__.py

from flask import Flask
from flask_mysqldb import MySQL

# Inicialize a instância do MySQL
mysql = MySQL()

def create_app():
    # Crie a instância do Flask
    app = Flask(__name__)

    # Configurações do banco de dados
    app.config['MYSQL_HOST'] = 'localhost'
    app.config['MYSQL_USER'] = 'root'
    app.config['MYSQL_PASSWORD'] = 'root'
    app.config['MYSQL_DB'] = 'banco_agenda_exames'

    # Inicialize o MySQL com a instância do app
    mysql.init_app(app)

    # Registrar blueprints
    from app.controllers.controller_exame import exame_blueprint
    app.register_blueprint(exame_blueprint)

    # Retorne a instância do app para o uso
    return app
