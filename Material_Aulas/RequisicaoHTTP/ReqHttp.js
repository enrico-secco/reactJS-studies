import React, {useState, useEffect} from 'react'
import './style.css' //estilo pra página

export default function App(){

 let [nutri, setNutri] = useState([])


// componentDidMount() -> useEffect( () => { componente montado }, [])   montado quando renderizado
// componentDidUpdate() -> useEffect( () => { chamado sempre }) montado a cada alteração

useEffect( () => { //usando na renderização.
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

    fetch(url) //devolve uma resposta se deu certo ou não (res)
    .then( (res) => res.json() ) //transforma essa res em JSON { porque a api, os dados estão em JSON} e devolve uma resposta (resJson) se deu certo ou não
    .then( (resJson) => {
        setNutri(resJson) // recebe tudo que tem dentro do resJSON 
        console.log(resJson)
        
    })

}, [])


    return(
            <div className="container">

                <header>
                     React Nutri 
                </header>

                {nutri.map( (item) => { //map vai corret toda a lista e popular todos itens.
                    return(
                        <div>
                            <article key={item.id}>
                             <strong> {item.titulo}</strong>
                             <img src={item.capa} />
                             <p> {item.subtitulo}</p>
                             <a className="botao"> Acessar </a>
                            </article>
                        </div>
                    )
                })}
            
            </div>
        )
    
}

