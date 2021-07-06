import React, {useState, useEffect} from 'react'
import firebase from './fireConnection'

//ADICIONAR NA DATABASE COM O USER UID COMO key

export default function App(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("")

    
    firebase.auth().signOut();

    useEffect( () => {
        
    //Observador, se tem usuário logado ou deslogado.
     firebase.auth().onAuthStateChanged((user) => {
        if(user){ //se o usuário estiver logado cai nesse if.
            firebase.database().ref('usuarios').child(user.uid).set({ //ui do usuário vai ser a key dele na datababse.
                nome: nome
            })
            .then( () => {
                setEmail("");
                setNome("");
                setSenha("");
            })
        }

    })
    }) //se colocasse, [] ele recebia "" (porque seria só quando monta a página) no nome E se não fizesse o then e colocasse o set depois do if também.
        //sem []. colocando o set depois do if, não tem como digitar nos campos.
    

    
  function cadastrar(e){ //event que recebe do onSubmit.
    firebase.auth().createUserWithEmailAndPassword(email,senha) //retorna uma promise, then se deu certo e catch se der erro
    .catch( (error) => { //lista de erros que possui no firebase.
            alert('Código do erro' + error.code)
        
    })

    e.preventDefault(); //página não recarregar na hora do submit
  }


    return(
            <div>
                <h1> Novo Usuario </h1>
                <form onSubmit={cadastrar}>
                    <label> Nome </label> <br/>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} /> <br/>

                    <label> Email </label> <br/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>

                    <label> Senha </label> <br/>
                    <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} /> <br/>

                    <button type="submit"> Cadastrar </button>
                </form> <br/>

                

             
            </div>
        )
    
}

