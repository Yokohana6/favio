import React, {useState } from 'react';
import styles from '../CadastroUsuario/Cadastro.module.css'

 const LoginUsuario = () => {
   const [email,setEmail]=useState(' ')
   const [senha,setSenha]=useState(' ')
  

function handleEmail(e){
  setEmail(e.target.value)
}

function handleSenha(e){
  setSenha(e.target.value)
}

function handleSubmit(e){
    const usuario= JSON.parse(localStorage.getItem('usuario'))
    console.log(usuario)
    if (usuario!=null){
      console.log(usuario.email)
      console.log(usuario.senha)
       if(email==usuario.email && senha== usuario.senha){
        alert("O usuário foi logado com sucesso!!!")
       }else{
        alert("Erro! Informações de Usuário não encontradas")
       }
    }
  
}

  return (
    <div id="div-cadastro-usuario" className={styles.cadastroUsuario}>
      <h1>Login de Usuário</h1>
      <form>
     <label htmlFor="cadastro_email">Email:</label>
         <input type="text" onChange={(e) => handleEmail(e)} />
         <br />
     <label htmlFor="cadastro_senha">Senha:</label>
         <input type="password" onChange={(e) => handleSenha(e)} />
       <button onClick={(e) => {
        e.preventDefault();
        handleSubmit(e)
       }}> Login </button>
      </form>
    </div>
    );
 }
   
         

export default LoginUsuario;