public class Caneta {
    String modelo;
    String cor;
    float ponta;
    int carga;
    boolean tampada;
    public void status(){
        System.out.println("Modelo: " + modelo);
        System.out.println("Uma caneta " + cor);
        System.out.println("medida da ponta: " + ponta);
        System.out.println("Carga: " + carga);
        System.out.println("Está tampada? " + tampada);
        
    }

    public void rabiscar(){
        if (this.tampada == true) {
            System.out.println("Erro, não posso rabiscar");
        }else{
                System.out.println("Estou rabiscando");
            }
            
        }

    
    public void tampar(){
        this.tampada= true;

    
}   
    public void destampar(){    
        this.tampada= false;
    
}
}

