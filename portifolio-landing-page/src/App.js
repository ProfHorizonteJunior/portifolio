import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Horizonte from "./pages/Horizonte";
import Gabriel from "./pages/Gabriel";
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

      {/* ======================================================== */}
      {/* 👇 ALUNOS: adicionem a rota de vocês aqui (1 linha cada)  */}
      {/* Exemplo: <Route path="/joao" element={<Joao />} />        */}
      {/* ======================================================== */}
      {/* <Route path="/joao" element={<Joao />} /> */}
      {/* <Route path="/maria" element={<Maria />} /> */}
    </Routes>
    </BrowserRouter>
  );
}
