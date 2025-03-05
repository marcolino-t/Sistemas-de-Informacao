package Estrutura_condicional;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		//Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não. 
		/*
		Scanner sc = new Scanner(System.in);
	
		int A;
		
		System.out.println("Digite um numero: ");
		A = sc.nextInt();
		
		if (A > 0 ) {
			System.out.println("numero positivo");
		} else {
			System.out.println("numero negativo");
		}
		
		
		sc.close();
		*/
		
		//Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao 
		//Multiplos", indicando se os valores lidos são múltiplos entre si. Atenção: os números devem poder ser digitados em 
		//ordem crescente ou decrescente.
		
		/*
		Scanner sc = new Scanner(System.in);
		
		int A,B;
		
		System.out.println("Digite o valor de A");
		A = sc.nextInt();
		System.out.println("Digite o valor de B");
		B = sc.nextInt();
		
		if (A % B == 0 || B % A == 0) {
			System.out.println("Sao multiplos");
		} else {
			System.out.println("não sao multiplos");
		}
		
		
		sc.close();
		*/
		
		 
		//Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode 
		//começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.
		
		
		/*
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Inicio: ");
		int horaInicial = sc.nextInt();
		System.out.println("final: ");
		int horaFinal = sc.nextInt();
		
		int duracao;
		
		if (horaInicial < horaFinal) {
			duracao = horaFinal - horaInicial;
		}
		else {
			duracao = 24 - horaInicial + horaFinal;
		}
		
		System.out.println("O JOGO DUROU " + duracao + " HORA(S)");
		
		sc.close();
		*/
		
		Scanner sc = new Scanner(System.in);
		
	    double total;
		
		System.out.println("Codigo do produto: ");
		int cod = sc.nextInt();
		System.out.println("Quantidade: ");
		int qtd = sc.nextInt();
		
		if (cod == 1) {
			total = (qtd* 4.00);
		} else if (cod == 2){
			total = (qtd*4.50);
		} else if (cod == 3) {
			total = (qtd*5.00);
		} else {
			System.out.println("Produto não existente. ");
			total = 0;
		}
		System.out.printf("Total: %.2f\n ",total );
		
		sc.close();
			
	}
	

}