function listar() {
    const lista = document.getElementById('lista');
    lista.innerHTML = "<tr><td colspan='5'> Carregando.... </td><td>";
    
    fetch('http://127.0.0.1:3333/usuario')
     .then(response => response.json())
     .then(dados => mostrar(dados));
}

function mostrar(dados) {
    const lista = document.getElementById('lista');
    lista.innerHTML = "";
    for (let i in dados){
        lista.innerHTML += `
            <tr>
                <td>${dados[i].idusuario}</td>
                <td>${dados[i].nome}</td>
                <td>${dados[i].telefone}</td>
                <td>${dados[i].email}</td>
                <td>
                    <button onclick="editar(${dados[i].idusuario})">Editar</button>
                    <button onclick="excluir(${dados[i].idusuario})">Excluir</button>
                </td>
            </tr>
        `;
    }

}