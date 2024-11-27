public class Caneta {
    public String modelo;  //public pode ser modificado em qualquer lugar
    public String cor;
    private float ponta; // private pode ser alterado apenas dentro da classe
    protected int carga;
    private boolean tampada;
    public void status(){
        System.out.println("Modelo: " + modelo);
        System.out.println("Uma caneta " + cor);
        System.out.println("medida da ponta: " + ponta);
        System.out.println("Carga: " + carga);
        System.out.println("Está tampada? " + tampada);
        
    }

    public void rabiscar(){ // só consegue alterar o "Tampada" porque esta dentro da classe
                            // esse metodo pode ser chamado fora da classe
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

