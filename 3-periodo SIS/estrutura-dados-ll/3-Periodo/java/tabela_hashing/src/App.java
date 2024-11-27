import java.util.LinkedList;
import java.util.Random;
import java.util.Scanner;

public class App {
    static LinkedList tabela[] = new LinkedList[26];
    static Scanner input = new Scanner(System.in);
    public static int hash(String valor){
        valor = valor.toLowerCase();
        int codigoAscii = valor.charAt(0);
        int resto = (codigoAscii+7)%26;
        return resto ;
    }

    public static void adiciona(String valor){
        int categoria = hash(valor);
        if (tabela[categoria] == null){
            tabela[categoria] = new LinkedList();
        }
        tabela[categoria].add(valor);
        
        
    }
        public static void imprimir(){
            System.out.println("-----------------");
            for (int i = 0; i < tabela.length; i++) {
                LinkedList lista = tabela[i];
                if (lista!= null){
                    int total = lista.size();
                    System.out.println((i+"Total: " + total + "->" + lista));
                }else{
                    System.out.println(i + "Total: " + 0 + "->" + lista);
                }
                
                
            }
        }

      

    
        public static void gerarNomes(int qtdPalavra){
            Random rnd = new Random();
            for (int i = 0; i < qtdPalavra; i++) {
                int qtdLetras = rnd.nextInt(3,9);
                String palavra = "";
                for (int j = 0; j < qtdLetras; j++) {
                    char letra = (char)rnd.nextInt(97,123);
                    palavra += letra;
                }
                adiciona(palavra);
                
            }
            
        }

        public static int menu(){
            
            System.out.println("***MENU***");
            System.out.println("1 - Buscar");
            System.out.println("2 - Sair");
            System.out.println(">>>>");
            return input.nextInt();
        }

        public static void busca(String palavra){
            int categoria = hash(palavra);
            System.out.println("***BUSCA***");
            System.out.println("categoria " + categoria);
            LinkedList lista = tabela[categoria];
            if (lista.contains(palavra)){
                System.out.println(palavra + " Esta presente");

            }else{
                System.out.println(palavra + " Não está presente");
            }
        }


    public static void main(String[] args){
        gerarNomes(100);
        imprimir();
        int op = 0;
        do {
            op=menu();
            if (op ==1){
                System.out.println("Digite a palavra a ser procurada");
                String palavra = input.next();
                busca(palavra);

            }
        } while (op!=2);
    }
}
