package application;

import java.util.Scanner;
import entities.Funcionario;

public class Dados_funcionario {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		Funcionario funcionario = new Funcionario();
		
		System.out.print("Nome do funcionário: ");
		funcionario.nome = sc.nextLine();
		
		System.out.print("Salário bruto: ");
		funcionario.salarioBruto = sc.nextDouble();
		
		System.out.print("Imposto: ");
		funcionario.taxa = sc.nextDouble();
		
		System.out.println("\nDados do funcionário: " + funcionario);
		
		System.out.print("\nDigite a porcentagem de aumento: ");
		double porcentagem = sc.nextDouble();
		funcionario.aumentoSalario(porcentagem);
		
		System.out.println("\nDados atualizados: " + funcionario);
		
		sc.close();
	}


		

}


