import { useState } from "react";
import { Tarefa } from "../Tarefa";
import { StyleForm, StyleList } from "./style";

export function List() {

    // state / estado
    // nome do estado, função atualizadora
    const [listaTarefas, setListaTarefas] = 
       useState(localStorage.getItem('tarefas') != null ? JSON.parse(localStorage.getItem('tarefas')) : []);


    const [novaTarefa, setNovaTarefa] = useState('');
    
//session_storage() -> Guarda em 
//{titulo: 'Fazer compras', id: 1 },
//{ titulo: 'Estudar react', id: 2 },
//{ titulo: 'Pagar contas', id: 3 },




    function addTarefa() {
        //listaTarefas.push({titulo:'Nova tarefa', id:5})
        //console.log(listaTarefas);
        setListaTarefas([...listaTarefas, { titulo: novaTarefa, id: new Date().getTime()}]);
        setNovaTarefa('');
    }

function removeTarefa(id){
   // console.log('tarefa removida'+id);

   setListaTarefas(
       listaTarefas.filter(tarefa => (tarefa.id != id))
   )

}


    return (
        <>

               {
                //Guardando o valor do estado em um storage do navegador.
                   localStorage.setItem('tarefas',JSON.stringify(listaTarefas))
               }  


            <StyleForm>
                <input
                    type="text"
                    placeholder="Criar nova tarefa"
                    value={novaTarefa} 
                    onChange={(e)=>setNovaTarefa(e.target.value)}
                    onKeyUp={(e)=> e.key == 'Enter' ? addTarefa() : ''}
                    />
                    
                <button onClick={addTarefa}>Criar</button>

            </StyleForm>

            <StyleList>
                <h2>Lista de Tarefas</h2>

                {
                    listaTarefas.map(tarefa => (
                        <Tarefa 
                        key={tarefa.id}
                        titulo={tarefa.titulo} 
                        id={tarefa.id} 
                        onRemove={removeTarefa} 
                        />
                    ))
                }

            </StyleList>
        </>

    )
}