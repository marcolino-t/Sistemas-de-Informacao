class Caneta:
    def __init__(self,modelo,cor,ponta,carga,tampada):
        self.modelo = modelo
        self.cor = cor
        self.__ponta = ponta
        self.carga = carga
        self.tampada = tampada

    def rabiscar(self):
        if self.tampada is True:
            print('Error ! não é possivel rabiscar, a caneta está tampada')
        else:
            print('<<< Estou Rabiscada >>>')

    def tampar(self):
        self.tampada = True

    def destampar(self):
        self.tempada = False

    def __str__(self):
        print('-'*15)
        return f'Modelo: {self.modelo}\nCor: {self.cor}\nCarga:{self.carga}\nTampada: {self.tampada}'

    def Getponta(self):
        return f'Ponta: {self.__ponta}'

    def SetPonta(self,p):
        self.__ponta = p