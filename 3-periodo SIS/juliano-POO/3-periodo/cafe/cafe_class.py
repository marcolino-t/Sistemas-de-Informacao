class Cafe:
    #construtor
    def __init__(self,nome,preco):
        self.nome = nome
        self.preco = preco
    
    def check_orcamento(self,orcamento):
        #check if the orcamento is valid
        if not isinstance(orcamento, (int,float)):
            print("digite float ou int: ")
            exit()
        if orcamento < 5:
            print("Desculpe,você não tem dinheiro")
            exit()

    def get_change(self,orcamento):
        return orcamento - self.preco
    
    def vender(self,orcamento):
        self.check_orcamento(orcamento)
        if orcamento >= self.preco:
            print(f"Você pode comprar o {self.nome} café")
            if orcamento == self.preco:
                print('Valor exato')
            else:
                print(f'Aqui está seu troco: {self.get_change(orcamento)}')

            exit('obrigado por sua compra')
    