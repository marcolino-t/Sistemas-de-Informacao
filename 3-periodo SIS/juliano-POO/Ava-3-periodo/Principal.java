
public class Principal {    public static void main(String[] args) {
        // Criando um objeto Aluno e atribuindo valores
        Aluno aluno1 = new Aluno("João da Silva", "Rua A, 123", "(11) 9999-8888", "joao.silva@email.com", "2023001");
        
        // Exibindo os dados do aluno
        System.out.println("Dados do Aluno:");
        System.out.println("Nome: " + aluno1.getNome());
        System.out.println("Endereço: " + aluno1.getEndereco());
        System.out.println("Telefone: " + aluno1.getTelefone());
        System.out.println("E-mail: " + aluno1.getEmail());
        System.out.println("Matrícula: " + aluno1.getMatricula());
    }
}
