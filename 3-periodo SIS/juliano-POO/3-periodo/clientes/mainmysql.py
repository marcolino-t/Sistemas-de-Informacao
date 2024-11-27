from class_bdmysql import BancoDados
from class_cliente import Cliente

def cadastrar_cliente():
    nome = input("Digite o nome do cliente: ")
    email = input("Digite o email do cliente: ")
    telefone = input("Digite o telefone do cliente: ")

    novo_cliente = Cliente(nome, email, telefone)

    Banco_Dados.inserir_cliente(novo_cliente)

    print("Cliente cadastrado com sucesso")

def listar_clientes():
    clientes = Banco_Dados.listar_clientes()
    for cliente in clientes:
        print (f"ID: {cliente[0]} | Nome: {cliente[1]} | Email: {cliente[2]} | Telefone: {cliente[3]}")

def atualizar_cliente():
    cliente_id = int(input("Digite o ID do cliente a ser atualizado: "))
    novo_nome = input("Digite o novo nome do cliente: ")
    novo_email = input("Digite o novo email do cliente: ")
    novo_telefone = input("Digite o novo telefone do cliente: ")

    cliente_atualizado = Cliente(novo_nome, novo_email, novo_telefone)

    Banco_Dados.atualizar_cliente(cliente_atualizado, cliente_id)
    print("Cliente atualizado com sucesso!")

def deletar_cliente():
    cliente_id = int(input("Digite o ID do cliente a ser excluido: "))
    Banco_Dados.deletar_clientes(cliente_id)
    print ("Cliente deletado com sucesso!")


Banco_Dados = BancoDados()

while True:
    print ("\nMenu Principal:")
    print ("1- Cadastrar Cliente")
    print ("2- Listar Clientes")
    print ("3- Atualizar Cliente")
    print ("4- Deletar Cliente")
    print ("0- Sair")

    opcao = input("Digite a opção desejada: ")

    if opcao == '1':
        cadastrar_cliente()
    elif opcao == '2':
        listar_clientes()
    elif opcao == '3':
        atualizar_cliente()
    elif opcao == '4':
        deletar_cliente()
    elif opcao == '0':
        print ("Saindo...")
        break
    else: 
        print("Opção inválida!")

#fechar a conexao com o banco de dados
Banco_Dados.conexao.close()
