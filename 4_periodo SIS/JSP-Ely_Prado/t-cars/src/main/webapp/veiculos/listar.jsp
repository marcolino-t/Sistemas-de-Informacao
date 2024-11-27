<%@page import="org.libertas.Veiculo"%>
<%@page import="org.libertas.VeiculoDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Veículos</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

<div class="container mt-5">
    <h1 class="text-center">Cadastro de Veículos</h1>
    <div class="text-center mb-3">
        <a href="formulario.jsp?id=0" class="btn btn-success">Novo</a>
    </div>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Preço</th>
                <th>Cor</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <%
                VeiculoDao dao = new VeiculoDao();
                for (Veiculo v : dao.listar()) {
                    out.print("<tr>");
                    out.print("<td>" + v.getIdveiculo() + "</td>");
                    out.print("<td>" + v.getMarca() + "</td>");
                    out.print("<td>" + v.getModelo() + "</td>");
                    out.print("<td>" + v.getAno() + "</td>");
                    out.print("<td>" + String.format("R$ %.2f", v.getPreco()) + "</td>");
                    out.print("<td>" + v.getCor() + "</td>");
                    out.print("<td>");
                    out.print("<a href='formulario.jsp?id=" + v.getIdveiculo() + "' class='btn btn-warning btn-sm'>Alterar</a> ");
                    out.print("<a href='excluir.jsp?id=" + v.getIdveiculo() + "' class='btn btn-danger btn-sm'>Excluir</a>");
                    out.print("</td>");
                    out.print("</tr>");
                }
            %>
        </tbody>
    </table>
    <div class="text-center">
        <a href="index.jsp" class="btn btn-primary">Início</a>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
