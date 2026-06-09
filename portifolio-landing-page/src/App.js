import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Horizonte from "./pages/Horizonte";
import Eduardo from "./pages/Eduardo";
import Gabriel from "./pages/Gabriel";
import Israel from "./pages/Israel";
import Julia from "./pages/Julia";
import MarceloAugusto from "./pages/MarceloAugusto";
import Ana from "./pages/Ana";
import Alisson from "./pages/Alisson";
import "./App.css";

// ============================================================
// 👇 ALUNOS: importem o componente de vocês aqui (1 linha cada)
// Exemplo: import Joao from "./pages/Joao";
// ============================================================
// import Joao from "./pages/Joao";
// import Maria from "./pages/Maria";
import Tulio from "./pages/Tulio";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Página inicial - NÃO MEXER */}
      <Route path="/" element={<Home />} />
      <Route path="/horizonte" element={<Horizonte/>}/>

      <Route path="/eduardo" element={<Eduardo/>}/>
      <Route path="/julia" element={<Julia/>}/>
      <Route path="/gabriel" element={<Gabriel />} />
      <Route path="/israel" element={<Israel/>}/>
      <Route path="/alisson" element={<Alisson/>}/>
      <Route path="/marcelo-augusto" element={<MarceloAugusto/>}/>
      <Route path="/ana" element={<Ana/>} />
      <Route path="/tulio" element={<Tulio />} />


      {/* ======================================================== */}
      {/* 👇 ALUNOS: adicionem a rota de vocês aqui (1 linha cada)  */}
      {/* Exemplo: <Route path="/joao" element={<Joao />} />        */}
      {/* ======================================================== */}
    </Routes>
    </BrowserRouter>
  );
}
