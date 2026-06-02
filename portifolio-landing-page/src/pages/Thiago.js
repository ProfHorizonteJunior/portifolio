import { Link } from "react-router-dom";
import "./Thiago.css";


export default function Thiago() {
  return (
    <div className="perfil">
      {/* Botão voltar */}
      <Link to="" className="voltar">← Voltar para a galeria</Link>

      {/* HERO */}
      <header className="hero">
    
        <h1>Thiago</h1>
        <p className="cargo">Aluno • técnico de desenvolvimento de sistemas </p>
        <p className="tagline">
          Transformando código em aprendizado e ideias em inovação.
       </p>

        <div className="badges">
          <span className="badge">Web</span>
          <span className="badge">Ensino</span>
          <span className="badge">Educação</span>
        </div>
      </header>

      {/* SOBRE MIM */}
      <section className="secao">
        <h2> Sobre mim</h2>
        <p>
          Sou <strong>aluno</strong> apaixonado por tecnologia e por
          compartilhar conhecimento. Minha jornada une o mundo do
          desenvolvimento, sempre com um olhar
          curioso para o universo dos dispositivos conectados e projetos com
          web.
        </p>
      </section>

      {/* FORMAÇÃO */}
      <section className="secao">
        <h2> Formação Acadêmica</h2>
        <div className="timeline">
          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Técnico em desenvolvimento de sistemas</h3>
              <p>Graduação — base sólida em desenvolvimento de sistemas web.</p>
            </div>
          </div>
          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Técnico em desenvolvimento de sistemas</h3>
            </div>
          </div>
          <div className="item">
            <span className="ponto" />
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
            <h3>sistemas para lojas de roupa</h3>
            <p>fotos,valores e muita criatividade.</p>
          </div>
          <div className="interesse">
            <span>🚀</span>
            <h3>Ensino & Tecnologia</h3>
            <p>Me formando para o futuro.</p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="perfil-footer">
        <p>Feito com 💜 por Thiago</p>
      </footer>
    </div>
  );
}
