import java.sql.Connection;
import java.sql.DriverManager;

public class ConectaDB {
    //atributo
    private Connection conexao;


    //construtor
    public ConectaDB(){
        //Credenciais da conexao db
        String url="jdbc:mariadb://localhost:3306/ed2";
        String usuario="root";
        String senha="root";
        try {
            conexao = DriverManager.getConnection(url, usuario, senha);
            System.out.println("conexão realizada");
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println("Error: " + e.getMessage());
            System.out.println("Drive não encontrado");
        }
    }

    public Connection getConexaoDB(){
        return conexao;
    }
    
}
