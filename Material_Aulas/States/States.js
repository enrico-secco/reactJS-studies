import React, {Component} from 'react'

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: "Enrico",
            contador: 0
        }

        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        this.setState(state)
    }

    diminuir(){
       let state = this.state;
       state.contador += -1;

        if(state.contador === 0){
            alert("Contador zerado")
        }


       this.setState(state)
    }


    render(){
        return(
            <div>

                <button onClick={this.diminuir}>
                    -
                </button>

                {this.state.contador}

                <button onClick={this.aumentar}>
                    +
                </button>

            </div>
        )
    }
}