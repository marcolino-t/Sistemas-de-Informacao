class Task():
     # TASK = TAREFA
     def __init__(self,titulo:str):
          print('construtor')
          self.__tit = titulo
          self.__desc = 'descrição'
          #definir o valor da prioridade da task
          self.__prioridade = len(self.__tit)

     def get_titulo(self):
          return self.__tit
     
     def get_descricao(self):
          return self.__desc
     
     def get_prioridade(self):
          return self.__prioridade
     
     def set_descricao(self,descricao:str):
          self.__desc = descricao
     
     def info(self):
          return f"-----------\nTitulo: {self.__tit}\nDescrição: {self.__desc}\nPrioridade: {self.__prioridade}"
     