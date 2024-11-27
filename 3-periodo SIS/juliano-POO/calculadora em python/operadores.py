class operadores:
    def __init__(self, valor1,valor2):
        self.valor1 = valor1
        self.valor2 = valor2

    def somar(self):
        total = self.valor1+self.valor2
        return total
    
    def subtrair(self):
        total = self.valor1-self.valor2
        return total
    
    def multiplicar(self):
        total = self.valor1*self.valor2
        return total
    
    def dividir(self):
        total = self.valor1/self.valor2
        return total