import pymysql
from db_config import connect_db
from flask import app, jsonify
from flask import flash, request,Blueprint

usuario_bp = Blueprint("usuario", __name__)

@usuario_bp.route('/usuario')
def usuario():
    try:
        conn = connect_db()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM usuario")
        rows = cursor.fetchall()
        resp = jsonify(rows)
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@usuario_bp.route('/usuario/<id>')
def get_usuariobyid(id):
    try:
        conn = connect_db()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM idusuario WHERE id = %s""", (id,))
        row = cursor.fetchall()
        if row:
            resp = jsonify(row[0])
            resp.status_code = 200
            return resp
        else:
            resp = jsonify({"error": "Usuario não encontrado"})
            resp.status_code = 404
            return resp
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@usuario_bp.route('/usuario', methods=['POST'])
def usuarionovo(id):
    try:
        conn = connect_db()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        #pegar dados jason
        usuario = request.json
        nome = usuario['nome']
        email = usuario['email']
        senha = usuario['senha']
        telefone = usuario['telefone']
        cursor.execute("INSERT INTO usuario (nome, email, senha, telefone) VALUES (%s, %s, %s, %s)",
                        (nome, email, senha, telefone))
        conn.commit()
        resp = jsonify({"message": "Usuário criado com sucesso"})
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
        conn.rollback()
