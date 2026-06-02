import { Link } from "react-router-dom";
import "./Alisson.css";
import fotoAlisson from "../assets/alisson.jpg";

export default function Alisson() {
    return (
        <div className="perfil">
            {/* Botão voltar */}
            <Link to="/" className="voltar">← Voltar para a galeria</Link>

            {/* HERO */}
            <header className="hero">
                <div className="avatar">
                    <img src={fotoAlisson} alt="Foto de Alisson Fagundes" />
                </div>
                <h1>Alisson Fagundes</h1>
                <p className="cargo">Estudante • Dev em ascenção • Gamer nas horas vagas</p>
                <p className="tagline">
                    Em constante evolução. ⚡
                </p>

                <div className="badges">
                    <span className="badge">💻 FullStack</span>
                    <span className="badge">🐙 GitHub</span>
                    <span className="badge">🗄️ MySQL</span>
                    <span className="badge">📚 Estudante</span>
                </div>
            </header>

            {/* SOBRE MIM */}
            <section className="secao">
                <h2>👋 Sobre mim</h2>
                <p>
                    Sou <strong>estudante</strong> apaixonado por tecnologia em geral
                    e meu atual objetivo é me tornar um dos melhores devs de todos os tempos,
                    me acompanhe para ver isso se tornar realidade de perto.
                </p>
            </section>

            {/* FORMAÇÃO */}
            <section className="secao">
                <h2>🎓 Formação Acadêmica</h2>
                <div className="timeline">
                    <div className="item">
                        <span className="ponto" />
                        <div>
                            <h3>Cursando Desenvolvimento de Sistemas.</h3>
                            <p>Curso profissionalizante no SENAI.</p>
                        </div>
                    </div>
                    <div className="item">
                        <span className="ponto" />
                        <div>
                            <h3>Excelente conhecimento em Hardware.</h3>
                            <p>Autodidata no assunto Hardware de computadores e videogames.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERESSES */}
            <section className="secao">
                <h2>💡 Paixões & Interesses</h2>
                <div className="cards-interesse">
                    <div className="interesse">
                        <span>🎮</span>
                        <h3>Videogames</h3>
                        <p>Explorando mundos virtuais, narrativas interativas e game design.</p>
                    </div>
                    <div className="interesse">
                        <span>💻</span>
                        <h3>Desenvolvimento FullStack</h3>
                        <p>Do front-end ao back-end, criando soluções completas e integradas.</p>
                    </div>
                    <div className="interesse">
                        <span>🐙</span>
                        <h3>Versionamento com GitHub</h3>
                        <p>Colaboração, controle de versão e open source na prática.</p>
                    </div>
                </div>
            </section>

            {/* RODAPÉ */}
            <footer className="perfil-footer">
                <p>Feito com 💜 por Alisson Fagundes</p>
            </footer>
        </div>
    );
}