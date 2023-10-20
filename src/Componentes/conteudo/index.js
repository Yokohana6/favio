import React, { useState } from "react";
import styles from "./Conteudo.module.css";

const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [url, setUrl] = useState("");

let favoritos=[]

  function salvarFavorito(){
    favoritos=[...favoritos, {nomeSite, url}]
    localStorage.setItem("favorito", JSON.stringify (favoritos))
  }
    return (
    <div className={styles.area}>
      Conteudo
      <form
        className={styles.formulario}
        onSubmit={() => alert("Favorito salvo")}
      >
        <label>Nome do Site</label>
        <h1>{nomeSite}</h1>
        <input
          name="nome_site"
          onChange={(evento) => {
            setNomeSite(evento.target.value);
            console.log(nomeSite);
          }}
        ></input>
        <br />
        <label>URL</label>
        <input 
        type="url" 
        name="url"
        onChange={(evento)=> {
          setUrl(evento.target.value);
        }}

        ></input>
        <br />
        <button>Salvar</button>
      </form>
    </div>
  );
};

export default Conteudo;