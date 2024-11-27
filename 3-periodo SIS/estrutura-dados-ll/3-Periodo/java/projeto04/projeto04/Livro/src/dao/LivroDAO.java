package dao;

import model.Livro;
import java.sql.*;
import java.util.LinkedList;


public class LivroDAO{
    private Connection connection;

    public LivroDAO(Connection connection){
        this.connection = connection;
    }
    
    public void adicionarLivro(Livro livro){
        String sql = "INSERT INTO livro (titulo, autor, ano, disponivel) VALUES (?, ?, ?, ?)";
        try (PreparedStatement pst = connection.prepareStatement(sql)){
            pst.setString(1, livro.getTitulo());
            pst.setString(2, livro.getAutor());
            pst.setInt(3, livro.getAno());
            pst.setBoolean(4, livro.isDisponivel());
            pst.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }

    public void atualizarLivro(Livro livro){
        String sql = "UPDATE livro SET titulo = ?, autor = ?, ano = ?, disponivel = ? WHERE id_livro = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)){
            pst.setString(1, livro.getTitulo());
            pst.setString(2, livro.getAutor());
            pst.setInt(3, livro.getAno());
            pst.setBoolean(4, livro.isDisponivel());
            pst.setInt(5, livro.getId());
            pst.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }



    public void excluirLivro(int id_livro){
        String sql = "DELETE FROM livro WHERE id_livro = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)){
            pst.setInt(1, id_livro);
            pst.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }

   
    public Livro consultarLivro(int id_livro){
        String sql = "SELECT * FROM livro WHERE id_livro = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setInt(1, id_livro);
            ResultSet rs = pst.executeQuery();
            if (rs.next()){
                return new Livro(
                    rs.getInt("id_livro"),
                    rs.getString("titulo"),
                    rs.getString("autor"),
                    rs.getInt("ano"),
                    rs.getBoolean("disponivel")
                );
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return null;
    }

    public void atualizarDisponibilidade(int idLivro, boolean disponivel) {
        String sql = "UPDATE livro SET disponivel = ? WHERE id_livro = ?";
        try (PreparedStatement pst = connection.prepareStatement(sql)) {
            pst.setBoolean(1, disponivel);
            pst.setInt(2, idLivro);
            pst.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    
    public LinkedList<Livro> listarTodosLivros(){
        LinkedList<Livro> livros = new LinkedList<>();
        String sql = "SELECT * FROM livro";
        try (Statement pst = connection.createStatement()){
            ResultSet rs = pst.executeQuery(sql);
            while (rs.next()) {
                livros.add(new Livro(
                    rs.getInt("id_livro"),
                    rs.getString("titulo"),
                    rs.getString("autor"),
                    rs.getInt("ano"),
                    rs.getBoolean("disponivel")
                ));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return livros;
    }
}


