import Formulario from "./Formulario";
import Lista from "./lista";
import Feriados from "./Feriados";



function app(){
  return (
    <div>
      <h1>Formulário</h1>
      <Formulario />
      <h1>Lista de Pokémons</h1>
      <Lista />
      <h1>Lista de feriados</h1>
      <Feriados />
    </div>
  );
}

export default app;