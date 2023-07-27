import './App.css';
import Cabecalho from './Componentes/cabecalho';
import Rodape from './Componentes/rodape';


/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {
  
  return (
    /*O React substitui className por class pq class é palavra reservada do JS*/
    <>
    {/* Nosso cabecalho tem uma propriedade chamada titulo */}
    <Cabecalho logo="logo1.png" titulo="TechGirls" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
    <Rodape subtitulo="26/07/2023"/>
    </>
  );
}

export default App;
