import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header"
import { Footer } from "./components/footer";
import './global.css';
import { Router } from "./Router";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )

}

export default App
