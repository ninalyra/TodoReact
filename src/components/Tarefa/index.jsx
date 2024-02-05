import { StyleTarefa } from "./style";

export function Tarefa(props) {

    return (

        <StyleTarefa>
            <p>{props.titulo}</p>
            <button onClick={()=> props.onRemove(props.id)}> X </button>
        </StyleTarefa>

    )
}
