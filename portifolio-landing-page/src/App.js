import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Horizonte from "./pages/Horizonte";
import Julia from "./pages/Julia";
import MarceloAugusto from "./pages/MarceloAugusto";
import Ana from "./pages/Ana"
import "./App.css";
import  Alisson from "./pages/Alisson";

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
      <Route path="/alisson" element={<Alisson/>}/>
      <Route path="/marcelo-augusto" element={<MarceloAugusto/>}/>
      <Route path="/ana" element={<Ana/>} />

     <Route path="/julia" element={<Julia/>}/>
    </Routes>
    </BrowserRouter>
  );
}
