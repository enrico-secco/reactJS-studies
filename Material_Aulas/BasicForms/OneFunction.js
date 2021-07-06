import React, {Component} from 'react'

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
         form: {
             nome:"Enrico",
             email: "oi@teste.com",
             senha: '123',
             sexo: "Masculino"
         }
        }
        this.dadosForm = this.dadosForm.bind(this)
        
    }


    //usa uma função pra mudar o valor das states.
    dadosForm(event){
        let form = this.state.form; //desconstrução
        form[event.target.name] = event.target.value; //pega o name do input e vai receber o value que digitou naquele input.
        this.setState({ form: form })                 //target -> propriedade do evento que pega a refeência dele( de qual input )
    }


render(){
    return(
            <div>
            <h2> Login</h2>

            <label> Nome: </label>
             <input type="text" name="nome" value={this.state.form.nome}
             onChange={this.dadosForm}/>  <br/><br/>

             <label> Email: </label>
             <input type="email" name="email" value={this.state.form.email}
             onChange={this.dadosForm}/> 
             
             <br/><br/>

             <label> Senha </label>
             <input type="password" name="senha" value={this.state.form.senha}
             onChange={this.dadosForm}/>

            <br/><br/>

             <label> Sexo: </label>
             <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                 <option value="masculino"> Masculino</option>
                 <option value="feminino"> Feminino</option>
             </select>

             <div>
                 <h3> {this.state.form.email} </h3>
                 <h3> {this.state.form.senha} </h3>
                 <h3> {this.state.form.sexo} </h3>
             </div>
        

            </div>
        )
    
}
}
