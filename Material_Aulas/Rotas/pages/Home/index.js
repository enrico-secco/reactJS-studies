import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'



export default function Home(){

    return(
            <div >
                <h1>  Página Home </h1> <br/>
                <Link to='/sobre'> Ir para sobre</Link>
            </div>
        )
    
}

