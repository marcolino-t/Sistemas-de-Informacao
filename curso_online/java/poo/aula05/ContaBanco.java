package poo.aula05;

public class ContaBanco {
    public int numConta;
    protected String tipo;
    private String dono;
    private float saldo;
    private boolean status;

    //método Construct
    public  ContaBanco(){
    this.getSaldo(0);
    this.getStatus(false);
}

    

    //Getters and setters
    public int getNumConta() {
        return numConta;
    }


    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }


    public String getTipo() {
        return tipo;
    }


    public void setTipo(String tipo) {
        this.tipo = tipo;
    }


    public String getDono() {
        return dono;
    }


    public void setDono(String dono) {
        this.dono = dono;
    }


    public float getSaldo() {
        return saldo;
    }


    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }


    public boolean Status() {
        return status;
    }


    public void setStatus(boolean status) {
        this.status = status;
    }




    //Métodos
    public void abrirConta(String tipo){
        setTipo(tipo);
        setStatus(true);
        if (tipo.equals("CC") ){
            setSaldo(50);
        }else if (tipo.equals("CP")){
            setSaldo(150);
        }

    }

    public void  fecharConta(){
        if (this.getSaldo()> 0){
            System.out.println("Conta não pode ser fechada");
        }else if (this.getSaldo() < 0){
            System.out.println("Conta não pode ser fechada");
        }else{
            setStatus(false);
            System.out.println("Conta Fechada");
        }

    }

    public void depositar(float valor){
        if(getStatus() == true){
            setSaldo(getSaldo()+valor);
        }else{System.out.println("conta fechada");}
    
    }

    public void sacar(float valor){
        if (getStatus() == true){
            if (getSaldo() > valor){
                setSaldo(getSaldo() - valor);
            }else{
                System.out.println("Saldo insuficiente");
        }

    }
}

    public void pagarMensal(){
        int v = 0;
        if (this.getTipo()=="CC") {
            v = 12;
            
        } else if (this.getTipo()=="CP"){
            v = 20;
        }
        if (getStatus() == true){
            setSaldo(getSaldo() - v);
            System.out.println("Mensalidade paga");
        }else{
            System.out.println("impossivel pagar. Conta fechada");
            
        }

    }

    
}
