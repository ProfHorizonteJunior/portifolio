import { Link } from "react-router-dom";
import "./Tulio.css";
import fotoTulio from "../assets/fotoTulio.jpg";

export default function Tulio() {
  return (
    <div className="tulio-page">
      <nav className="tulio-nav">
        <Link to="/" className="tulio-voltar">
          ← Voltar para a galeria
        </Link>
      </nav>

      <header className="tulio-hero">
        <div className="tulio-hero-foto">
          <div className="tulio-avatar">
            <img src={fotoTulio} alt="Foto de Tulio Silveira Lodetti" />
          </div>
        </div>

        <div className="tulio-hero-info">
          <span className="tulio-label">Portfólio</span>
          <h1>Tulio Silveira Lodetti</h1>
          <p className="tulio-cargo">
            Estudante de Técnico em Desenvolvimento de Sistemas · 18 anos
          </p>
          <p className="tulio-tagline">
            Transformando ideias em código e construindo projetos que funcionam
            na prática.
          </p>
          <div className="tulio-badges">
            <span className="tulio-badge">Programação</span>
            <span className="tulio-badge">Internet das Coisas</span>
            <span className="tulio-badge">Desenvolvimento Web</span>
            <span className="tulio-badge">SENAI</span>
          </div>
        </div>
      </header>

      <main className="tulio-main">
        <section className="tulio-secao">
          <div className="tulio-secao-header">
            <span className="tulio-secao-num">01</span>
            <h2>Sobre mim</h2>
          </div>
          <p>
            Olá! Me chamo <strong>Tulio</strong>, tenho 18 anos e estou cursando
            o <strong>Técnico em Desenvolvimento de Sistemas</strong>. Tenho
            interesse em tecnologia, aprendizado prático e na criação de
            projetos que unem software e inovação — com atenção especial a
            soluções envolvendo dispositivos conectados.
          </p>
        </section>

        <section className="tulio-secao">
          <div className="tulio-secao-header">
            <span className="tulio-secao-num">02</span>
            <h2>Formação acadêmica</h2>
          </div>
          <div className="tulio-timeline">
            <article className="tulio-timeline-item">
              <div className="tulio-timeline-marker" />
              <div>
                <h3>Técnico em Desenvolvimento de Sistemas</h3>
                <span className="tulio-timeline-status">Em andamento</span>
                <p>
                  Formação focada em lógica de programação, desenvolvimento de
                  software e construção de soluções digitais.
                </p>
              </div>
            </article>
            <article className="tulio-timeline-item">
              <div className="tulio-timeline-marker" />
              <div>
                <h3>Ensino Médio</h3>
                <span className="tulio-timeline-status">Concluído</span>
                <p>
                  Base educacional que direcionou meu interesse pela área de
                  tecnologia.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="tulio-secao">
          <div className="tulio-secao-header">
            <span className="tulio-secao-num">03</span>
            <h2>Paixões e interesses</h2>
          </div>
          <div className="tulio-cards">
            <article className="tulio-card">
              <span className="tulio-card-icon">IoT</span>
              <h3>Internet das Coisas</h3>
              <p>
                Integrar sensores, hardware e aplicações para criar soluções
                conectadas no dia a dia.
              </p>
            </article>
            <article className="tulio-card">
              <span className="tulio-card-icon">Dev</span>
              <h3>Desenvolvimento de Software</h3>
              <p>
                Desenvolver sites, sistemas e aplicar boas práticas de
                programação em projetos reais.
              </p>
            </article>
            <article className="tulio-card">
              <span className="tulio-card-icon">Tech</span>
              <h3>Tecnologia e Games</h3>
              <p>
                Explorar jogos e ferramentas digitais como fonte de estudo,
                criatividade e inspiração.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="tulio-footer">
        <p>Desenvolvido por Tulio Silveira Lodetti</p>
      </footer>
    </div>
  );
}
