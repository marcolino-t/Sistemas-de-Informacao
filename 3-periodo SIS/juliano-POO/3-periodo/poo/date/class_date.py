




class Date:
    def __init__(self,day,month,year):
        self.__day = day
        self.__month = month
        self.__year = year

    def getDay(self):
        return self.__day
    
    def getMonth(self):
        return self.__month
    
    def getYear(self):
        return self.__year
    
    def setDay(self,NewDay):
        self.__day = NewDay

    def setMonth(self,NewMonth):
        self.__month = NewMonth

    def setYear(self, NewYear):
        self.__year = NewYear

    def formatDate(self):
        print(f'{self.getYear()}/{self.getMonth()}/{self.getDay()}')