import TESTES.teste_soma as teste_soma
# Teste de soma

class somar():
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def soma(self):
        return self.a + self.b


if __name__ == "__main__":
    a = 0
    b = 0
    s = somar(a, b)
    