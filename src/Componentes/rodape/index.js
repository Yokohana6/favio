import React from 'react'
import styles from './rodape.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Rodape() {

  function getToday() { 
    var today = new Date(); 
    var dd = String(today.getDate()).padStart(2, '0'); 
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear(); 
  
    today = dd + '/' +  mm + '/'  + yyyy; 
    return today 
  }

  return (
    
    <footer>
     <div className='Rodape'>
     <ul>
    <li><FaFacebook/></li>
    <li><FaInstagram/></li>
    <li><FaTwitter/></li>
     </ul>
     </div>

     <p className={styles.date}>{getToday()}</p>

    </footer>
  
  )
  }