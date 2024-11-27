package dao;

import model.Emprestimo;
import model.Usuario;
import java.sql.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class UsuarioDAO{
    private Connection connection;
    
    public UsuarioDAO(Connection connection){
        this.connection = connection;
    }
    public void adicionarUsuario(Usuario usuario){
        String sql = "INSERT INTO usuario (nome, email) VALUES (?, ?)";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setString(1, usuario.getNome());
            pst.setString(2, usuario.getEmail());
            pst.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public void atualizarUsuario(Usuario usuario){
        String sql = "UPDATE usuario SET nome = ?, email = ? WHERE id_usuario = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)){
            pst.setString(1, usuario.getNome());
            pst.setString(2, usuario.getEmail());
            pst.setInt(3, usuario.getId());
            pst.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    public void excluirUsuario(int id_usuario) {
        String sqlDeleteEmprestimos = "DELETE FROM emprestimos WHERE id_usuario = ?";
        String sqlDeleteUsuario = "DELETE FROM usuario WHERE id_usuario = ?";
        
        try (PreparedStatement pstEmprestimos = connection.prepareStatement(sqlDeleteEmprestimos);
             PreparedStatement pstUsuario = connection.prepareStatement(sqlDeleteUsuario)) {
            
            // Excluir registros da tabela emprestimos
            pstEmprestimos.setInt(1, id_usuario);
            pstEmprestimos.executeUpdate();
            
            // Excluir usuário
            pstUsuario.setInt(1, id_usuario);
            pstUsuario.executeUpdate();
            
            System.out.println("Usuário excluído com sucesso.");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    public Usuario consultarUsuario(int id_usuario){
        String sql = "SELECT * FROM usuario WHERE id_usuario = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)){
            pst.setInt(1, id_usuario);
            ResultSet rs = pst.executeQuery();
            if(rs.next()){
                return new Usuario(
                    rs.getInt("id_usuario"),
                    rs.getString("nome"),
                    rs.getString("email")
                );
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return null; //Se nenhum registro for encontrado ou se ocorrer uma exceção, o método retornará null.
    }
    public List<Usuario> listarTodosUsuarios(){
        List<Usuario> usuarios = new ArrayList<>();
        String sql = "SELECT * FROM usuario";
        try (Statement pst = connection.createStatement()){
            ResultSet rs = pst.executeQuery(sql);
            while (rs.next()) {
                Usuario usuario = new Usuario(
                    rs.getInt("id_usuario"),
                    rs.getString("nome"),
                    rs.getString("email")
                );
                usuarios.add(usuario);
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return usuarios;
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
                Emprestimo emprestimo = new Emprestimo(
                    rs.getInt("id_emprestimo"),
                    usuario,
                    new LivroDAO(connection).consultarLivro(rs.getInt("id_livro")),
                    dataEmprestimo,
                    dataDevolucao
                );
                historico.add(emprestimo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return historico;
    }
}
