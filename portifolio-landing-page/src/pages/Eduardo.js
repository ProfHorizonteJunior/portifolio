import { Link } from "react-router-dom";
import "./Eduardo.css";
import fotoEduardo from "../assets/eduardo.png";

export default function Eduardo() {
  return (
    <div className="perfil">
      <Link to="/" className="voltar">
        ← Voltar para a galeria
      </Link>

      <header className="hero">
        <div className="avatar">
          <img src={fotoEduardo} alt="Foto de Eduardo Lopes da Silva" />
        </div>

        <h1>Eduardo Rudolf</h1>

        <p className="cargo">
          Estudante de Desenvolvimento de Sistemas • TI & Suporte
        </p>

        <p className="tagline">
          Apaixonado por tecnologia, desenvolvimento de software e criação de
          soluções que resolvem problemas reais. Atualmente atuo na área de TI
          e estou construindo projetos para evoluir como desenvolvedor Full
          Stack.
        </p>

        <div className="badges">
          <span className="badge">☕ Java</span>
          <span className="badge">⚛️ React</span>
          <span className="badge">🗄️ MySQL</span>
          <span className="badge">🌱 Spring Boot</span>
          <span className="badge">🐍 Python</span>
          <span className="badge">🔧 Suporte TI</span>
        </div>
      </header>

      <section className="secao">
        <h2>👋 Sobre Mim</h2>

        <p>
          Sou estudante do curso Técnico em Análise e Desenvolvimento de
          Sistemas e trabalho na área de TI e suporte. Tenho grande interesse
          em desenvolvimento web, banco de dados e automação de processos.
        </p>

        <p>
          Atualmente desenvolvo projetos utilizando React, Java, Spring Boot e
          MySQL, buscando transformar ideias em sistemas funcionais e de fácil
          utilização.
        </p>

        <p>
          Meu principal objetivo é evoluir continuamente como desenvolvedor,
          adquirindo experiência prática através de projetos reais e desafios
          que contribuam para meu crescimento profissional.
        </p>
      </section>

      <section className="secao">
        <h2>🎓 Formação Acadêmica</h2>

        <div className="timeline">

          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Ensino Médio</h3>
              <p>3º ano — Em andamento</p>
            </div>
          </div>

          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Técnico em Análise e Desenvolvimento de Sistemas</h3>
              <p>
                Formação voltada para programação, banco de dados,
                desenvolvimento web e engenharia de software.
              </p>
            </div>
          </div>

          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Curso de Inglês — Cebrac</h3>
              <p>
                Desenvolvimento das habilidades de leitura, escrita,
                compreensão auditiva e conversação.
              </p>
            </div>
          </div>

          <div className="item">
            <span className="ponto" />
            <div>
              <h3>Curso de Informática — Cebrac</h3>
              <p>
                Conhecimentos em Word, Excel, PowerPoint, Canva, Google Docs e
                Google Forms.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="secao">
        <h2>🚀 Projetos e Objetivos</h2>

        <p>
          Atualmente estou desenvolvendo sistemas para aprimorar meus
          conhecimentos em React, Java e banco de dados.
        </p>

        <p>
          Entre os projetos em desenvolvimento está um sistema para gestão de
          salva-vidas, focado no registro de ocorrências, controle operacional
          e digitalização de processos.
        </p>
      </section>

      <section className="secao">
        <h2>💡 Interesses</h2>

        <div className="cards-interesse">

          <div className="interesse">
            <span>💻</span>
            <h3>Desenvolvimento Web</h3>
            <p>
              Construção de aplicações modernas utilizando React, Java e banco
              de dados.
            </p>
          </div>

          <div className="interesse">
            <span>⚙️</span>
            <h3>Automação</h3>
            <p>
              Desenvolvimento de soluções que reduzem tarefas repetitivas e
              aumentam a produtividade.
            </p>
          </div>

          <div className="interesse">
            <span>🔧</span>
            <h3>Infraestrutura e Suporte</h3>
            <p>
              Experiência com manutenção, configuração e suporte de sistemas e
              equipamentos.
            </p>
          </div>

          <div className="interesse">
            <span>🚀</span>
            <h3>Projetos Reais</h3>
            <p>
              Aplicar conhecimento técnico na criação de sistemas que geram
              valor para pessoas e organizações.
            </p>
          </div>

        </div>
      </section>

      <footer className="perfil-footer">
        <p>
          Desenvolvido por Eduardo Lopes da Silva • 2026
        </p>
      </footer>
    </div>
  );
}