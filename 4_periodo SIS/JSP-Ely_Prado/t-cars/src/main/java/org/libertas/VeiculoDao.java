package org.libertas;

import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;

public class VeiculoDao {
    
    public void salvar(Veiculo v) {
        if(v.getIdveiculo() > 0) {
            alterar(v);    
        } else {
            inserir(v);        
        }
    }
        
    public void inserir(Veiculo v) {
        Conexao con = new Conexao();
        try {
            String sql = "INSERT INTO veiculo (marca, modelo, ano, preco, cor) VALUES (?,?,?,?,?)";
            PreparedStatement prep = con.getConnection().prepareStatement(sql);
            prep.setString(1, v.getMarca());
            prep.setString(2, v.getModelo());
            prep.setString(3, v.getAno());
            prep.setFloat(4, v.getPreco());
            prep.setString(5, v.getCor());
            prep.execute();
            System.out.println("Veículo inserido com sucesso!");
        } catch (Exception e) {
            e.printStackTrace();
        }
        con.desconecta();
    }

    public LinkedList<Veiculo> listar() {
        LinkedList<Veiculo> lista = new LinkedList<Veiculo>();
        Conexao con = new Conexao();
        try {
            String sql = "SELECT * FROM veiculo";
            Statement sta = con.getConnection().createStatement();
            ResultSet res = sta.executeQuery(sql);
            while (res.next()) {
                Veiculo v = new Veiculo();
                v.setIdveiculo(res.getInt("idveiculo"));
                v.setMarca(res.getString("marca"));
                v.setModelo(res.getString("modelo"));
                v.setAno(res.getString("ano"));
                v.setPreco(res.getFloat("preco"));
                v.setCor(res.getString("cor"));
                lista.add(v);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        con.desconecta();
        return lista;
    }
    
    public void alterar(Veiculo v) {
        Conexao con = new Conexao();
        try {
            String sql = "UPDATE veiculo SET marca = ?, modelo = ?, ano = ?, preco = ?, cor = ? WHERE idveiculo = ?";

            PreparedStatement prep = con.getConnection().prepareStatement(sql);
            prep.setString(1, v.getMarca());
            prep.setString(2, v.getModelo());
            prep.setString(3, v.getAno());
            prep.setFloat(4, v.getPreco());
            prep.setString(5, v.getCor());
            prep.setInt(6, v.getIdveiculo());
            prep.execute();
            
        } catch(Exception e) {
            e.printStackTrace();
        }
        con.desconecta();
    }
    
    public void excluir(Veiculo v) {
        Conexao con = new Conexao();
        try {
            String sql = "DELETE FROM veiculo WHERE idveiculo = ?";
            PreparedStatement prep = con.getConnection().prepareStatement(sql);
            prep.setInt(1, v.getIdveiculo());
            prep.execute();
            
        } catch(Exception e) {
            e.printStackTrace();
        }
        con.desconecta();
    }
    
    public Veiculo consultar(int id) {
        Veiculo v = new Veiculo();
        Conexao con = new Conexao();
        try {
        	String sql = "SELECT * FROM veiculo WHERE idveiculo = ?";
        	PreparedStatement prep = con.getConnection().prepareStatement(sql);
        	prep.setInt(1, id);
        	ResultSet res = prep.executeQuery();

            if (res.next()) {
                v.setIdveiculo(res.getInt("idveiculo"));
                v.setMarca(res.getString("marca"));
                v.setModelo(res.getString("modelo"));
                v.setAno(res.getString("ano"));
                v.setPreco(res.getFloat("preco"));
                v.setCor(res.getString("cor"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        con.desconecta();
        return v;
    }
}
