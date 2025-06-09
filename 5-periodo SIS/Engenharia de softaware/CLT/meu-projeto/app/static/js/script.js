
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada.");
  });
  

  function confirmarExclusao() {
    return confirm("Tem certeza que deseja excluir este exame?");
  }
  
  function login(event) {
    event.preventDefault();
  
    Swal.fire({
      icon: 'success',
      title: 'Login realizado!',
      text: 'Bem-vindo ao sistema!',
      confirmButtonText: 'Ir para o sistema',
      background: '#f9f9f9',
      color: '#111',
      confirmButtonColor: '#111'
    }).then(() => {
      window.location.href = "/inicio";
    });
  
    return false;
  }
  

  function confirmarExclusao(url) {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FFA500',   
      cancelButtonColor: '#111', 
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
      background: '#f9f9f9',
      color: '#111'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = url;
      }
    });
  }
  
  