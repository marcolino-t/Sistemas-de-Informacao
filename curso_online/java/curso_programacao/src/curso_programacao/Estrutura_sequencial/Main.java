package curso_programacao.Estrutura_sequencial;

import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		int y = 32;
		
		System.out.println(y);
		
		double x = 10.2558;
		
		System.out.printf( "%.3f\n", x);
		System.out.println("bom dia");
		
		System.out.println("Resultado = " + x + " metros");
		
		String nome = "Maria";
		 int idade = 31;
		 double renda = 4000.0;
		 
		 //Para concatenar vários elementos em um 
		 //mesmo comando de escrita
		 System.out.printf("%s tem %d anos e ganha R$ %.2f reais%n", nome, idade, renda);
		 
		 
		 String product1 = "Computer";
		 String product2 = "Office desk";
		 int age = 30;
		 int code = 5290;
		 char gender = 'F';
		 double price1 = 2100.0;
		 double price2 = 650.50;
		 double measure = 53.234567;
		 
		 System.out.println("Products:");
		 System.out.printf("%s, which price is $ %.2f%n", product1, price1);
		 System.out.printf("%s, which price is $ %.2f%n", product2, price2);
		 System.out.println();
		 System.out.printf("Record: %d years old, code %d and gender: %c%n", age, code, gender);
		 System.out.println();
		 System.out.printf("Measue with eight decimal places: %.8f%n", measure);
		 System.out.printf("Rouded (three decimal places): %.3f%n", measure);
		 Locale.setDefault(Locale.US);
		 System.out.printf("US decimal point: %.3f%n", measure);
				 
		Scanner sc = new Scanner(System.in);
		//next() pra entrada string
		//nextDouble() pra entrada de numeros decimais
		//nextInt() pra numeros inteiros
  		String p;
		p = sc.next();
		System.out.println("Você digitou: " + p);
		
		
		
		
		
		
		 double h = 3.0;
		 double j = 4.0;
		 double z = -5.0;
		 double A, B, C;
		 A = Math.sqrt(h);
		 B = Math.sqrt(j);
		 C = Math.sqrt(25.0);
		 System.out.println("Raiz quadrada de " + h + " = " + A);
		 System.out.println("Raiz quadrada de " + j + " = " + B);
		 System.out.println("Raiz quadrada de 25 = " + C);
		 A = Math.pow(h, j);
		 B = Math.pow(h, 2.0);
		 C = Math.pow(5.0, 2.0);
		 System.out.println(h + " elevado a " + j+ " = " + A);
		 System.out.println(h + " elevado ao quadrado = " + B);
		 System.out.println("5 elevado ao quadrado = " + C);
		 A = Math.abs(j);
		 B = Math.abs(z);
		 System.out.println("Valor absoluto de "+ j + " = " + A);
		 System.out.println("Valor absoluto de "+ z + " = " + B);
		
		

	}

}
