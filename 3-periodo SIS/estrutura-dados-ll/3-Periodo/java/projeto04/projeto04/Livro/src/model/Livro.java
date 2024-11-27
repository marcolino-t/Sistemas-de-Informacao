package model;

public class Livro {
    private int id_livro;
    private String titulo;
    private String autor;
    private int ano;
    private boolean disponivel;

    // Construtor
    public Livro(int id_livro, String titulo, String autor, int ano, boolean disponivel) {
        this.id_livro = id_livro;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.disponivel = disponivel;
    }

    public int getId(){
        return id_livro;
    }

    public void setId(int id_livro){
        this.id_livro = id_livro;
    }

    public String getTitulo(){
        return titulo;
    }

    public void setTitulo(String titulo){
        this.titulo = titulo;
    }

    public String getAutor(){
        return autor;
    }

    public void setAutor(String autor){
        this.autor = autor;
    }

    public int getAno(){
        return ano;
    }

    public void setAno(int ano){
        this.ano = ano;
    }

    public boolean isDisponivel(){
        return disponivel;
    }

    public void setDisponivel(boolean disponivel){
        this.disponivel = disponivel;
    }

    public String toString(){
        return "Livro [id_livro=" + id_livro + ", titulo=" + titulo + ", autor=" + autor + ", ano=" + ano + ", disponivel="
                + disponivel + "]";
    }

    
}
