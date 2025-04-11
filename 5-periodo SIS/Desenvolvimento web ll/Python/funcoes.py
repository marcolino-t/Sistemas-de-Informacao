import jwt
from flask import request,current_app

def valida_token(token):
    if not token or not token.startswith('Bearer '):
        return {"sucesso": False}, 401
    #valida token
    try:
        dados = jwt.decode(token.split(' ')[1], 
                current_app.config.get('SECRET_KEY'), 
                algorithms=["HS256"])
        return {"sucesso": True}, 200
    except Exception as e:
        print("Erro ao validar o token", e)
        return {"sucesso": False}, 401
