import React, {useState, useEffect} from 'react'
import './style.css'

import Header from './components/Header'

import Routes from './routes'


export default function App(){

    return(
            <div className="container">
                
                <Routes/> {/* Chama o Routes */}
            </div>
        )
    
}

