package Estrutura_repetitiva;


import java.util.Scanner;

public class Main2 {

	public static void main(String[] args) {
		
		/*
		Scanner sc = new Scanner(System.in);
		
		int x = sc.nextInt();
		
		int soma = 0;
		while (x!=0) {
			soma += x;
			x = sc.nextInt();
		}
		
		System.out.println(soma);
		sc.close();
	*/
		
		//Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha 
		//incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser 
		//impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 
		
		/*
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Digite a senha: ");
		int senha= sc.nextInt();
		
		while (senha != 2002) {
			System.out.println("senha inválida...");
			System.out.println("Digite a senha: ");
			senha = sc.nextInt();
			
		}
		
		System.out.println("Acesso permitido...");
		*/
		
		//Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva 
		//um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 
		//4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até 
		//que seja válido). O programa será encerrado quando o código informado for o número 4. Deve ser escrito a 
		//mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme 
		//exemplo.
		
		
		Scanner sc = new Scanner(System.in);
		
		int alcool = 0;
		int diesel = 0;
		int gasolina = 0;
		System.out.println("Tipo de combustivel: ");
		int tipo = sc.nextInt();
		
		while (tipo != 4) {
			if (tipo == 1) {
				alcool += 1;
			}else if (tipo == 2) {
				diesel +=1;
			}else if (tipo ==3) {
				gasolina += 1;
			}
			
			tipo = sc.nextInt();
		}
		System.out.println("MUITO OBRIGADO");
		System.out.println("Alcool: " + alcool);
		System.out.println("Gasolina: " + gasolina);
		System.out.println("Diesel: " + diesel);
		
	}
	

}
