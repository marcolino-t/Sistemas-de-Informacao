# app.py

from app import create_app
from flask import Flask, redirect, url_for

# Crie a instância do Flask usando a função create_app
app = create_app()

@app.route('/')
def home():
    # Redireciona automaticamente para a rota 'novo_exame'
    return redirect(url_for('exame.listar_exames'))

if __name__ == '__main__':
    # Inicie a aplicação com o Flask
    app.run(debug=True)
