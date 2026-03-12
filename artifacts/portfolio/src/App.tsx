import { useEffect, useRef, useState } from "react";
import "./index.css";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "Graphic Design", level: 95, icon: "🎨" },
  { name: "UI/UX Design", level: 90, icon: "✨" },
  { name: "React / Next.js", level: 85, icon: "⚛️" },
  { name: "Node.js / Express", level: 80, icon: "🔧" },
  { name: "TypeScript", level: 78, icon: "💻" },
  { name: "Adobe Suite", level: 92, icon: "🖌️" },
  { name: "CSS / Tailwind", level: 88, icon: "🎭" },
  { name: "Database / SQL", level: 75, icon: "🗄️" },
];

const PROJECTS = [
  {
    title: "Brand Identity System",
    description: "Complete brand identity design including logo, typography, color palette, and style guide for a tech startup.",
    tags: ["Branding", "Design", "Figma"],
    color: "#7c3aed",
    icon: "🎨",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce web app with React frontend, Node.js backend, and Stripe payment integration.",
    tags: ["React", "Node.js", "Stripe"],
    color: "#2563eb",
    icon: "🛍️",
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard with interactive charts, dark mode, and responsive design.",
    tags: ["TypeScript", "Charts", "API"],
    color: "#06b6d4",
    icon: "📊",
  },
  {
    title: "DiorNode — Premium Hosting",
    description: "High-performance hosting solutions including Minecraft server hosting, Discord bot hosting, and VPS hosting — built for reliability and speed.",
    tags: ["Minecraft", "Discord Bots", "VPS"],
    color: "#7c3aed",
    icon: "🖥️",
  },
  {
    title: "Portfolio Website",
    description: "Custom portfolio website with 3D animations, glassmorphism design, and GSAP scroll effects.",
    tags: ["HTML/CSS", "JavaScript", "GSAP"],
    color: "#2563eb",
    icon: "🌐",
  },
  {
    title: "Poster Design Collection",
    description: "Series of event posters and promotional materials using bold typography and vibrant color compositions.",
    tags: ["Photoshop", "Illustrator", "Print"],
    color: "#06b6d4",
    icon: "🖼️",
  },
];

