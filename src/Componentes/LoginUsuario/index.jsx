import React, {useState } from 'react';

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
    const usuario=localStorage.getItem('usuario')
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
    <div id="div-cadastro-usuario">
      <h1>Cadastro de Usuário</h1>
      <form>
     <label htmlFor="cadastro_email">Email:</label>
         <input type="text" onChange={(e) => handleEmail(e)} />
     <label htmlFor="cadastro_senha">Senha:</label>
         <input type="text" onChange={(e) => handleSenha(e)} />
       <button onClick={(e) => {
        e.preventDefault();
        handleSubmit(e)
       }}> Login </button>
      </form>
    </div>
    );
 }
   
         

export default LoginUsuario;