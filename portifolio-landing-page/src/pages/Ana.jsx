import { Link } from "react-router-dom";
import "./Ana.css";
import { useState, useEffect } from "react";
import julius from "../assets/foto.webp";

export default function Ana() {

    const [mostrarProjetos, setMostrarProjetos] = useState(false);
    const [foto, setFoto] = useState(false);

    useEffect(() => {
        const restaurarCursor = () => {
            document.body.style.cursor = "auto";
        };
        window.addEventListener("focus", restaurarCursor);
        return () => window.removeEventListener("focus", restaurarCursor);
    }, []);

    return (
        <div className="perfil">
            <Link to="/" className="voltar">← Voltar </Link>

            <header className="hero">
                <div className="avatar">
                    <span className="avatar-emoji">=)</span>
                </div>

                <h1>Ana</h1>
                <p className="cargo">Desenvolvedora se desenvolvendo</p>
                <p className="tagline">
                    Transformando ideias em interfaces e aprendendo algo novo todo dia.
                </p>

                <div className="badges">
                    <span
                        className="badge badge-btn"
                        onClick={() => setMostrarProjetos(!mostrarProjetos)}
                    >
                        {mostrarProjetos ? "✖ Fechar projetos" : "Alguns trabalhos feitos"}
                    </span>
                </div>
            </header>

            {mostrarProjetos && (
                <section className="secao">
                    <div className="cards-interesse">
                        <a href="https://pointerpointer.com/"
                            target="_blank" rel="noopener noreferrer"
                            className="interesse interesse-link">
                            <span>🌐</span>
                            <h3>Não clique aqui</h3>
                            <p></p>
                        </a>
                        <a href="https://mrdoob.com/projects/chromeexperiments/google-gravity/"
                            target="_blank" rel="noopener noreferrer"
                            className="interesse interesse-link">
                            <span>🌐</span>
                            <h3>Não clique aqui</h3>
                            <p></p>
                        </a>
                        <div className="interesse interesse-link" onClick={() => setFoto(!foto)}>
                            {foto ? (
                                <img
                                    src={julius}
                                    alt="foto"
                                    style={{ width: "100%", borderRadius: "12px" }}
                                />
                            ) : (
                                <>
                                    <span>🌐</span>
                                    <h3>Não clique aqui</h3>
                                    <p></p>
                                </>
                            )}
                        </div>
                        <a href="https://macek.github.io/google_pacman/"
                            target="_blank" rel="noopener noreferrer"
                            className="interesse interesse-link">
                            <span>🌐</span>
                            <h3>Não clique aqui</h3>
                            <p></p>
                        </a>
                    </div>
                </section>
            )}
        </div>
    );
}