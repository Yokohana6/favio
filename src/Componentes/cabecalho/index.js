import React from 'react'
import styles from './cabecalho.module.css'

export default function cabecalho(props) {
  return (
    <div className={styles.cabecalho}>
      
      <img src={props.logo} />
      <p className={styles.titulo}>{props.titulo}</p>
      
    </div>
  )
}