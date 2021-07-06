import React, {useState, useEffect, Component} from 'react'


/*
export default function TodoItems( {list, deletar} ){

    function remove(key){
        deletar(key); //atualizou a prop delete com a key, vai mandar essa key com a prop
        //um remove e o outro deletar para não dar conflito.
        
    }    

    return(
            <div>
                <ul>
                    { list.map( (item) => {
                        return(
                            <li onClick={() => remove(item.key)} key={item.key}>
                                {item.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    
}

*/
export default class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {}

        this.remove = this.remove.bind(this)
    }

    remove(key){
        this.props.remove(key); //mandou uma prop remove com o valor da key
    }   

    render(){
        return(
            <div>
                <ul>
                    { this.props.list.map( (item) => {
                        return(
                            <li onClick={() => this.remove(item.key)} key={item.key}>
                                {item.text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

