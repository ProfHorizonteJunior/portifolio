import { Link } from "react-router-dom";
import "./Israel.css";
import fotoIsrael from "../assets/israel.jpg"; // descomente quando tiver sua foto

export default function Israel() {
  return (
    <div className="israel-perfil">
      {/* Botão voltar */}
      <Link to="/" className="israel-voltar">← Voltar para a galeria</Link>

      {/* HERO */}
      <header className="israel-hero">
        <div className="israel-avatar">
          {
              <img src={fotoIsrael} alt="Foto de Israel" />
          }
        </div>
        <h1>Israel Erthal</h1>
        <p className="israel-cargo">Estudante • Desenvolvedor em Formação</p>
        <p className="israel-tagline">
          Aprendendo, construindo e evoluindo a cada projeto. 💻
        </p>

        <div className="israel-badges">
          <span className="israel-badge">Dev</span>
          <span className="israel-badge">Robotics</span>
          <span className="israel-badge">Sports</span>
          <span className="israel-badge">Games</span>
        </div>
      </header>

      {/* SOBRE MIM */}
      <section className="israel-secao">
        <h2>👋 Sobre mim</h2>
        <p>
          Sou <strong>estudante de programação</strong> apaixonado por criar,
          por robótica e desafios que me fazem crescer. Estou construindo minha
          trajetória com dedicação, curiosidade e muita vontade de transformar
          ideias em soluções reais.
        </p>
      </section>

      {/* FORMAÇÃO */}
      <section className="israel-secao">
        <h2>🎓 Formação Acadêmica</h2>
        <div className="israel-timeline">
          <div className="israel-item">
            <span className="israel-ponto" />
            <div>
              <h3>Ensino Médio</h3>
              <p>Cursando 3° ano — reta final da educação básica. 📚</p>
            </div>
          </div>
          <div className="israel-item">
            <span className="israel-ponto" />
            <div>
              <h3>Desenvolvimento de Sistemas — SENAI</h3>
              <p>Cursando — formação técnica em desenvolvimento de software.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESSES */}
      <section className="israel-secao">
        <h2>💡 Paixões & Interesses</h2>
        <div className="israel-cards-interesse">
          <div className="israel-interesse">
            <span>💻</span>
            <h3>Programação</h3>
            <p>Transformando idéias em soluções.</p>
          </div>
          <div className="israel-interesse">
            <span>🤖</span>
            <h3>Robótica</h3>
            <p>Unindo hardware e software para criar soluções inteligentes.</p>
          </div>
          <div className="israel-interesse">
            <span>⚽</span>
            <h3>Esportes</h3>
            <p>Disciplina e trabalho em equipe dentro e fora do campo.</p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="israel-footer">
        <p>Feito com 💚 por Israel</p>
      </footer>
    </div>
  );
}