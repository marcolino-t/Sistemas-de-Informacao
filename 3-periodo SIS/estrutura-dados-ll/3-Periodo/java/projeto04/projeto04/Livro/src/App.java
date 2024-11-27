import java.sql.Connection;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.InputMismatchException;
import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

import connection.Conexao;
import dao.EmprestimoDAO;
import dao.LivroDAO;
import dao.UsuarioDAO;
import model.Emprestimo;
import model.Livro;
import model.Usuario;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        int opcao = -1;

        do {
            try {
                System.out.println("\nSistema de Gerenciamento de Biblioteca");
                System.out.println("1.  Adicionar Livro");
                System.out.println("2.  Atualizar Livro");
                System.out.println("3.  Excluir Livro");
                System.out.println("4.  Consultar Livro");
                System.out.println("5.  Listar Todos os Livros");
                System.out.println("6.  Adicionar Usuário");
                System.out.println("7.  Atualizar Usuário");
                System.out.println("8.  Excluir Usuário");
                System.out.println("9.  Consultar Usuário");
                System.out.println("10. Listar Todos os Usuários");
                System.out.println("11. Realizar Empréstimo");
                System.out.println("12. Registrar Devolução");
                System.out.println("13. Consultar Histórico de Empréstimos");
                System.out.println("14. Listar Todos os Empréstimos");
                System.out.println("0.  Sair");
                System.out.print("Escolha uma opção: ");
                opcao = scanner.nextInt();

                switch (opcao) {
                    case 1:
                        adicionarLivro(scanner);
                        break;
                    case 2:
                        atualizarLivro(scanner);
                        break;
                    case 3:
                        excluirLivro(scanner);
                        break;
                    case 4:
                        consultarLivro(scanner);
                        break;
                    case 5:
                        listarTodosLivros();
                        break;
                    case 6:
                        adicionarUsuario(scanner);
                        break;
                    case 7:
                        atualizarUsuario(scanner);
                        break;
                    case 8:
                        excluirUsuario(scanner);
                        break;
                    case 9:
                        consultarUsuario(scanner);
                        break;
                    case 10:
                        listarTodosUsuarios();
                        break;
                    case 11:
                        realizarEmprestimo(scanner);
                        break;
                    case 12:
                        registrarDevolucao(scanner);
                        break;
                    case 13:
                        consultarHistoricoEmprestimos(scanner);
                        break;
                    case 14:
                        listarTodosEmprestimos();
                        break;
                    case 0:
                        System.out.println("Saindo...");
                        break;
                    default:
                        System.out.println("Opção inválida. Tente novamente.");
                }
            } catch (InputMismatchException e) {
                System.out.println("Entrada inválida. Por favor, insira um número.");
                scanner.next();
            } catch (Exception e) {
                System.out.println("Ocorreu um erro: " + e.getMessage());
            }
        } while (opcao != 0);

        scanner.close();
    }

    private static void adicionarLivro(Scanner scanner) {
        try {
            System.out.print("Título: ");
            scanner.nextLine();
            String titulo = scanner.nextLine();

            System.out.print("Autor: ");
            String autor = scanner.nextLine();
            int ano = 0;
            boolean inputValido = false;

            while (!inputValido) {
                System.out.print("Ano: ");
                try {
                    ano = Integer.parseInt(scanner.nextLine());
                    inputValido = true;
                } catch (NumberFormatException e) {
                    System.out.println("Entrada inválida. Por favor, digite um número inteiro no campo ano.");
                }
            }

            boolean disponivel = true;

            Livro livro = new Livro(0, titulo, autor, ano, disponivel);
            Connection conexao = new Conexao().getConexaoDB();
            LivroDAO livroDAO = new LivroDAO(conexao);

            livroDAO.adicionarLivro(livro);
            System.out.println("Livro adicionado com sucesso.");
        } catch (Exception e) {
            System.out.println("Erro ao adicionar livro: " + e.getMessage());
        }
    }

    private static void atualizarLivro(Scanner scanner) {
        try {
            System.out.print("ID do Livro: ");
            int id = scanner.nextInt();
            LivroDAO livroDAO = new LivroDAO(new Conexao().getConexaoDB());
            Livro livro = livroDAO.consultarLivro(id);
            if (livro != null) {
                System.out.print("Novo Título: ");
                scanner.nextLine();
                String titulo = scanner.nextLine();

                System.out.print("Novo Autor: ");
                String autor = scanner.nextLine();
                System.out.print("Novo Ano: ");

                int ano = scanner.nextInt();
                boolean disponivel = livro.isDisponivel();

                livro.setTitulo(titulo);
                livro.setAutor(autor);
                livro.setAno(ano);
                livro.setDisponivel(disponivel);

                livroDAO.atualizarLivro(livro);
                System.out.println("Livro atualizado com sucesso.");
            } else {
                System.out.println("Livro não encontrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao atualizar livro: " + e.getMessage());
        }
    }

    private static void excluirLivro(Scanner scanner) {
        try {
            System.out.print("ID do Livro: ");
            int id = scanner.nextInt();
            LivroDAO livroDAO = new LivroDAO(new Conexao().getConexaoDB());
            livroDAO.excluirLivro(id);
            System.out.println("Livro excluído com sucesso.");
        } catch (Exception e) {
            System.out.println("Erro ao excluir livro: " + e.getMessage());
        }
    }

    private static void consultarLivro(Scanner scanner) {
        try {
            System.out.print("ID do Livro: ");
            int id = scanner.nextInt();
            LivroDAO livroDAO = new LivroDAO(new Conexao().getConexaoDB());
            Livro livro = livroDAO.consultarLivro(id);
            if (livro != null) {
                System.out.println("ID: " + livro.getId());
                System.out.println("Título: " + livro.getTitulo());
                System.out.println("Autor: " + livro.getAutor());
                System.out.println("Ano: " + livro.getAno());
                System.out.println("Disponível: " + (livro.isDisponivel() ? "Sim" : "Não"));
            } else {
                System.out.println("Livro não encontrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao consultar livro: " + e.getMessage());
        }
    }

    private static void listarTodosLivros() {
        try {
            LivroDAO livroDAO = new LivroDAO(new Conexao().getConexaoDB());
            LinkedList<Livro> livros = livroDAO.listarTodosLivros();
            if (!livros.isEmpty())  { //verifica se a lista está vazia
                for (Livro livro : livros) {
                    System.out.println("ID: " + livro.getId() + " | Título: " + livro.getTitulo() + " | Autor: " + livro.getAutor() + " | Ano: " + livro.getAno() + " | Disponível: " + (livro.isDisponivel() ? "Sim" : "Não"));
                }
            } else {
                System.out.println("Nenhum livro cadastrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao listar livros: " + e.getMessage());
        }
    }

    private static void adicionarUsuario(Scanner scanner) {
        try {
            System.out.print("Nome: ");
            scanner.nextLine();
            String nome = scanner.nextLine();

            System.out.print("Email: ");
            String email = scanner.next();

            Usuario usuario = new Usuario(0, nome, email);
            UsuarioDAO usuarioDAO = new UsuarioDAO(new Conexao().getConexaoDB());
            usuarioDAO.adicionarUsuario(usuario);
            System.out.println("Usuário adicionado com sucesso.");
        } catch (Exception e) {
            System.out.println("Erro ao adicionar usuário: " + e.getMessage());
        }
    }

    private static void atualizarUsuario(Scanner scanner) {
        try {
            System.out.print("ID do Usuário: ");
            int id = scanner.nextInt();
            UsuarioDAO usuarioDAO = new UsuarioDAO(new Conexao().getConexaoDB());
            Usuario usuario = usuarioDAO.consultarUsuario(id);

            if (usuario != null) {
                System.out.print("Novo Nome: ");
                scanner.nextLine();
                String nome = scanner.nextLine();

                System.out.print("Novo Email: ");
                String email = scanner.next();

                usuario.setNome(nome);
                usuario.setEmail(email);

                usuarioDAO.atualizarUsuario(usuario);
                System.out.println("Usuário atualizado com sucesso.");
            } else {
                System.out.println("Usuário não encontrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao atualizar usuário: " + e.getMessage());
        }
    }

    private static void excluirUsuario(Scanner scanner) {
        try {
            System.out.print("ID do Usuário: ");
            int id = scanner.nextInt();
            UsuarioDAO usuarioDAO = new UsuarioDAO(new Conexao().getConexaoDB());
            usuarioDAO.excluirUsuario(id);
            System.out.println("Usuário excluído com sucesso.");
        } catch (Exception e) {
            System.out.println("Erro ao excluir usuário: " + e.getMessage());
        }
    }

    private static void consultarUsuario(Scanner scanner) {
        try {
            System.out.print("ID do Usuário: ");
            int id = scanner.nextInt();
            UsuarioDAO usuarioDAO = new UsuarioDAO(new Conexao().getConexaoDB());
            Usuario usuario = usuarioDAO.consultarUsuario(id);
            if (usuario != null) {
                System.out.println("ID: " + usuario.getId());
                System.out.println("Nome: " + usuario.getNome());
                System.out.println("Email: " + usuario.getEmail());
            } else {
                System.out.println("Usuário não encontrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao consultar usuário: " + e.getMessage());
        }
    }

    private static void listarTodosUsuarios() {
        try {
            UsuarioDAO usuarioDAO = new UsuarioDAO(new Conexao().getConexaoDB());
            List<Usuario> usuarios = usuarioDAO.listarTodosUsuarios();
            if (!usuarios.isEmpty()) {
                for (Usuario usuario : usuarios) {
                    System.out.println("ID: " + usuario.getId() + " | Nome: " + usuario.getNome() + " | Email: " + usuario.getEmail());
                }
            } else {
                System.out.println("Nenhum usuário cadastrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao listar usuários: " + e.getMessage());
        }
    }

    private static void realizarEmprestimo(Scanner scanner) {
        try {
            System.out.print("ID do Usuário: ");
            int usuarioId = scanner.nextInt();
            System.out.print("ID do Livro: ");
            int livroId = scanner.nextInt();
            Connection conexao = new Conexao().getConexaoDB();
            EmprestimoDAO emprestimoDAO = new EmprestimoDAO(conexao);
            UsuarioDAO usuarioDAO = new UsuarioDAO(conexao);
            LivroDAO livroDAO = new LivroDAO(conexao);
            Usuario usuario = usuarioDAO.consultarUsuario(usuarioId);
            Livro livro = livroDAO.consultarLivro(livroId);

            if (usuario != null && livro != null && livro.isDisponivel()) {
                LocalDate dataEmprestimo = LocalDate.now();
                Emprestimo emprestimo = new Emprestimo(0, usuario, livro, dataEmprestimo, null);
                emprestimoDAO.adicionarEmprestimo(emprestimo);
                System.out.println("Empréstimo realizado com sucesso.");
            } else {
                System.out.println("Não foi possível realizar o empréstimo. Verifique se o usuário e o livro existem e se o livro está disponível.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao realizar empréstimo: " + e.getMessage());
        }
    }

    private static void registrarDevolucao(Scanner scanner) {
        try {
            System.out.print("ID do Empréstimo: ");
            int emprestimoId = scanner.nextInt();
            EmprestimoDAO emprestimoDAO = new EmprestimoDAO(new Conexao().getConexaoDB());
            Emprestimo emprestimo = emprestimoDAO.consultarEmprestimo(emprestimoId);
            if (emprestimo != null) {
                emprestimoDAO.registrarDevolucao(emprestimo);
                System.out.println("Devolução registrada com sucesso.");
            } else {
                System.out.println("Empréstimo não encontrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao registrar devolução: " + e.getMessage());
        }
    }

    private static void consultarHistoricoEmprestimos(Scanner scanner) {
        try {
            System.out.print("ID do Usuário: ");
            int usuarioId = scanner.nextInt();
            
            UsuarioDAO usuarioDAO = new UsuarioDAO(new Conexao().getConexaoDB());
            Usuario usuario = usuarioDAO.consultarUsuario(usuarioId);
            
            if (usuario != null) {
                LinkedList<Emprestimo> historico = usuarioDAO.consultarHistoricoEmprestimos(usuario);
                
                if (historico.isEmpty()) {
                    System.out.println("Este usuário não possui histórico de empréstimos registrados.");
                } else {
                    for (Emprestimo emprestimo : historico) {
                        System.out.println("ID: " + emprestimo.getId() + " | Livro: " + emprestimo.getLivro().getTitulo() + " | Data de Empréstimo: " + emprestimo.getDataEmprestimo() + " | Data de Devolução: " + emprestimo.getDataDevolucao());
                    }
                }
            } else {
                System.out.println("Usuário não encontrado.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao consultar histórico de empréstimos: " + e.getMessage());
        }
    }
    

    private static void listarTodosEmprestimos() {
        try {
            EmprestimoDAO emprestimoDAO = new EmprestimoDAO(new Conexao().getConexaoDB());
            LinkedList<Emprestimo> emprestimos = emprestimoDAO.listarTodosEmprestimos();

            if (!emprestimos.isEmpty()) {
                for (Emprestimo emprestimo : emprestimos) {
                    String dataEmprestimoStr = emprestimo.getDataEmprestimo() != null ? emprestimo.getDataEmprestimo().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) : "N/A";
                    String dataDevolucaoStr = emprestimo.getDataDevolucao() != null ? emprestimo.getDataDevolucao().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) : "N/A";

                    System.out.println("ID: " + emprestimo.getId() + " | Usuário: " + emprestimo.getUsuario().getNome() + " | Livro: " + emprestimo.getLivro().getTitulo() + " | Data de Empréstimo: " + dataEmprestimoStr + " | Data de Devolução: " + dataDevolucaoStr);
                }
            } else {
                System.out.println("Nenhum empréstimo em andamento.");
            }
        } catch (Exception e) {
            System.out.println("Erro ao listar empréstimos: " + e.getMessage());
        }
    }
}
