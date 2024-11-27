from class_produtodb import BancoDados
from class_produto import Produto

def cadastrar_produto():
    nome = input("Digite o nome do produto: ")
    preco = float(input("Digite o preco do produto: "))
    quantidade = int(input("Digite a quantidade do produto: "))

    novo_produto = Produto(nome, preco, quantidade)

    Banco_Dados.cadastrar_produto(novo_produto)

    print("Produto cadastrado com sucesso")

def listar_produto():
    produto = Banco_Dados.listar_produto()
    for produtos in produto:
        print (f"ID: {produtos[0]} | Nome: {produtos[1]} | Preço: {produtos[2]} | Quantidade: {produtos[3]}")

def atualizar_produto():
    produto_id = int(input("Digite o ID do produto a ser atualizado: "))
    novo_nome = input("Digite o novo nome do produto: ")
    novo_preco = input("Digite o novo preco do produto: ")
    novo_quantidade = input("Digite a nova quantidade do produto: ")

    produto_atualizado = Produto(novo_nome, novo_preco, novo_quantidade)

    Banco_Dados.atualizar_produto(produto_atualizado, produto_id)
    print("Produto atualizado com sucesso!")

def deletar_produto():
    produto_id = int(input("Digite o ID do produto a ser excluido: "))
    Banco_Dados.deletar_produto(produto_id)
    print ("Produto deletado com sucesso!")


Banco_Dados = BancoDados()

while True:
    print ("\nMenu Principal:")
    print ("1- Cadastrar Produto")
    print ("2- Listar Produtos")
    print ("3- Atualizar Produto")
    print ("4- Deletar Produto")
    print ("0- Sair")

    opcao = input("Digite a opção desejada: ")

    if opcao == '1':
        cadastrar_produto()
    elif opcao == '2':
        listar_produto()
    elif opcao == '3':
        atualizar_produto()
    elif opcao == '4':
        deletar_produto()
    elif opcao == '0':
        print ("Saindo...")
        break
    else: 
        print("Opção inválida!")

#fechar a conexao com o banco de dados
Banco_Dados.conexao.close()