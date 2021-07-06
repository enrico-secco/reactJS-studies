import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Produto(){

    const [idUrl, setIdUrl] = useState('')
    let { id } = useParams();
    {/* desconstriu um objeto, useParams() é uma função Hooks pra acessar partes dinâmicas da URL, que não pode ir dentro do useEffect
    se não dá erro de Hooks dentro de Hooks  */}

    useEffect( () => {

        setIdUrl(id)
        console.log(id)

    },[])

    return(
            <div >
                <h2> Produto {idUrl} </h2>
                
                
            </div>
        )
    
}

