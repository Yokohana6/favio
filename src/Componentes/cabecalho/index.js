import React from 'react'
import styles from './cabecalho.module.css'

export default function cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      
      <img src={props.logo} />
      <p className={styles.titulo}>{props.titulo}</p>
      
      <p className={styles.menu}> 
      <ul>
        <li><a href="#" onclick="selecionarOpcao('Home')">Inicio</a></li>
        <li><a href="#" onclick="selecionarOpcao('Sobre')">Sobre</a></li>
        <li><a href="#" onclick="selecionarOpcao('Contato')">Explorar</a></li>
      </ul>
      </p>
    </div>
  )
}