const THUMBNAILS = [
  { src: "/images/thumb1.jpg", label: "Design Work 1" },
  { src: "/images/thumb2.jpg", label: "Design Work 2" },
  { src: "/images/thumb3.jpg", label: "Design Work 3" },
  { src: "/images/thumb4.jpg", label: "Design Work 4" },
  { src: "/images/thumb5.jpg", label: "Design Work 5" },
];

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 8,
    color: i % 3 === 0 ? "#7c3aed" : i % 3 === 1 ? "#2563eb" : "#06b6d4",
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10, 12, 18, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 16,
              color: "white",
              boxShadow: "0 4px 15px rgba(124, 58, 237, 0.4)",
              transition: "transform 0.3s ease",
            }}
            className="group-hover:scale-110"
          >
            D
          </div>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
            Dior<span className="gradient-text-purple">Dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
            boxShadow: "0 4px 15px rgba(124, 58, 237, 0.4)",
          }}
        >
          Hire Me ✨
        </a>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-3"
          style={{ background: "rgba(15, 17, 25, 0.95)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link py-2 px-3 rounded-xl hover:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const [typed, setTyped] = useState("");
  const words = ["Graphic Designer", "Full Stack Developer", "Creative Freelancer", "UI/UX Enthusiast"];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const speed = deleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setTyped(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIdx > 0) {
        setTyped(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-pattern overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-float-slow"
          style={{
            position: "absolute",
            top: "15%",
            left: "5%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "5%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="animate-float"
          style={{
            position: "absolute",
            top: "50%",
            right: "15%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Rotating ring */}
        <div
          className="animate-rotate-slow"
          style={{
            position: "absolute",
            top: "10%",
            right: "8%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "1px solid rgba(124,58,237,0.2)",
          }}
        />
        <div
          className="animate-rotate-slow"
          style={{
            position: "absolute",
            top: "10%",
            right: "8%",
            width: 200,
            height: 200,
            borderRadius: "50%",
            border: "1px solid rgba(6,182,212,0.15)",
            transform: "rotate(45deg)",
            animationDirection: "reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 pt-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  boxShadow: "0 0 8px #22c55e",
                  animation: "glow-pulse 2s ease-in-out infinite",
                }}
              />
              Available for work
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Dior</span>
            </h1>

            <div
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "1.5rem",
                minHeight: "2.5rem",
              }}
            >
              <span style={{ color: "#06b6d4" }}>{typed}</span>
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1.2em",
                  background: "#7c3aed",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.5)",
                maxWidth: 520,
                marginBottom: "2.5rem",
                lineHeight: 1.8,
              }}
            >
              18-year-old freelancer crafting stunning visuals and powerful digital experiences. 
              I blend creative design with cutting-edge development to bring ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  boxShadow: "0 8px 25px rgba(124,58,237,0.4)",
                }}
              >
                View My Work 🚀
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Let's Connect
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start">
              {[
                { num: "50+", label: "Projects Done" },
                { num: "30+", label: "Happy Clients" },
                { num: "2+", label: "Years Exp." },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="gradient-text"
                    style={{ fontSize: "1.8rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {stat.num}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="animate-float" style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: -3,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4, #7c3aed)",
                  backgroundSize: "300% 300%",
                  animation: "gradient-shift 3s ease infinite",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4)",
                  opacity: 0.25,
                  filter: "blur(15px)",
                  zIndex: -1,
                  animation: "gradient-shift 3s ease infinite",
                  backgroundSize: "300% 300%",
                }}
              />
              <img
                src="/images/diorimage.jpg"
                alt="Dior"
                style={{
                  width: "clamp(240px, 30vw, 340px)",
                  height: "clamp(240px, 30vw, 340px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                  border: "4px solid rgba(10, 12, 18, 0.8)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2"
        style={{
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "float-slow 2s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
          SCROLL
        </span>
        <div
          style={{
            width: 24,
            height: 40,
            borderRadius: 12,
            border: "2px solid rgba(255,255,255,0.15)",
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              borderRadius: 2,
              background: "linear-gradient(to bottom, #7c3aed, #06b6d4)",
              animation: "float-slow 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function AboutSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-section ${visible ? "visible" : ""} py-28 relative`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-shrink-0 relative">
            <div
              style={{
                position: "relative",
                width: "clamp(260px, 28vw, 360px)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 24,
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3))",
                  transform: "rotate(6deg) scale(1.02)",
                  zIndex: 0,
                }}
              />
              <img
                src="/images/diorimage.jpg"
                alt="Dior"
                style={{
                  width: "100%",
                  aspectRatio: "1",
                  objectFit: "cover",
                  borderRadius: 24,
                  position: "relative",
                  zIndex: 1,
                  border: "2px solid rgba(255,255,255,0.08)",
                }}
              />
              <div
                className="glass"
                style={{
                  position: "absolute",
                  bottom: -20,
                  right: -20,
                  padding: "16px 24px",
                  borderRadius: 16,
                  zIndex: 2,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#a78bfa" }}>18</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>Years Old</div>
              </div>
              <div
                className="glass"
                style={{
                  position: "absolute",
                  top: -20,
                  left: -20,
                  padding: "14px 20px",
                  borderRadius: 16,
                  zIndex: 2,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ fontSize: "1.4rem" }}>⚡</div>
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Freelancer</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: 999,
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "1.2rem",
                letterSpacing: "0.08em",
              }}
            >
              ABOUT ME
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.2rem",
              }}
            >
              Turning Ideas Into{" "}
              <span className="gradient-text">Digital Reality</span>
            </h2>

            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "1.05rem" }}>
              I'm Dior — an 18-year-old creative freelancer passionate about where design meets code. 
              As a Graphic Designer and Full Stack Developer, I craft experiences that are both visually 
              stunning and technically powerful.
            </p>

            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, marginBottom: "2rem", fontSize: "1rem" }}>
              From brand identities to full-scale web applications, I bring a unique perspective that bridges 
              the gap between artistic vision and engineering precision. Every project is an opportunity to 
              push boundaries and create something extraordinary.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Branding", "Web Dev", "UI/UX", "Motion", "3D Design", "Freelancing"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.7)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = "rgba(124,58,237,0.2)";
                    (e.target as HTMLElement).style.borderColor = "rgba(124,58,237,0.4)";
                    (e.target as HTMLElement).style.color = "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.target as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                boxShadow: "0 8px 25px rgba(124,58,237,0.35)",
              }}
            >
              Work With Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-section ${visible ? "visible" : ""} py-28 relative`}
      style={{ background: "rgba(255,255,255,0.01)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#a78bfa",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1rem",
              letterSpacing: "0.08em",
            }}
          >
            EXPERTISE
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto" }}>
            Mastering the tools that turn concepts into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="glass rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
              style={{
                animationDelay: `${i * 0.1}s`,
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: "1.4rem" }}>{skill.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{skill.name}</span>
                </div>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#a78bfa",
                  }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                style={{
                  height: 6,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.06)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="skill-bar-fill"
                  style={{ width: visible ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-section ${visible ? "visible" : ""} py-28`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(6,182,212,0.12)",
              border: "1px solid rgba(6,182,212,0.25)",
              color: "#22d3ee",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1rem",
              letterSpacing: "0.08em",
            }}
          >
            PORTFOLIO
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto" }}>
            A showcase of work that speaks louder than words
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="glass card-3d rounded-2xl p-6 group cursor-pointer"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                animationDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${project.color}40`;
                el.style.boxShadow = `0 20px 50px ${project.color}20`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
                  border: `1px solid ${project.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "1.2rem",
                  transition: "all 0.3s ease",
                }}
                className="group-hover:scale-110"
              >
                {project.icon}
              </div>

              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  marginBottom: "0.6rem",
                  transition: "color 0.3s ease",
                }}
                className="group-hover:text-purple-300"
              >
                {project.title}
              </h3>

              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}25`,
                      fontSize: "0.75rem",
                      color: `${project.color}`,
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const { ref, visible } = useFadeIn();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        ref={ref as React.RefObject<HTMLElement>}
        className={`fade-section ${visible ? "visible" : ""} py-28`}
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: 999,
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa",
                fontSize: "0.8rem",
                fontWeight: 600,
                marginBottom: "1rem",
                letterSpacing: "0.08em",
              }}
            >
              GALLERY
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Thumbnail{" "}
              <span className="gradient-text">Gallery</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: 480, margin: "0 auto" }}>
              A visual journey through creative work — click to expand
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {THUMBNAILS.map((thumb, i) => (
              <div
                key={i}
                className="thumb-card"
                style={{
                  aspectRatio: "16 / 9",
                  background: "#0a0c12",
                  animationDelay: `${i * 0.1}s`,
                }}
                onClick={() => setLightbox(thumb.src)}
              >
                <img src={thumb.src} alt={thumb.label} />
                <div className="overlay-content">
                  <div
                    style={{
                      padding: "8px 14px",
                      borderRadius: 8,
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(10px)",
                      display: "inline-block",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {thumb.label}
                  </div>
                  <div style={{ marginTop: 8, fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
                    Click to view ↗
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "zoom-out",
          }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Full size"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 16,
              objectFit: "contain",
              boxShadow: "0 0 60px rgba(124,58,237,0.3)",
              animation: "scale-in 0.3s ease",
            }}
          />
          <button
            style={{
              position: "fixed",
              top: 20,
              right: 20,
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

function ContactSection() {
  const { ref, visible } = useFadeIn();
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://discord.com/users/1304041117980823565", "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-section ${visible ? "visible" : ""} py-28 relative`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "#a78bfa",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1rem",
              letterSpacing: "0.08em",
            }}
          >
            GET IN TOUCH
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Let's Work{" "}
            <span className="gradient-text">Together</span> 🚀
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "0 auto", fontSize: "1.05rem" }}>
            Have a project in mind? Let's create something amazing together. 
            Reach out on Discord or drop a message below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Discord Card */}
          <div
            className="glass-strong rounded-2xl p-8 flex-1 flex flex-col items-center text-center justify-center"
            style={{ minHeight: 280 }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: 20,
                background: "rgba(88,101,242,0.2)",
                border: "1px solid rgba(88,101,242,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                marginBottom: "1.5rem",
                boxShadow: "0 8px 25px rgba(88,101,242,0.3)",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#5865F2">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.6rem" }}>
              Join Me on Discord
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1.8rem", fontSize: "0.9rem", lineHeight: 1.7 }}>
              The fastest way to reach me. Let's chat about your next project directly on Discord.
            </p>

            <a
              href="https://discord.com/users/1304041117980823565"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              Message on Discord
            </a>
          </div>

          {/* Message Form */}
          <div className="glass-strong rounded-2xl p-8 flex-1">
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              Send a Quick Message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>
                  Your Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, #7c3aed, #2563eb)",
                  boxShadow: "0 8px 25px rgba(124,58,237,0.35)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                {sent ? "✓ Redirecting to Discord..." : "Send Message →"}
              </button>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                Clicking Send will open my Discord profile
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div style={{ fontWeight: 700, fontSize: "1rem" }}>
          Dior<span className="gradient-text-purple">Dev</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, fontSize: "0.85rem", marginLeft: 8 }}>
            — diordev.tech
          </span>
        </div>
        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
          © 2025 Dior. Crafted with passion & code ✨
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://discord.com/users/1304041117980823565"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "rgba(88,101,242,0.15)",
              border: "1px solid rgba(88,101,242,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              color: "#5865F2",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(88,101,242,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(88,101,242,0.15)";
              (e.currentTarget as HTMLElement).style.transform = "none";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}
