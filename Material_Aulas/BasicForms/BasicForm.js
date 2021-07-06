import React, {Component} from 'react'

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
         email:"",
         senha:"",
         sexo: "masculino"
        }

        this.trocaEmail = this.trocaEmail.bind(this)
        this.trocaSexo = this.trocaSexo.bind(this)
    }

    trocaEmail(event) {
        let valorDigitado = event.target.value;
        this.setState({ email: valorDigitado})
    }

    trocaSexo(event){
        let sexoSelecionado = event.target.value;
        this.setState({ sexo: sexoSelecionado})
    }

render(){
    return(
            <div>
            <h2> Login</h2>
             <label> Email: </label>
             <input type="email" name="email" value={this.state.email}
             onChange={this.trocaEmail}/> 
             
             <br/><br/>

             <label> Senha </label>
             <input type="password" name="senha" value={this.state.senha}
             onChange={(newPassword) => this.setState({ senha: newPassword.target.value })}/>

            <br/><br/>

             <label> Sexo: </label>
             <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                 <option value="masculino"> Masculino</option>
                 <option value="feminino"> Feminino</option>
             </select>

             <div>
                 <h3> {this.state.email} </h3>
                 <h3> {this.state.senha} </h3>
                 <h3> {this.state.sexo} </h3>
             </div>
        

            </div>
        )
    
}
}
