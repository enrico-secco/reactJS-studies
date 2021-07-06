import React, { Component } from 'react'


//Class component
class Equipe extends Component{ //tem acesso as props (nome)
    render(){
        return( //tem que estar dentro de uma div os elementos se for mais de um, como se fosse uma view do RN
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social />
                <hr/>
            </div>
        )
    }
}


class Sobre extends Component{
    render(){
        return(
            <div>                              
                <h2> Olá sou o {this.props.nome}</h2>
                <h3>Sou {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
                
            </div>
        )
    }
}

const Social = () => { //componente burro
    return(
        <div>
            <a href="google.com"> Facebook </a>
            <a> LinkedIn </a>
        </div>
    )
}

export default function App(){
    return (
        <div>
            <h1> Conheça nossa equipe </h1>
            <Equipe nome="Enrico" cargo="Programador" idade="20"/>
            <Equipe nome="Lucas" cargo="UI" idade="20"/>
        </div>
    );
}