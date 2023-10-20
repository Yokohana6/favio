import React, {useState } from 'react';
import styles from './Cadastro.module.css'
 const CadastroUsuario = () => {
   const [nome,setNome]=useState(' ')
   const [email,setEmail]=useState(' ')
   const [senha,setSenha]=useState(' ')
   const [confirmaçaoSenha,setconfirmaçaoSenha]=useState(' ')

function handleNome(e){
  setNome(e.target.value)
}

function handleEmail(e){
  setEmail(e.target.value)
}

function handleSenha(e){
  setSenha(e.target.value)
}

function handleConfirmaçãodaSenha(e){
  setconfirmaçaoSenha(e.target.value)
}
function handleSubmit(e){
  if(senha==confirmaçaoSenha) {
    const usuario={nome,email,senha}
    localStorage.setItem('usuario', JSON.stringify(usuario))
  } else {
    alert("Senha incorreta")
  }
}

  return (
    <div id="div-cadastro-usuario" className={styles.cadastroUsuario} >
      <h1>Cadastro de Usuário</h1>
      <form>
     <label htmlFor="cadastro_nome">Nome:</label>
         <input type="text" onChange={(e) => handleNome(e)} />
         <br />
     <label htmlFor="cadastro_email">Email:</label>
         <input type="text" onChange={(e) => handleEmail(e)} />
         <br />
     <label htmlFor="cadastro_senha">Senha:</label>
         <input type="password" onChange={(e) => handleSenha(e)} />
         <br />
     <label htmlFor="cadastro_confsenha">Confirmação da Senha:</label>
         <input type="password" onChange={(e) => handleConfirmaçãodaSenha(e)} />
       <button onClick={(e) => {
        e.preventDefault();
        handleSubmit(e)
       }}> Salvar </button>
      </form>
    </div>
    );
 }
   
         

export default CadastroUsuario;