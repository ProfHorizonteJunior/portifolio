import { Link } from "react-router-dom";
import "./Home.css";
import fotoHorizonte from "../assets/horizonte.jpeg";
import fotoTulio from "../assets/tulio.svg";

// ============================================================
// 👨‍🏫 PROFESSOR: adicione aqui os nomes dos estudantes da turma
// O "nome" aparece na tela | a "rota" é o caminho (/joao)
// O "foto" é opcional — quem não tiver, mostra o emoji 👤
// ============================================================
const alunos = [
  { nome: "Horizonte Junior", rota: "/horizonte", foto: fotoHorizonte },
  { nome: "Tulio Silveira Lodetti", rota: "/tulio", foto: fotoTulio },
  { nome: "Maria", rota: "/maria" },
  { nome: "Pedro", rota: "/pedro" },
  { nome: "Ana", rota: "/ana" },
  // adicione mais alunos seguindo o mesmo padrão...
];

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Galeria de Landing Pages</h1>
        <p>Projeto colaborativo da turma — feito com React, Git e GitHub!</p>
      </header>

      <main className="cards-container">
        {alunos.map((aluno) => (
          <Link key={aluno.rota} to={aluno.rota} className="card">
            {aluno.foto ? (
              <div className="card-thumb">
                <img src={aluno.foto} alt={aluno.nome} />
              </div>
            ) : (
              <span className="card-emoji">👤</span>
            )}
            <h2>{aluno.nome}</h2>
            <p>Ver landing page →</p>
          </Link>
        ))}
      </main>

      <footer className="home-footer">
        <p>Feito com 💜 no SENAI/SC</p>
      </footer>
    </div>
  );
}
