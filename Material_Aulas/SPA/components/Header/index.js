import React, {useState, useEffect} from 'react'
import { HashLink as Link} from 'react-router-hash-link' /* { HashLink as Link} Usa HashLick com o nome Link */
{/* Em projetos grandes usar como Hashlick mesmo */}

export default function Header(){

    return(
        <header id="home">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link smooth to='#home'>  Home </Link></li> {/* Vai saber pelo id que colocou na div dos componentes */}
                        <li><Link smooth to='#sobre'>  Sobre </Link></li>
                        <li><Link smooth to='#contato'>  Contato </Link></li> 
                        {/* smooth é uma prop que faz ir de maneira suave */}
                    </ul>
                </nav>
            </div>
        </header>
        )
    
}

