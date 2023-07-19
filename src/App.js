import './App.css';
import Cabecalho from './Componentes/cabecalho';
import Conteudo,{OlaMundo} from './Componentes/conteudo';
import Rodape from './Componentes/rodape';


/*
Arquivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {

  OlaMundo();
  /*Todo componente deve retornar um html entre parenteses*/
  return (
    /*O React substitui className por class pq class é palavra reservada do JS*/
    <>
    {/* Nosso cabecalho tem uma propriedade chamada titulo */}
    <Cabecalho logo="logo192.png" titulo="Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
    <Conteudo/>
    <Rodape/>
    </>
  );
}

export default App;
