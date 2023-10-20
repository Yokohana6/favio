import React from 'react'

const Principal = () => {
    return (

        /*O React substitui className por class pq class é palavra reservada do JS*/
        <>
        {/* Nosso cabecalho tem uma propriedade chamada titulo */}
        <Cabecalho logo="logo1.png" titulo="TechGirls" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!!!"/>
        
        {/* <Conteudo/> */}
        <Rodape subtitulo="26/07/2023"/>
        </>
     
        
     );
}

export default Principal