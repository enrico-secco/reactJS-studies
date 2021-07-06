import React, {useState, useEffect} from 'react'
import firebase from './fireConnection'


export default function App(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    
  function cadastrar(e){ //event que recebe do onSubmit
 
    firebase.auth().createUserWithEmailAndPassword(email,senha) //retorna uma promise, then se deu certo e catch se der erro
    .then( alert("Cadastro feito!"))
    .catch( (error) => { //lista de erros que possui no firebase.
        if(error.code === 'auth/invalid-email'){
            alert("Email inválido!")
        }

        if(error.code === 'auth/weak-password'){
            alert("Senha fraca!")
        }

        else{
            alert('Código do erro' + error.code)
        }
    })


    e.preventDefault(); //página não recarregar na hora do submit
  }

    return(
            <div>
                <form onSubmit={cadastrar}>
                    <label> Email </label> <br/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>

                    <label> Senha </label> <br/>
                    <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} /> <br/>

                    <button type="submit"> Cadastrar</button>
                </form>
             
            </div>
        )
    
}

