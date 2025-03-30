const modalCadastroCompra = new bootstrap.Modal(document.getElementById('modalCadastroCompra')); 

var compraAtual;
function alterar(id) {
  fetch("http://127.0.0.1:5000/compra/" + id)
    .then(resp => resp.json())
    .then(dados => {
      console.log(dados); 
      compraAtual = id;
      const compra = dados;
      document.getElementById('nome').value = dados.nome;
      document.getElementById('marca').value = dados.marca;
      document.getElementById('quantidade').value = dados.quantidade;
      document.getElementById('preco').value = dados.preco;
      document.getElementById('observacao').value = dados.observacao;

      setTimeout(() => {
        modalCadastroCompra.show();
      }, 100);
    })
    .catch(err => console.error("Erro ao buscar compra:", err));
}


function excluir(id) {
  fetch("http://127.0.0.1:5000/compra/" + id, {  
    method: "DELETE",
  })
  .then(() => listar())
  .catch(err => console.error("Erro ao excluir compra:", err));
}

function salvar() {
  let vnome = document.getElementById("nome").value;
  let vmarca = document.getElementById("marca").value; 
  let vquantidade = document.getElementById("quantidade").value;
  let vpreco = document.getElementById("preco").value;
  let vobservacao = document.getElementById("observacao").value;

  let compra = {  
    nome: vnome,
    marca: vmarca, 
    quantidade: vquantidade,  
    preco: vpreco,         
    observacao: vobservacao
  };

  let url, metodo;
  if (compraAtual > 0) {
    url = "http://127.0.0.1:5000/compra/" + compraAtual;
    metodo = "PUT";
  } else {
    url = "http://127.0.0.1:5000/compra";
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
  .catch(err => console.error("Erro ao salvar item:", err));
}

function novo() {
  compraAtual = 0;
  document.getElementById("nome").value = "";
  document.getElementById("marca").value = ""; 
  document.getElementById("quantidade").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("observacao").value = "";
  document.getElementById("nome").focus();
  modalCadastroCompra.show();
}

function listar() {
  const listar = document.getElementById("lista");
  listar.innerHTML = "<tr><td colspan='6'>Carregando...</td></tr>";  

  fetch("http://127.0.0.1:5000/compra")
    .then(resp => resp.json())
    .then(dados => mostrar(dados))
    .catch(err => {
      console.error("Erro ao listar compras:", err);
      listar.innerHTML = "<tr><td colspan='6'>Erro ao carregar dados.</td></tr>";  
    });
}

function mostrar(dados) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let i in dados) {
    lista.innerHTML += "<tr>"
      + "<td>" + dados[i].id + "</td>"  
      + "<td>" + dados[i].nome + "</td>"
      + "<td>" + dados[i].marca + "</td>" 
      + "<td>" + dados[i].quantidade + "</td>"
      + "<td>" + dados[i].preco + "</td>"
      + "<td>" + dados[i].observacao + "</td>"
      + "<td>" 
      + "<button type='button' class='btn btn-secondary' onclick='alterar(" + dados[i].id + ")'>A</button> "  
      + "<button type='button' class='btn btn-secondary' onclick='excluir(" + dados[i].id + ")'>X</button>"  
      + "</td>"
      + "</tr>";
  }
}
