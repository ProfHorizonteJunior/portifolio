import { Link } from "react-router-dom";
import "./Horizonte.css";
import fotoHorizonte from "../assets/horizonte.jpeg";

export default function Horizonte() {
  return (
    <div className="perfil">
      {/* Botão voltar */}
      <Link to="/" className="voltar">← Voltar para a galeria</Link>

      {/* HERO */}
      <header className="hero">
        <div className="avatar">
          <img src={fotoHorizonte} alt="Foto de Horizonte Junior" />
        </div>
        <h1>Horizonte Junior</h1>
        <p className="cargo">Professor • Entusiasta de IoT & Hardware</p>
        <p className="tagline">
          Transformando código em conhecimento e ideias em circuitos. ⚡
        </p>

        <div className="badges">
          <span className="badge">🐧 DevOps</span>
          <span className="badge">🤖 IoT</span>
          <span className="badge">🔧 Hardware</span>
          <span className="badge">🎓 Educação</span>
        </div>
      </header>

      {/* SOBRE MIM */}
      <section className="secao">
        <h2>👋 Sobre mim</h2>
        <p>
          Sou <strong>professor</strong> apaixonado por tecnologia e por
          compartilhar conhecimento. Minha jornada une o mundo do
          desenvolvimento, da infraestrutura e da educação, sempre com um olhar
          curioso para o universo dos dispositivos conectados e projetos com
          hardware.
        </p>
      </section>

      {/* FORMAÇÃO */}
      <section className="secao">
        <h2>🎓 Formação Acadêmica</h2>
        <div className="timeline">
          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Tecnologia em DevOps</h3>
              <p>Graduação — base sólida em automação e infraestrutura.</p>
            </div>
          </div>
          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Pós-graduação em Docência</h3>
              <p>Ensino Profissional e Tecnológico.</p>
            </div>
          </div>
          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Licenciatura em Informática</h3>
              <p>Em andamento — unindo tecnologia e educação. 📚</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESSES */}
      <section className="secao">
        <h2>💡 Paixões & Interesses</h2>
        <div className="cards-interesse">
          <div className="interesse">
            <span>🤖</span>
            <h3>Internet das Coisas</h3>
            <p>Conectando o mundo físico ao digital.</p>
          </div>
          <div className="interesse">
            <span>🔧</span>
            <h3>Projetos com Hardware</h3>
            <p>Arduino, ESP32, sensores e muita criatividade.</p>
          </div>
          <div className="interesse">
            <span>🚀</span>
            <h3>Ensino & Tecnologia</h3>
            <p>Formando os profissionais do futuro.</p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="perfil-footer">
        <p>Feito com 💜 por Horizonte Junior</p>
      </footer>
    </div>
  );
}
