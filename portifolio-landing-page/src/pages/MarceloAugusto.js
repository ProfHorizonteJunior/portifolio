import { Link } from "react-router-dom";
import "./MarceloAugusto.css";

export default function MarceloAugusto() {
    return (
        <div className="perfil">
            {/* Botão voltar */}
            <Link to="/" className="voltar">← Voltar para a galeria</Link>

            {/* HERO */}
            <header className="hero">

                <h1>Marcelo Augusto</h1>
                <p className="cargo">Aluno • Estudante do SENAI</p>
                <p className="tagline">
                    apenas um estudante do SENAI, buscando aprender e crescer na área de tecnologia. Estou animado para compartilhar minha jornada e projetos com vocês! 🚀
                </p>

                <div className="badges">
                    <span className="badge">🎓 Estudante</span>
                    <span className="badge">🔧 Hardware</span>
                    <span className="badge">💻 Programação</span>
                </div>
            </header>

            {/* SOBRE MIM */}
            <section className="secao">
                <h2>👋 Sobre mim</h2>
                <p>
                    Sou <strong>aluno</strong> do SENAI, desde pequeno curto tecnologia,
                    e adentrando a este curso aprendi coisas novas e estou prontamente animado pra o futuro
                </p>
            </section>



            {/* FORMAÇÃO */}
            <section className="secao">
                <h2>🎓 Formação Acadêmica</h2>
                <div className="timeline">
                    <div className="item">
                    </div>
                    <div className="item">
                        <span className="ponto" />
                        <div>
                            <h3>Formado em Informatica Profissional</h3>
                            <p>fiz um curso de informatica, a uma cota, pique 2 ou 3 anos, tenho certificado e em tese eu sei mexer com planilhas e montar pc


                            </p>

                            <div className="item">
                                <span className="ponto" />
                                <div>
                                    <h3>Cursando </h3>
                                    <p>Desenvolvimento de sistemas no SENAI.</p>
                                </div>
                            </div>

                        </div>





                    </div>
                </div>
            </section>

            {/* INTERESSES */}
            <section className="secao">
                <h2>💡 Paixões & Interesses</h2>
                <div className="cards-interesse">
                    <div className="interesse">
                        <span>💪</span>
                        <h3>Estudar no SENAI</h3>
                        <p>SENAI é maneiro, sou agradecido por estudar aq aqui.</p>
                    </div>
                    <div className="interesse">
                        <span>🔧</span>
                        <h3>Projetos com Hardware</h3>
                        <p>Curto montar pc e brincar com Arduino.</p>
                    </div>
                    <div className="interesse">
                        <span>🚀</span>
                        <h3>aprendizado das Tecnologia</h3>
                        <p>acho tega aprender a programar.</p>
                    </div>
                </div>
            </section>

            {/* RODAPÉ */}
            <footer className="perfil-footer">
                <p>Feito com 💜 por Marcelo Augusto</p>
            </footer>
        </div>
    );
}