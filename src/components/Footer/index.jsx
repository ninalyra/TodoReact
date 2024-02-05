import { Link } from "react-router-dom";
import { StyleFooter } from "./style";

export function Footer(){

    return(
     
        <StyleFooter>
           <p>Projeto by coti informática</p>
           <Link to="/">Página inicial</Link> - <Link to="/contato">Contato</Link>
        </StyleFooter>
     
    )




}