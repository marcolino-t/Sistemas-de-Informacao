import mysql.connector

class BancoDados:
    def __init__(self):
        self.conexao = mysql.connector.connect(host='127.0.0.1', user='root', passwd='root', database= 'funcionario')
        self.cursor = self.conexao.cursor()

        #cria a tabela 'funcionario' se nao existir
        self.cursor.execute("""
                            CREATE TABLE IF NOT EXISTS funcionario(
                                id INTEGER PRIMARY KEY AUTO_INCREMENT,
                                nome VARCHAR(255),
                                endereco varchar (255),
                                contato varchar(15),
                                ramo varchar(250)
                            )
                            
                        """)
    
    def cadastrar_funcionario(self, funcionario):
        self.cursor.execute("""
            INSERT INTO funcionario (nome, endereco, contato,ramo)
            VALUES (%s,%s,%s,%s)
        """, (funcionario.nome, funcionario.endereco, funcionario.contato,funcionario.ramo))
        self.conexao.commit()

    def listar_funcionario(self):
        self.cursor.execute("""
            SELECT id, nome, endereco, contato, ramo FROM funcionario            
        """)
        return self.cursor.fetchall()
    
    def atualizar_funcionario(self, funcionario, funcionario_id):
        self.cursor.execute("""
            UPDATE funcionario SET
                nome = %s,
                endereco = %s,
                contato = %s,
                ramo = %s
            WHERE id = %s
        """, (funcionario.nome, funcionario.endereco, funcionario.contato, funcionario.ramo, funcionario_id))
        self.conexao.commit()

    def deletar_funcionario(self, funcionario_id):
        self.cursor.execute("""
            DELETE FROM funcionario WHERE id = %s
        """, (funcionario_id,))
        self.conexao.commit()