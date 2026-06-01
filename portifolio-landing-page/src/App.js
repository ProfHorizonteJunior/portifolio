import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Horizonte from "./pages/Horizonte";
import Julia from "./pages/Julia";
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
      
      {/* ======================================================== */}
      {/* 👇 ALUNOS: adicionem a rota de vocês aqui (1 linha cada)  */}
      {/*       <Route path="/julia" element={<Julia/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}
