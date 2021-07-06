import React, {useState, useEffect, useRef} from 'react'

import TodoItems from '../TodoItems'

export default function TodoList(){

    const [tarefa, setTarefa] = useState("")
    const [items, setItems] = useState([])
    
    const _tarefaInput = useRef("")


function addItem(e){
    if( tarefa !== ""){ // ou _tarefaInput.value !== null
        let newItem = { //criou um objeto, pra ter o nome e a key(usada pra saber qual tarefa vai mexer)
            text: tarefa, // ou _tarefaInput.current.value
            key: Date.now() //gerou a key como a hora pra não se repetir.
        };

        setItems([...items, newItem])
    }

    setTarefa("") //limpar o input
    e.preventDefault(); // não atualizar a página e perder as alterações.
}

function removeItem(key){
    console.log("a ser deletado" + key)
    
    let filtro = items.filter( (item) => { //recebe o item dentro desse filtro
        return (item.key !== key)
    })
    // filtra todos os itens da lista e só vai retornar os itens diferentes da key que recebe como parâmetro 
    //( o que recebe por parâmetro é o que quer excluir).

    setItems(filtro)
}



function log(){
    console.log(items)
}

    return(
            <div>
                <form onSubmit={addItem}>
                    <input type="text" placeholder="Nova Tarefa" name="tarefa"
                    value={tarefa} onChange={ (e) => setTarefa(e.target.value)}
                    ref={_tarefaInput} />
                
                <button type="submit"> Adicionar </button>
                 
                </form>

                <button onClick={log}> LOG </button>

                <TodoItems list={items}  deletar={removeItem}/>    {/* passa o array item e o deletar recebe as props (key) */}
                
            </div>
        )
}
    

