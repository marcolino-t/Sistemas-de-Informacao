<%@page import="org.libertas.Veiculo"%>
<%@page import="org.libertas.VeiculoDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Excluir Veículo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <jsp:useBean id="v" class="org.libertas.Veiculo" scope="page"/>
    <jsp:useBean id="dao" class="org.libertas.VeiculoDao" scope="page"/>

    <%
        String idVeiculo = request.getParameter("id");
        if (idVeiculo != null && !idVeiculo.isEmpty()) {
            v.setIdveiculo(Integer.parseInt(idVeiculo));
            dao.excluir(v);
        }
    %>

    <div class="d-flex flex-column justify-content-center align-items-center vh-100">
        <div class="text-center mb-3">
            <h1>Veículo Excluído com Sucesso</h1>
            <a href="listar.jsp" class="btn btn-primary">Ok</a>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
