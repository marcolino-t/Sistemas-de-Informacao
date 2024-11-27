package connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexao {

    private Connection conexao;

    public Connection getConexaoDB() {
        return conexao;
    }

    public Conexao() {
        String url = "jdbc:mariadb://localhost:3306/livros";
        String user = "root";
        String pwd = "root";
        try {
            conexao = DriverManager.getConnection(url, user, pwd);
            // System.out.println("Conexão com o Banco de Dados realizada!");
        } catch (SQLException e) {
            System.out.println("Erro na conexão com o Banco de Dados. Erro: " + e.getMessage());
        }
    }
}

