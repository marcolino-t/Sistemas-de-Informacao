package dao;

import model.Emprestimo;
import model.Livro;
import model.Usuario;

import java.sql.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.LinkedList;

public class EmprestimoDAO {
    private Connection connection;

    //construtor
    public EmprestimoDAO(Connection connection) {
        this.connection = connection;
    }

    public String dataAtual() {
        LocalDate dataAtual = LocalDate.now();
        DateTimeFormatter formatador = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return dataAtual.format(formatador);
    }

    public void adicionarEmprestimo(Emprestimo emprestimo) {
        String sql = "INSERT INTO emprestimos (id_usuario, id_livro, data_emprestimo, data_devolucao) VALUES (?, ?, ?, ?)";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setInt(1, emprestimo.getUsuario().getId());
            pst.setInt(2, emprestimo.getLivro().getId());
            pst.setString(3, emprestimo.getDataEmprestimo().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            pst.setString(4, emprestimo.getDataDevolucao() != null ? emprestimo.getDataDevolucao().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) : null);
            pst.executeUpdate();

            
            LivroDAO livroDAO = new LivroDAO(connection);
            livroDAO.atualizarDisponibilidade(emprestimo.getLivro().getId(), false); //muda o livro para false(nâo disponivel)
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void atualizarEmprestimo(Emprestimo emprestimo) {
        String sql = "UPDATE emprestimos SET id_usuario = ?, id_livro = ?, data_emprestimo = ?, data_devolucao = ? WHERE id_emprestimo = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setInt(1, emprestimo.getUsuario().getId());
            pst.setInt(2, emprestimo.getLivro().getId());
            pst.setString(3, emprestimo.getDataEmprestimo().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            pst.setString(4, emprestimo.getDataDevolucao() != null ? emprestimo.getDataDevolucao().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")) : null);
            pst.setInt(5, emprestimo.getId());
            pst.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void excluirEmprestimo(int idEmprestimo) {
        String sql = "DELETE FROM emprestimos WHERE id_emprestimo = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setInt(1, idEmprestimo);
            pst.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Emprestimo consultarEmprestimo(int idEmprestimo) {
        String sql = "SELECT * FROM emprestimos WHERE id_emprestimo = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setInt(1, idEmprestimo);
            ResultSet rs = pst.executeQuery();
            if (rs.next()) {
                Usuario usuario = new UsuarioDAO(connection).consultarUsuario(rs.getInt("id_usuario"));
                Livro livro = new LivroDAO(connection).consultarLivro(rs.getInt("id_livro"));
                LocalDate dataEmprestimo = LocalDate.parse(rs.getString("data_emprestimo"), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                LocalDate dataDevolucao = rs.getString("data_devolucao") != null ? LocalDate.parse(rs.getString("data_devolucao"), DateTimeFormatter.ofPattern("yyyy-MM-dd")) : null;
                return new Emprestimo(rs.getInt("id_emprestimo"), usuario, livro, dataEmprestimo, dataDevolucao);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    public LinkedList<Emprestimo> listarTodosEmprestimos() {
        LinkedList<Emprestimo> emprestimos = new LinkedList<>();
        String sql = "SELECT * FROM emprestimos";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            ResultSet rs = pst.executeQuery();
            while (rs.next()) {
                LocalDate dataEmprestimo = LocalDate.parse(rs.getString("data_emprestimo"), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                LocalDate dataDevolucao = rs.getString("data_devolucao") != null ? LocalDate.parse(rs.getString("data_devolucao"), DateTimeFormatter.ofPattern("yyyy-MM-dd")) : null;
                Usuario usuario = new UsuarioDAO(connection).consultarUsuario(rs.getInt("id_usuario"));
                Livro livro = new LivroDAO(connection).consultarLivro(rs.getInt("id_livro"));
                Emprestimo emprestimo = new Emprestimo(rs.getInt("id_emprestimo"), usuario, livro, dataEmprestimo, dataDevolucao);
                emprestimos.add(emprestimo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return emprestimos;
    }

    public LinkedList<Emprestimo> consultarHistoricoEmprestimos(Usuario usuario) {
        LinkedList<Emprestimo> historico = new LinkedList<>();
        String sql = "SELECT * FROM emprestimos WHERE id_usuario = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setInt(1, usuario.getId());
            ResultSet rs = pst.executeQuery();
            while (rs.next()) {
                LocalDate dataEmprestimo = LocalDate.parse(rs.getString("data_emprestimo"), DateTimeFormatter.ofPattern("yyyy-MM-dd"));
                LocalDate dataDevolucao = rs.getString("data_devolucao") != null ? LocalDate.parse(rs.getString("data_devolucao"), DateTimeFormatter.ofPattern("yyyy-MM-dd")) : null;
                Livro livro = new LivroDAO(connection).consultarLivro(rs.getInt("id_livro"));
                Emprestimo emprestimo = new Emprestimo(rs.getInt("id_emprestimo"), usuario, livro, dataEmprestimo, dataDevolucao);
                historico.add(emprestimo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return historico;
    }

    public void registrarDevolucao(Emprestimo emprestimo) {
        String sql = "UPDATE emprestimos SET data_devolucao = ? WHERE id_emprestimo = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setDate(1, Date.valueOf(LocalDate.now())); // Data de devolução como a data atual
            pst.setInt(2, emprestimo.getId());
            pst.executeUpdate();

            // Atualizar a disponibilidade do livro
            LivroDAO livroDAO = new LivroDAO(connection);
            livroDAO.atualizarDisponibilidade(emprestimo.getLivro().getId(), true); // true para disponível
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
