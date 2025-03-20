const modalCadastroCompra = new bootstrap.Modal(document.getElementById('modalCadastroCompra'));

var codigoCompraAtual=0;

function alterar(codigoCompra) {
  fetch("http://127.0.0.1:3333/compra/" + codigoCompra)
    .then(resp => resp.json())
    .then(dados => {
      codigoCompraAtual = codigoCompra;
      document.getElementById('nome').value = dados.nome;
      document.getElementById('quantidade').value = dados.quantidade;
      document.getElementById('preco').value = dados.preco;
      document.getElementById('observacao').value = dados.observacao || ''; 
      modalCadastroCompra.show();
    })
    .catch(err => console.error("Erro ao buscar compra:", err));
}

function excluir(codigoCompra) {
  fetch("http://127.0.0.1:3333/compra/" + codigoCompra, {  
    method: "DELETE",
  })
  .then(() => listar())
  .catch(err => console.error("Erro ao excluir compra:", err));
}

function salvar() {
  let vnome = document.getElementById("nome").value;
  let vquantidade = document.getElementById("quantidade").value;
  let vpreco = document.getElementById("preco").value;
  let vobservacao = document.getElementById("observacao").value;

  let compra = {  
    nome: vnome,
    quantidade: vquantidade,
    preco: vpreco,
    observacao: vobservacao
  };

  let url, metodo;
  if (codigoCompraAtual > 0) {
    url = "http://127.0.0.1:3333/compra/" + codigoCompraAtual;
    metodo = "PUT";
  } else {
    url = "http://127.0.0.1:3333/compra";
    metodo = "POST";
  }

  fetch(url, {
    method: metodo,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(compra)
  })
  .then(() => {
    listar();
    modalCadastroCompra.hide();
  })
  .catch(err => console.error("Erro ao salvar compra:", err));
}

function novo() {
  codigoCompraAtual = 0;
  document.getElementById("nome").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("observacao").value = "";
  modalCadastroCompra.show();
}

function listar() {
  const listar = document.getElementById("lista");
  listar.innerHTML = "<tr><td colspan='5'>Carregando...</td></tr>";  

  fetch("http://127.0.0.1:3333/compra")
    .then(resp => resp.json())
    .then(dados => mostrar(dados))
    .catch(err => {
      console.error("Erro ao listar compras:", err);
      listar.innerHTML = "<tr><td colspan='5'>Erro ao carregar dados.</td></tr>";  
    });
}

function mostrar(dados) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let i in dados) {
    // Garantir que preco é um número
    let preco = parseFloat(dados[i].preco);
    
    // Se o preco não for um número válido, coloca 0
    if (isNaN(preco)) {
      preco = 0;
    }
    lista.innerHTML += "<tr>"
      + "<td>" + dados[i].codigo + "</td>"
      + "<td>" + dados[i].nome + "</td>"
      + "<td>" + dados[i].quantidade + "</td>"
      + "<td>" + + preco.toFixed(2) + "</td>"
      + "<td>" + (dados[i].observacao || 'Sem observação') + "</td>"
      + "<td>" 
      + "<button type='button' class='btn btn-secondary' onclick='alterar(" + dados[i].codigo + ")'>Alterar</button> "
      + "<button type='button' class='btn btn-secondary' onclick='excluir(" + dados[i].codigo + ")'>Remover</button>"
      + "</td>"
      + "</tr>";
  }
}
