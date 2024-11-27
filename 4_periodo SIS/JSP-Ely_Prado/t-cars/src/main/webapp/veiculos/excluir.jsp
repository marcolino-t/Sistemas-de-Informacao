<%@page import="org.libertas.Veiculo"%>
<%@page import="org.libertas.VeiculoDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
	<% 

		Veiculo v = new Veiculo();
		v.setIdveiculo(Integer.parseInt(request.getParameter("id")));
		VeiculoDao dao = new VeiculoDao();
		
		dao.excluir(v);
		
	%>
	<div class="d-flex flex-column justify-content-center align-items-center vh-100">
		<div class="text-center mb-3">
			<h1>Veículo Excluído com Sucesso</h1>
			<a href="listar.jsp" class="btn btn-primary">ok</a>
		</div>
	</div>
		
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
	
</body>
</html>