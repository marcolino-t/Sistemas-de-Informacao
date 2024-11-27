<%@page import="org.libertas.Veiculo"%>
<%@page import="org.libertas.VeiculoDao"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Cadastro de Veículos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

    <jsp:useBean id="vdao" scope="page" class="org.libertas.VeiculoDao"/>

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
                <c:forEach var="v" items="${vdao.listar()}">
                    <tr>
                        <td>${v.idveiculo}</td>
                        <td>${v.marca}</td>
                        <td>${v.modelo}</td>
                        <td>${v.ano}</td>
                        <td>${v.preco}</td>
                        <td>${v.cor}</td>
                        <td>
                            <a href="<c:url value='formulario.jsp'/>?idveiculo=${v.idveiculo}" class="btn btn-warning btn-sm">Alterar</a>
                            <a href="<c:url value='excluir.jsp'/>?id=${v.idveiculo}" class="btn btn-danger btn-sm">Excluir</a>
                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>

        <div class="text-center">
            <a href="index.jsp" class="btn btn-primary">Início</a>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
