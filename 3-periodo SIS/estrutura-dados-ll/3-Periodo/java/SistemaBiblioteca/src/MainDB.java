import java.util.LinkedList;

public class MainDB {
    public static void main(String[] args) {
        LivroDAO objDAO = new LivroDAO();

        // Inserir um novo livro
        Livro liv = new Livro("O pálido ponto azul");
        liv.setAutor("Carl Sagan");
        liv.setAno("1994");
        objDAO.inserir(liv);

        Livro liv2 = new Livro("COsmos");
        liv.setAutor("Carl Sagan");
        liv.setAno("1980");
        objDAO.inserir(liv2);

        // Consultar todos os livros
        LinkedList<Livro> dados = objDAO.consultarTodos();
        System.out.println("Todos os livros: " + dados);

        // Consultar um livro por ID
        int idParaConsultar = 1; // ID do livro que deseja consultar
        Livro livroConsultado = objDAO.consultar(idParaConsultar);
        if (livroConsultado != null) {
            System.out.println("Livro consultado: " + livroConsultado);
        }

        // Alterar um livro
        if (livroConsultado != null) {
            livroConsultado.setTitulo("O pálido ponto azul - Edição Revisada");
            livroConsultado.setAutor("Carl Sagan");
            livroConsultado.setAno("1997");
            objDAO.alterar(livroConsultado);

            // Consultar novamente para verificar a alteração
            Livro livroAlterado = objDAO.consultar(idParaConsultar);
            System.out.println("Livro após alteração: " + livroAlterado);
        }

        // Excluir um livro
        int idParaExcluir = 2; // ID do livro que deseja excluir
        objDAO.excluir(idParaExcluir);

        // Consultar todos os livros novamente para verificar exclusão
        dados = objDAO.consultarTodos();
        System.out.println("Todos os livros após exclusão: " + dados);
    }
}
