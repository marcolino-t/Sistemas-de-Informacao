import pymysql
from db_config import connect_db
from flask import jsonify
from flask import flash, request, Blueprint,current_app
import jwt
from funcoes import valida_token

usuario_bp = Blueprint("usuario", __name__)

@usuario_bp.route('/usuarios')
def usuario():
    if not valida_token(request.headers.get('Authorization')):
        return {"sucesso": False, }, 401

            
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
def usuariobyid(id):
    if not valida_token(request.headers.get('Authorization')):
        return {"sucesso": False, }, 401

    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute("SELECT * FROM usuario WHERE idusuario = %s""", (id))
        rows = cur.fetchall()
        resp = jsonify(rows[0])
        resp.status_code = 200
        return resp
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@usuario_bp.route('/usuario', methods=['POST'])
def usuarionovo(id):
    if not valida_token(request.headers.get('Authorization')):
        return {"sucesso": False, }, 401

    
    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        #pegar dados json
        usuario = request.json
        nome = usuario['nome']
        email = usuario['email']
        senha = usuario['senha']
        telefone = usuario['telefone']
        cur.execute("INSERT INTO usuario (nome, email, senha, telefone) VALUES (%s, %s, %s, %s)", 
                    (nome, email, senha, telefone))
        conn.commit()
        resp = jsonify({'message': 'Usuário cadastrado com sucesso'})
        resp.status_code = 200
        return resp
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@usuario_bp.route('/usuario/<id>', methods=['PUT'])
def usuarioatualiza(id):
    if not valida_token(request.headers.get('Authorization')):
        return {"sucesso": False, }, 401

    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        #pegar dados json
        usuario = request.json
        nome = usuario['nome']
        email = usuario['email']
        senha = usuario['senha']
        telefone = usuario['telefone']
        cur.execute("UPDATE usuario SET nome=?, email=?, senha=?, telefone=? WHERE idusuario=?", 
                    (nome, email, senha, telefone, id))
        conn.commit()
        resp = jsonify({'message': 'Usuário atualizado com sucesso'})
        resp.status_code = 200
        return resp
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@usuario_bp.route('/usuario/<id>', methods=['DELETE'])
def usuariodeleta(id):
    if not valida_token(request.headers.get('Authorization')):
        return {"sucesso": False, }, 401

    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute("DELETE FROM usuario WHERE idusuario=?", (id))
        conn.commit()
        resp = jsonify({'message': 'Usuário deletado com sucesso'})
        resp.status_code = 200
        return resp
    except Exception as e:
        return jsonify({'error': str(e)}), 500


