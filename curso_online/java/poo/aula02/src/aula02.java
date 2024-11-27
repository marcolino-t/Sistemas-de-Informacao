public class aula02 {
    public static void main(String[] args) throws Exception {
        Caneta c1 = new Caneta();
        c1.modelo = "BIC";
        c1.cor = "Azul";
        //c1.ponta = 0.5f; //erro pois o atributo na classe pé privada, e só pode ser alterada na classe
        c1.destampar();
        c1.status();
        c1.rabiscar();
        System.out.println("--------------------------------");

        Caneta c2 = new Caneta();
        c2.modelo = "CIB";
        c2.cor = "Verde";
        //c2.ponta = 0.5f; //erro pois o atributo na classe pé privada, e só pode ser alterada na classe
        c2.tampar();
        c2.status();
        c2.rabiscar();


    }
}
