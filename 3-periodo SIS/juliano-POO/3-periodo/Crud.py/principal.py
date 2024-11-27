from class_funcionariodb import BancoDados
from class_funcionario import funcionario

def cadastrar_funcionario():
    nome = input("Digite o nome do funcionario: ")
    endereco =input("Digite o endereco do funcionario: ")
    contato = int(input("Digite a contato do funcionario: "))
    ramo = input('digite o ramo que o funcionario atua: ')

    novo_funcionario = funcionario(nome, endereco, contato,ramo)

    Banco_Dados.cadastrar_funcionario(novo_funcionario)

    print("funcionario cadastrado com sucesso")

def listar_funcionario():
    funcionario = Banco_Dados.listar_funcionario()
    for funcionarios in funcionario:
        print (f"ID: {funcionarios[0]} | Nome: {funcionarios[1]} |endereço: {funcionarios[2]} | contato: {funcionarios[3]} | ramo: {funcionarios[4]}")

def atualizar_funcionario():
    funcionario_id = int(input("Digite o ID do funcionario a ser atualizado: "))
    novo_nome = input("Digite o nome do novo funcionario: ")
    novo_endereco = input("Digite o endereco do novo funcionario: ")
    novo_contato = input("Digite o contato do novo funcionario: ")
    novo_ramo = input("digite o ramo do novo funcionario: ")

    funcionario_atualizado = funcionario(novo_nome, novo_endereco, novo_contato, novo_ramo)

    Banco_Dados.atualizar_funcionario(funcionario_atualizado, funcionario_id)
    print("funcionario atualizado com sucesso!")

def deletar_funcionario():
    funcionario_id = int(input("Digite o ID do funcionario a ser excluido: "))
    Banco_Dados.deletar_funcionario(funcionario_id)
    print ("funcionario deletado com sucesso!")


Banco_Dados = BancoDados()

while True:
    print ("\nMenu Principal:")
    print ("1- Cadastrar funcionario")
    print ("2- Listar funcionarios")
    print ("3- Atualizar funcionario")
    print ("4- Deletar funcionario")
    print ("0- Sair")

    opcao = input("Digite a opção desejada: ")

    if opcao == '1':
        cadastrar_funcionario()
    elif opcao == '2':
        listar_funcionario()
    elif opcao == '3':
        atualizar_funcionario()
    elif opcao == '4':
        deletar_funcionario()
    elif opcao == '0':
        print ("Saindo...")
        break
    else: 
        print("Opção inválida!")

#fechar a conexao com o banco de dados
Banco_Dados.conexao.close()