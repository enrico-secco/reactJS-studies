import React, {useState, useEffect} from 'react'
import { HashLink as Link} from 'react-router-hash-link' /* { HashLink as Link} Usa HashLick com o nome Link */
{/* Em projetos grandes usar como Hashlick mesmo */}

export default function Contato(){

    return(
        <div className="home" id="contato">
          <h1> Entre em Contato</h1>
          <h2> Telefone (xx) 1234-5678</h2>
          <h3> Rua: xxxxx</h3>
          <Link smooth to="#home" style={{color: '#fff'}}> ir para home</Link>
            
        </div>
        )
    
}

