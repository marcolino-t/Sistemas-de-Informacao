<%@page import="org.libertas.Veiculo"%>
<%@page import="org.libertas.VeiculoDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cadastro de Veículo</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>

<%
		int idveiculo = Integer.parseInt(request.getParameter("id"));
		Veiculo v = new Veiculo();
		VeiculoDao vdao = new VeiculoDao();
		if (idveiculo > 0) {
			v = vdao.consultar(idveiculo);
		} else {
			// Limpa os dados para novo
			v.setMarca(" ");
			v.setModelo(" ");
			v.setAno(" ");
			v.setPreco(0.00f);
			v.setCor(" ");
		}
%>

<div class="d-flex flex-column justify-content-center align-items-center vh-100">
	<h1>Cadastro de Veículo</h1>

	<form action="gravar.jsp" method="post" class="w-50">
		<input type="hidden" name="idveiculo" value="<%= v.getIdveiculo() %>"/>
		
		<div class="mb-3">
			<label for="marca" class="form-label">Marca:</label>
			<input type="text" name="marca" class="form-control" value="<%= v.getMarca() %>" />
		</div>
		
		<div class="mb-3">
			<label for="modelo" class="form-label">Modelo:</label>
			<input type="text" name="modelo" class="form-control" value="<%= v.getModelo() %>" />
		</div>
		
		<div class="mb-3">
			<label for="ano" class="form-label">Ano:</label>
			<input type="text" name="ano" class="form-control" value="<%= v.getAno() %>" />
		</div>
		
		<div class="mb-3">
			<label for="preco" class="form-label">Preço:</label>
			<input type="text" name="preco" class="form-control" value="<%= v.getPreco() %>" />
		</div>
		
		<div class="mb-3">
			<label for="cor" class="form-label">Cor:</label>
			<input type="text" name="cor" class="form-control" value="<%= v.getCor() %>" />
		</div>
		
		<input type="submit" class="btn btn-primary" value="Salvar" />
	</form>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>
