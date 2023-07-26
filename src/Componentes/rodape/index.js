import React from 'react'
import styles from './rodape.module.css'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Rodape() {
  return (
    
    <footer>
     <div className='Rodape'>Rodapé
     <ul>
    <li><FaFacebook/></li>
    <li><FaInstagram/></li>
    <li><FaTwitter/></li>
     </ul>
     </div>
    </footer>
   
  )
}