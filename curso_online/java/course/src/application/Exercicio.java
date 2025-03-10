package application;

import java.util.Scanner;

import entities.Retangulo;

public class Exercicio {

	public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
		
		Retangulo retangulo = new Retangulo();
		
		System.out.print("Digite a altura: ");
		retangulo.height = sc.nextDouble();
		
		System.out.print("Digite a largura: ");
		retangulo.width = sc.nextDouble();
		
		double area = retangulo.area();
		System.out.println("Área do retângulo: " + area);
		
		sc.close();
		
		
	}

}
