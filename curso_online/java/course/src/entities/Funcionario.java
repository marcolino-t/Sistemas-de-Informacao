package entities;

public class Funcionario {
	public String nome;
	public double salarioBruto;
	public double taxa;
	
	public double salarioLiquido() {
		return salarioBruto - taxa;
	}
	
	public void aumentoSalario(double porcentagem) {
		salarioBruto += salarioBruto * porcentagem / 100.0;
	}
	
	public String toString() { 
		return nome + ", Salário líquido: $ " + String.format("%.2f", salarioLiquido()); 
	} 
}
