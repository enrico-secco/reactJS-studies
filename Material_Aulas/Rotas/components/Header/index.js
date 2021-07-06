import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Header(){

    return(
            <div >
                Header meu Projeto
                <Link to='/sobre'> Ir para Sobre </Link>
                <hr/>
            </div>
        )
    
}

