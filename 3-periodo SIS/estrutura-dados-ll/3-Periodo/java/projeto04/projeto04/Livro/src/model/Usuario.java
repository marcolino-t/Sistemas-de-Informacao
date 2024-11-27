package model;

public class Usuario {
    private int id_usuario;
    private String nome;
    private String email;

    // Construtor
    public Usuario(int id_usuario, String nome, String email){
        this.id_usuario = id_usuario;
        this.nome = nome;
        this.email = email;
    }

    public int getId(){
        return id_usuario;
    }

    public void setId(int id_usuario){
        this.id_usuario = id_usuario;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String toString(){
        return "Usuario [id_usuario=" + id_usuario + ", nome=" + nome + ", email=" + email + "]";
    }

    
}
