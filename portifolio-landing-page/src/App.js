import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Horizonte from "./pages/Horizonte";
import Gabriel from "./pages/Gabriel";
import Israel from "./pages/Israel";
import Julia from "./pages/Julia";
import MarceloAugusto from "./pages/MarceloAugusto";
import Alisson from "./pages/Alisson";
import Ana from "./pages/Ana";
import "./App.css";

// ============================================================
// 👇 ALUNOS: importem o componente de vocês aqui (1 linha cada)
// Exemplo: import Joao from "./pages/Joao";
// ============================================================
// import Joao from "./pages/Joao";
// import Maria from "./pages/Maria";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Página inicial - NÃO MEXER */}
      <Route path="/" element={<Home />} />
      <Route path="/horizonte" element={<Horizonte/>}/>
      <Route path="/gabriel" element={<Gabriel />} />
      <Route path="/israel" element={<Israel/>}/>
      <Route path="/alisson" element={<Alisson/>}/>
      <Route path="/marcelo-augusto" element={<MarceloAugusto/>}/>
      <Route path="/ana" element={<Ana/>} />
      <Route path="/julia" element={<Julia/>}/>

      {/* ======================================================== */}
      {/* 👇 ALUNOS: adicionem a rota de vocês aqui (1 linha cada)  */}
      {/* Exemplo: <Route path="/joao" element={<Joao />} />        */}
      {/* ======================================================== */}
    </Routes>
    </BrowserRouter>
  );
}
