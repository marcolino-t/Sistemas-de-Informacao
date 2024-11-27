import mysql.connector

class BancoDados:
    def __init__(self):
        self.conexao = mysql.connector.connect(host='127.0.0.1', user='root', passwd='root', database= 'produto')
        self.cursor = self.conexao.cursor()

        #cria a tabela 'produto' se nao existir
        self.cursor.execute("""
                            CREATE TABLE IF NOT EXISTS produto(
                                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                                nome VARCHAR(255),
                                preco FLOAT,
                                quantidade INT
                            )
                            
                        """)
    
    def cadastrar_produto(self, produto):
        self.cursor.execute("""
            INSERT INTO produto (nome, preco, quantidade)
            VALUES (%s,%s,%s)
        """, (produto.nome, produto.preco, produto.quantidade))
        self.conexao.commit()

    def listar_produto(self):
        self.cursor.execute("""
            SELECT id, nome, preco, quantidade FROM produto            
        """)
        return self.cursor.fetchall()
    
    def atualizar_produto(self, produto, produto_id):
        self.cursor.execute("""
            UPDATE produto SET
                nome = %s,
                preco = %s,
                quantidade = %s
            WHERE id = %s
        """, (produto.nome, produto.preco, produto.quantidade, produto_id))
        self.conexao.commit()

    def deletar_produto(self, produto_id):
        self.cursor.execute("""
            DELETE FROM produto WHERE id = %s
        """, (produto_id,))
        self.conexao.commit()