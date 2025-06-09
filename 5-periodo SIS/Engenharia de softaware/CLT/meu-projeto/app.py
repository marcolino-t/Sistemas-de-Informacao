# app.py

from app import create_app
from flask import Flask, redirect, url_for

# Crie a instância do Flask usando a função create_app
app = create_app()

@app.route('/')
def home():
    return redirect(url_for('exame.login_fake'))


if __name__ == '__main__':
    # Inicie a aplicação com o Flask
    app.run(debug=True)
