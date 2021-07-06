import React, {useState, useEffect} from 'react'
import firebase from './fireConnection'


export default function App(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    

    useEffect( () => 
    {
        //Observador, se tem usuário logado ou deslogado.
     firebase.auth().onAuthStateChanged((user) => {
        if(user){
            alert("Usuário logado com sucesso \n Email: " + user.email)
            return;
        }
    })
    }, [])
    

    

    
  function logar(e){ //event que recebe do onSubmit
 
    firebase.auth().signInWithEmailAndPassword(email,senha) //retorna uma promise, then se deu certo e catch se der erro
    .catch( (error) => { //lista de erros que possui no firebase.
        if(error.code === 'auth/wrong-password'){
            alert("Senha incorreta!")
        }
        else{
            alert('Código do erro' + error.code)
        }
    })


    e.preventDefault(); //página não recarregar na hora do submit
  }

  function sair(e){
    firebase.auth().signOut();
    alert("Deslogado com sucesso!");
    setSenha("")
    setEmail("")

  }


    return(
            <div>
                <h1> Entrar </h1>
                <form onSubmit={logar}>
                    <label> Email </label> <br/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>

                    <label> Senha </label> <br/>
                    <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} /> <br/>

                    <button type="submit"> Entrar </button>
                </form> <br/>

                <button onClick={sair}> Sair </button>

             
            </div>
        )
    
}

