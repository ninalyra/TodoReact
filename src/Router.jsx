import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

export function Router(){

    return(
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contato" element={<Contact/>} />



         </Routes>

    )
}