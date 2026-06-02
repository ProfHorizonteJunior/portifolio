import { Link } from "react-router-dom";
import "./Tulio.css";
import fotoTulio from "../assets/tulio.svg";

export default function Tulio() {
  return (
    <div className="perfil">
      <Link to="/" className="voltar">
        ← Voltar para a galeria
      </Link>

      <header className="hero">
        <div className="avatar">
          <img src={fotoTulio} alt="Foto de Tulio Silveira Lodetti" />
        </div>
        <h1>Tulio Silveira Lodetti</h1>
        <p className="cargo">Estudante • 18 anos • Desenvolvimento de Sistemas</p>
        <p className="tagline">
          Aprendendo a transformar ideias em código e projetos que funcionam de verdade. 💻
        </p>

        <div className="badges">
          <span className="badge">💻 Programação</span>
          <span className="badge">🤖 IoT</span>
          <span className="badge">🌐 Web</span>
          <span className="badge">🎓 SENAI</span>
        </div>
      </header>

      <section className="secao">
        <h2>👋 Sobre mim</h2>
        <p>
          Olá! Sou o <strong>Tulio</strong>, tenho 18 anos e estou cursando o{" "}
          <strong>Técnico em Desenvolvimento de Sistemas</strong>. Gosto de
          tecnologia, de aprender coisas novas na prática e de montar projetos
          que unem software e curiosidade — especialmente quando envolvem
          dispositivos conectados.
        </p>
      </section>

      <section className="secao">
        <h2>🎓 Formação Acadêmica</h2>
        <div className="timeline">
          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Técnico em Desenvolvimento de Sistemas</h3>
              <p>Em andamento — foco em lógica, programação e soluções digitais.</p>
            </div>
          </div>
          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Ensino Médio</h3>
              <p>Concluído — base para seguir na área de tecnologia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <h2>💡 Paixões & Interesses</h2>
        <div className="cards-interesse">
          <div className="interesse">
            <span>🤖</span>
            <h3>Internet das Coisas</h3>
            <p>Conectar sensores, hardware e aplicações no dia a dia.</p>
          </div>
          <div className="interesse">
            <span>💻</span>
            <h3>Desenvolvimento de Software</h3>
            <p>Criar sites, sistemas e aprender boas práticas de código.</p>
          </div>
          <div className="interesse">
            <span>🎮</span>
            <h3>Tecnologia & Games</h3>
            <p>Explorar jogos e ferramentas digitais como hobby e inspiração.</p>
          </div>
        </div>
      </section>

      <footer className="perfil-footer">
        <p>Feito com 💜 por Tulio Silveira Lodetti</p>
      </footer>
    </div>
  );
}
