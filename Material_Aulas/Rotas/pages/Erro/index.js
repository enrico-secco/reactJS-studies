import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Erro(){

    return(
            <div >
                <h2> OPS! Página não encontrada</h2>
                <h3>Você esta procurando por:</h3>
                <Link to="/"> Home </Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
        )
    
}

