import React from 'react'
import styles from './cabecalho.module.css'

export default function cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      
      <img src={props.logo} />
      <p className={styles.titulo}>{props.titulo}</p>
      
      <p className={styles.menu}> 
        <li> INICIO </li>
        <li> FAVORITOS </li>
        <li> EXPLORAR </li>
      </p>
    </div>
  )
}