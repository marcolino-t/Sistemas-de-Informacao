import javax.swing.JOptionPane;

public class Cliente {
    private String nome;
    private String cpf;
    private double saldo;

    public Cliente(String cpf){
        this.cpf = cpf;
    }

    // metodos modificadores e de acesso
    // set -> modificador (parametros e nao me retorna nada)
    // get -> acesso (não tem parametro e retorna o valor do atributo)

    private void setCpf(String cpf){
        //this.cpf = cpf;
        if(Util.validaCpf(cpf)){
            this.cpf=cpf;
        }else{
            System.out.println("CPF Inválido");
            String novoCPF = JOptionPane.showInputDialog("Digite novo CPF: ");
            this.setCpf(novoCPF);
            
        }
    }

    public String getCpf(){
        return cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String toString(){
        return "CPF: " + getCpf() + "|NOME " + getNome() + "|Saldo: R$" + getSaldo();
    }
    
}
