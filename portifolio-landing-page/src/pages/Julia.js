import { useState, useEffect, useRef } from "react";
import "./Julia.css";

// ===== DATA =====
const SKILLS = [
  { icon: "☕", name: "Java", level: 80, desc: "POO, estruturas de dados, lógica sólida" },
  { icon: "⚡", name: "JavaScript", level: 75, desc: "DOM, ES6+, lógica client-side" },
  { icon: "⚛️", name: "React", level: 70, desc: "Components, hooks, interfaces modernas" },
  { icon: "🍃", name: "Spring Boot", level: 65, desc: "APIs REST, back-end robusto" },
  { icon: "🗄️", name: "Banco de Dados", level: 72, desc: "SQL, modelagem, queries eficientes" },
  { icon: "∞", name: "Sempre aprendendo", level: 100, desc: "A evolução nunca para", always: true },
];

const TICKER_ITEMS = ["java", "javascript", "react", "spring boot", "banco de dados"];

// ===== HOOKS =====
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return { pos };
}

function useGlitch() {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const trigger = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 400);
      setTimeout(trigger, Math.random() * 4000 + 5000);
    };
    const t = setTimeout(trigger, 5000);
    return () => clearTimeout(t);
  }, []);
  return glitch;
}

// ===== COMPONENTS =====

function Cursor() {
  const { pos } = useCursor();
  return <div className="cursor" style={{ left: pos.x, top: pos.y }} />;
}

function Noise() {
  return <div className="noise" aria-hidden="true" />;
}

function Nav() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav">
      <span className="nav-logo">jl.dev</span>
      <ul className="nav-links">
        {["sobre", "skills", "contato"].map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? "active" : ""}>{id}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="scroll-ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const glitch = useGlitch();
  const decoRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!decoRef.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      decoRef.current.style.transform = `translate(${dx * 12}px, ${dy * 12}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero" id="hero">
      <ParallaxBg />
      <Nav />
      <div className="hero-content">
        <div className="hero-tag animate-in" style={{ "--delay": "0.1s" }}>estudante @ senai</div>
        <h1 className={`hero-title animate-in${glitch ? " glitch" : ""}`} style={{ "--delay": "0.2s" }}>
          <span className="line">Julia</span>
          <span className="line accent">Dev.</span>
        </h1>
        <p className="hero-sub animate-in" style={{ "--delay": "0.4s" }}>
          Desenvolvimento Técnico · Criatividade · Código com alma
        </p>
        <a href="#sobre" className="hero-cta animate-in" style={{ "--delay": "0.6s" }}>
          <span>descobrir</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>

      <div className="hero-deco" ref={decoRef}>
        <div className="deco-circle" />
        <div className="deco-line" />
      </div>

      <Ticker />
    </section>
  );
}

function ParallaxBg() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.3}px))`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="hero-bg-text" ref={ref} aria-hidden="true">JULIA</div>;
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <div className="section-label">01 — sobre mim</div>
        <div className="sobre-grid">
          <div className="sobre-left">
            <Reveal>
              <div className="portrait-frame">
                <div className="portrait-inner">
                  <div className="portrait-initials">JL</div>
                  <div className="portrait-glow" />
                </div>
                <span className="portrait-tag">senai · técnico em dev</span>
              </div>
            </Reveal>
          </div>
          <div className="sobre-right">
            <Reveal delay={0}>
              <h2 className="section-title">Olá, eu sou<br /><em>Julia</em></h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="sobre-text">
                Estudante de desenvolvimento técnico no SENAI, apaixonada por criar soluções que unem{" "}
                <strong>lógica e estética</strong>. Acredito que bom código é aquele que funciona{" "}
                <em>e</em> que impressiona.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="sobre-text">
                Pessoa criativa por natureza — gosto de explorar novas formas de resolver problemas
                e nunca paro de aprender. Em constante evolução, sempre buscando o próximo nível.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="sobre-badges">
                {["☕ café + código", "🎨 design matters", "🚀 em evolução"].map((b) => (
                  <span key={b} className="badge">{b}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const [ref, visible] = useReveal();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setAnimated(true), index * 120);
      return () => clearTimeout(t);
    }
  }, [visible, index]);

  return (
    <div
      ref={ref}
      className={`skill-card reveal ${visible ? "visible" : ""} ${skill.always ? "always" : ""}`}
    >
      <span className="skill-icon">{skill.icon}</span>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: animated ? `${skill.level}%` : "0%" }}
        />
      </div>
      <div className="skill-desc">{skill.desc}</div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-label">02 — tecnologias</div>
        <Reveal>
          <h2 className="section-title center">Stack &amp; Skills</h2>
        </Reveal>
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const links = [
    { href: "mailto:julia@email.com", icon: "✉", label: "email", outline: false },
    { href: "https://github.com/", icon: "⌥", label: "github", outline: true },
    { href: "https://linkedin.com/", icon: "in", label: "linkedin", outline: true },
  ];
  return (
    <section className="contato" id="contato">
      <div className="container">
        <div className="section-label">03 — contato</div>
        <div className="contato-inner">
          <Reveal delay={0}>
            <h2 className="contato-title">Vamos<br /><em>conversar?</em></h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="contato-sub">Aberta a colaborações, projetos e novas conexões.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="contato-links">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.outline ? "_blank" : undefined}
                  rel={l.outline ? "noreferrer" : undefined}
                  className={`contato-btn${l.outline ? " outline" : ""}`}
                >
                  <span>{l.icon}</span> {l.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <footer className="footer">
        <span>Julia © 2026</span>
        <span>feito com ♥ e muito café</span>
      </footer>
    </section>
  );
}

// ===== APP =====
export default function App() {
  return (
    <>
      <Cursor />
      <Noise />
      <Hero />
      <Sobre />
      <Skills />
      <Contato />
    </>
  );
}
