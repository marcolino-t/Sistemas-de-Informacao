package model;

import java.time.LocalDate;

//import java.util.Date;

public class Emprestimo {
    private int id_emprestimo;
    private Usuario usuario;
    private Livro livro;
    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucao;

    // Construtor
    public Emprestimo(int id_emprestimo, Usuario usuario, Livro livro, LocalDate dataEmprestimo, LocalDate dataDevolucao){
        this.id_emprestimo = id_emprestimo;
        this.usuario = usuario;
        this.livro = livro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }

    // Getters e Setters
    public int getId(){
        return id_emprestimo;
    }

    public void setId(int id_emprestimo){
        this.id_emprestimo = id_emprestimo;
    }

    public Usuario getUsuario(){
        return usuario;
    }

    public void setUsuario(Usuario usuario){
        this.usuario = usuario;
    }

    public Livro getLivro(){
        return livro;
    }

    public void setLivro(Livro livro){
        this.livro = livro;
    }

    public LocalDate getDataEmprestimo(){
        return dataEmprestimo;
    }

    public void setDataEmprestimo(LocalDate dataEmprestimo){
        this.dataEmprestimo = dataEmprestimo;
    }

    public LocalDate getDataDevolucao(){
        return dataDevolucao;
    }

    public void setDataDevolucao(LocalDate dataDevolucao){
        this.dataDevolucao = dataDevolucao;
    }

    public String toString(){
        return "Emprestimo [id_emprestimo=" + id_emprestimo + ", usuario=" + usuario + ", livro=" + livro + ", dataEmprestimo="
                + dataEmprestimo + ", dataDevolucao=" + dataDevolucao + "]";
    }

    
}


