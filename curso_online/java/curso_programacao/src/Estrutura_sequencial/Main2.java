package Estrutura_sequencial;

import java.util.Scanner;

public class Main2 {

	public static void main(String[] args) {
		
		//Scanner sc = new Scanner(System.in);
		
		//int a,b,soma;
		
		//a = sc.nextInt();
		//b = sc.nextInt();
		
		//soma = a + b;
		
		//System.out.println("Soma: " + soma);
		
		
		//Scanner sc = new Scanner(System.in);
		//int a,b,c,d, diferenca;
		
		//a = sc.nextInt();
		//b = sc.nextInt();
		//c = sc.nextInt();
		//d = sc.nextInt();
		
		//diferenca = (a*b-c*d);
		
		//System.out.println("Difrença = " + diferenca);
		
		 
		//Fazer um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por 
		//hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas 
		//decimais.
		
		//Scanner sc = new Scanner(System.in);

        //int number, workHours;
        //double hourlyRate, totalSalary;

        // Pedindo entrada ao usuário
       // System.out.print("Digite o número do funcionário: ");
        //number = sc.nextInt();

        //System.out.print("Digite as horas trabalhadas: ");
        //workHours = sc.nextInt();

       // System.out.print("Digite o salário por hora: ");
        //hourlyRate = sc.nextDouble(); // Alterado para double

        // Cálculo do salário
        //totalSalary = workHours * hourlyRate;

        // Exibindo os resultados formatados
       // System.out.println("Número do Funcionário: " + number);
        //System.out.printf("Salário: R$ %.2f%n", totalSalary);

        //sc.close();
		
		Scanner sc = new Scanner(System.in);
		int codPeca1,numPeca1, codPec2, numPec2;
		double precPeca1, precPeca2,valor1,valor2;
		
		System.out.println("Codigo da peça 1: ");
		codPeca1 = sc.nextInt();
		System.out.println("Numero de peças 1: ");
		numPeca1 = sc.nextInt();
		System.out.println("Valor da peça 1: ");
		precPeca1 = sc.nextDouble();
		
		valor1 = (numPeca1*precPeca1);
		
		System.out.println("Codigo peça 2: ");
		codPec2 = sc.nextInt();
		System.out.println("Numero de peças2: ");
		numPec2 = sc.nextInt();
		System.out.println("Valor da peca 2");
		precPeca2 = sc.nextDouble();
		valor2 = numPec2*precPeca2 ;
		
		System.out.println("Preço de peças 1: ");
		System.out.println("Total = " + valor1);
		System.out.println("Preço de peças 2: ");
		System.out.println("Total = " + valor2);
		
		
			
		
		
		
    }
		
}
		
