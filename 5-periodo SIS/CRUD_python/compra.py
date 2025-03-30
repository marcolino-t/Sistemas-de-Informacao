import pymysql
from db_config import connect_db
from flask import jsonify, request, Blueprint

compra_bp = Blueprint("compra", __name__)

# Rota para listar todas as compras
@compra_bp.route('/compra')
def compras():
    try:
        conn = connect_db()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM lista_compras")
        rows = cursor.fetchall()
        resp = jsonify(rows)
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

# Rota para buscar uma compra por ID
@compra_bp.route('/compra/<id>', methods=['GET'])
def comprabyid(id):
    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute("SELECT * FROM lista_compras WHERE id = %s", (id,))
        row = cur.fetchone()  
        if row:
            resp = jsonify(row)
            resp.status_code = 200
            return resp
        else:
            return jsonify({'error': 'Compra não encontrada'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cur.close()
        conn.close()

# Rota para criar uma nova compra
@compra_bp.route('/compra', methods=['POST'])
def compra_nova():
    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        compra = request.json
        nome = compra['nome']
        marca = compra['marca']
        quantidade = compra['quantidade']
        preco = compra['preco']
        observacao = compra['observacao']
        
        # Insere os dados no banco de dados
        cur.execute("INSERT INTO lista_compras (nome, marca, quantidade, preco, observacao) VALUES (%s, %s, %s, %s, %s)", 
                    (nome, marca, quantidade, preco, observacao))
        conn.commit()
        
        resp = jsonify({'message': 'Compra cadastrada com sucesso'})
        resp.status_code = 201
        return resp
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cur.close()
        conn.close()

# Rota para atualizar uma compra existente
@compra_bp.route('/compra/<id>', methods=['PUT'])
def compra_atualiza(id):
    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        compra = request.json
        nome = compra['nome']
        marca = compra['marca']
        quantidade = compra['quantidade']
        preco = compra['preco']
        observacao = compra['observacao']
        
        # Atualiza os dados da compra
        cur.execute("UPDATE lista_compras SET nome = %s, marca = %s, quantidade = %s, preco = %s, observacao = %s WHERE id = %s", 
                    (nome, marca, quantidade, preco, observacao, id))
        conn.commit()
        
        resp = jsonify({'message': 'Compra atualizada com sucesso'})
        resp.status_code = 200
        return resp
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cur.close()
        conn.close()

# Rota para deletar uma compra
@compra_bp.route('/compra/<id>', methods=['DELETE'])
def compra_deleta(id):
    try:
        conn = connect_db()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute("DELETE FROM lista_compras WHERE id = %s", (id,))
        conn.commit()
        
        resp = jsonify({'message': 'Compra deletada com sucesso'})
        resp.status_code = 200
        return resp
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cur.close()
        conn.close()
