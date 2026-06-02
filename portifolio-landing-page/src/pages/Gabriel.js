import { Link } from "react-router-dom";
import "./Gabriel.css";
import fotoGabriel from "../assets/Gabriel.jpeg";

export default function Gabriel() {
  return (
    <div className="perfil">
      {/* Barra de terminal fake */}
      <div className="topbar">
        <div className="topbar-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="topbar-title">gabriel@portfolio: ~ — bash</span>
        <Link to="/" className="voltar hackable" data-msg="🚪 Encerrando sessão... C:\\ deletado">
          ← exit
        </Link>
      </div>

      <div className="layout">
        {/* COLUNA ESQUERDA */}
        <aside className="sidebar">
          <div
            className="avatar hackable"
            data-msg="🚨 ACESSO NEGADO: rosto criptografado 🔒"
          >
            <img src={fotoGabriel} alt="Foto de Gabriel" />
          </div>
          <h1
            className="hackable"
            data-msg="💀 SYSTEM HACKED by Gabriel"
          >
            Gabriel
          </h1>
          <p className="cargo">Estudante • Desenvolvedor em formação</p>
          <p className="tagline">Resolvo problemas com tecnologia.</p>

          <div className="badges">
            <span className="badge hackable" data-msg="⚠️ ERRO 404: bug não encontrado">💻 Front-end</span>
            <span className="badge hackable" data-msg="📦 Instalando vírus... 0%">⚛️ React</span>
            <span className="badge hackable" data-msg="🐙 git push --force na sua alma">🌱 Git & GitHub</span>
            <span className="badge hackable" data-msg="🎯 sudo focar --agora">🎯 Foco</span>
          </div>
        </aside>

        {/* COLUNA DIREITA */}
        <main className="conteudo">
          {/* SOBRE MIM */}
          <section className="secao hackable" data-msg="🕵️ Rastreando seu IP...">
            <h2>👋 Sobre mim</h2>
            <p>
              Olá! Eu sou o <strong>Gabriel</strong>, estudante de tecnologia, e
              resolvo problemas com tecnologia. Estou em formação como desenvolvedor web.
            </p>
          </section>

          {/* FORMAÇÃO */}
          <section className="secao hackable" data-msg="⏳ Carregando memórias... 99% travado">
            <h2>🎓 Trajetória</h2>
            <div className="timeline">
              <div className="item">
                <span className="ponto" />
                <div>
                  <h3>Curso de Tecnologia</h3>
                  <p>Construindo uma base sólida em programação.</p>
                </div>
              </div>
              <div className="item">
                <span className="ponto" />
                <div>
                  <h3>Primeiros projetos com React</h3>
                  <p>Meus primeiros projetos com React foram os de uma hamburgueria e uma agropecuária.</p>
                </div>
              </div>
              <div className="item">
                <span className="ponto" />
                <div>
                  <h3>Trabalho em equipe com Git</h3>
                  <p>Aprendendo o fluxo profissional de branches e Pull Requests. 🌳</p>
                </div>
              </div>
            </div>
          </section>

          {/* INTERESSES */}
          <section className="secao">
            <h2>💡 Paixões & Interesses</h2>
            <div className="cards-interesse">
              <div className="interesse hackable" data-msg="💉 Injetando café na veia...">
                <span>💻</span>
                <h3>Desenvolvimento Web</h3>
                <p>Criando interfaces bonitas e funcionais.</p>
              </div>
              <div className="interesse hackable" data-msg="🎲 Rolagem crítica detectada! 20 natural">
                <span>🎮</span>
                <h3>Tecnologia & Games</h3>
                <p>Gosto de jogar RPGs de mesa.</p>
              </div>
              <div className="interesse hackable" data-msg="🚀 Lançando foguete... abortar? [S/N]">
                <span>🚀</span>
                <h3>Frase de efeito</h3>
                <p>O céu é o limite, e o horizonte também.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* RODAPÉ */}
      <footer className="perfil-footer hackable" data-msg="❤️ Feito com amor">
        <p>Feito com ódio por Gabriel</p>
      </footer>
    </div>
  );
}
