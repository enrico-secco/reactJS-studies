import React, {useState, useEffect} from 'react'
import firebase from './fireConnection'


export default function App(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [user, setUser] = useState(null)


    useEffect(() => {
        auth();
    }, [])

    function auth(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                setUser(user)
            }
        })
    }

    
  function cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(email,senha) //retorna uma promise, then se deu certo e catch se der erro
    .catch( (error) => { //lista de erros que possui no firebase.
            alert('Código do erro' + error.code)
        
    })
    setEmail("")
    setSenha("")

  }

  function logar(){
    firebase.auth().signInWithEmailAndPassword(email,senha) //retorna uma promise, then se deu certo e catch se der erro
    .catch( (error) => { //lista de erros que possui no firebase.
            alert('Código do erro' + error.code)
        
    })
    
  }

  function sair(){
      firebase.auth().signOut()
      .then( () => {
        alert("Deslogado");
        setUser(null); //se não sempre vai renderizar como se estivesse logado (na renderuzação condicional)
      })
  }


    return(
            <div>

                {user ?     
                <div>
                    <p> Painel admin</p>
                    <p> Seja Bem Vindo</p>
                    <p> {user.email}</p>
                    <p>{user.uid}</p>
                    <button onClick={sair}> Logout</button>
                </div>
                :
                <div>
                    <h1> Welcome </h1>
                    <label> Email </label> <br/>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>

                    <label> Senha </label> <br/>
                    <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} /> <br/>

                    <button onClick={cadastrar}> Cadastrar </button>
                    <button onClick={logar}> Logar </button>
                <br/>
                </div>
                }
                

            </div>

                

             
           
        )
    
}

