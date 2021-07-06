import React, {Component, useState} from 'react'

export default class App extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            hora: "00:00:00"
        }
    }

    componentDidMount(){ //hora de montar o componente
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000) //atualiza de um em um segundo
    }

    componentDidUpdate(){ //quando o componente atualziza, no caso de 1 em um 1 segundo no setInterval
        console.log("atualizou")
    }
    

render(){
    return(
            <div>
                <h1> Projeto {this.state.hora} </h1>
            </div>
        )
    
}
}
