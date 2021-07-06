import React, {useState, useEffect} from 'react'
import './style.css'

import TodoList from './components/TodoS/TodoList'

export default function App(){

    return(
            <div className="container">
                <h1> Lista de tarefas </h1>
                <TodoList/>
            </div>
        )
    
}

