import mysql.connector

class BancoDados:
    def __init__(self):
        self.conexao = mysql.connector.connect(host='127.0.0.1', user='root', passwd='root', database= 'poo')
        self.cursor = self.conexao.cursor()

        #cria a tabela 'cliente' se nao existir
        self.cursor.execute("""
                            CREATE TABLE IF NOT EXISTS clientes(
                                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                                nome VARCHAR(255),
                                email VARCHAR(255),
                                telefone VARCHAR(255)
                            )
                            
                        """)
    
    def inserir_cliente(self, cliente):
        self.cursor.execute("""
            INSERT INTO clientes (nome, email, telefone)
            VALUES (%s,%s,%s)
        """, (cliente.nome, cliente.email, cliente.telefone))
        self.conexao.commit()

    def listar_clientes(self):
        self.cursor.execute("""
            SELECT id, nome, email, telefone FROM clientes            
        """)
        return self.cursor.fetchall()
    
    def atualizar_cliente(self, cliente, cliente_id):
        self.cursor.execute("""
            UPDATE clientes SET
                nome = %s,
                email = %s,
                telefone = %s
            WHERE id = %s
        """, (cliente.nome, cliente.email, cliente.telefone, cliente_id))
        self.conexao.commit()

    def deletar_clientes(self, cliente_id):
        self.cursor.execute("""
            DELETE FROM clientes WHERE id = %s
        """, (cliente_id,))
        self.conexao.commit()