import { useEffect, useState } from "react";
import "./App.css";
import portrait from "./assets/lee-shaw-kiat-portrait.jpg";

const navigation = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Projects", page: "projects" },
  { label: "Skills", page: "skills" },
  { label: "Contact", page: "contact" },
];

const experienceItems = [
  {
    company: "LionsBot International, Griffin Labs",
    role: "Artificial Intelligence Engineering Intern - Head of Data Collection and Teleoperation",
    period: "Jan 2026 - Present",
    bullets: [
      "Built and deployed an end-to-end robotics inference pipeline, integrating dual-arm robotic systems with cloud-based Vision-Language-Action models for real-time decision-making.",
      "Evaluated model performance across multiple training checkpoints, identifying grasp instability, over-commitment, and policy collapse, and improved model performance by 50% within the first week.",
      "Developed a Python-based diagnostic tool to identify dataset episodes responsible for training loss and support faster model iteration.",
    ],
  },
  {
    company: "CortexAI",
    role: "Artificial Intelligence Engineering Intern - Lead Robot Operator and Coordinator",
    period: "Sep 2025 - Jan 2026",
    bullets: [
      "Led and trained a 14-member operator team for robotics data collection, recruiting 6 members and maintaining consistent performance and data quality for VLA model training.",
      "Coordinated robotics data collection operations, trained operators on egocentric capture and robotic arms, and improved data quality standards for VLA model development by 200%.",
      "Designed and set up more than 50 new data collection environments, manipulation tasks, and datasets to expand the quantity and diversity of robotics training data.",
    ],
  },
];

const projectItems = [
  {
    title: "Surve",
    description:
      "Startup survey platform created to help small businesses and early-stage teams collect and distill consumer insight quickly across larger audiences.",
    tools: ["Startup strategy", "Consumer insight", "Product design", "Go-to-market"],
    impact: [
      "Co-founded the venture and shaped the product around rapid, practical market feedback for startups and small businesses.",
      "Positioned the platform to simplify survey distribution and insight distillation across larger respondent groups.",
      "Secured S$2,000 in funding from SUTD's Baby Shark Fund to support development.",
    ],
  },
  {
    title: "SwipeRx",
    description:
      "Applied analytics work focused on turning inventory and transaction data into actionable business recommendations.",
    tools: ["SQL", "Forecasting", "Regression", "Inventory analytics"],
    impact: [
      "Applied SQL, Holt-Winters forecasting, rolling averages, ABC analysis, backpropagation, and regression models to large datasets.",
      "Translated raw inventory and transaction patterns into practical recommendations for decision-making and stock planning.",
      "Used forecasting and analytical modelling to support clearer operational actions from business data.",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "SQL", "R", "Julia"],
  },
  {
    title: "Quantitative Analysis",
    items: ["Pandas", "NumPy", "Matplotlib", "Regression Modelling", "Time-Series Forecasting"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "Visual Studio Code", "Vercel", "Xcode", "Ubuntu"],
  },
  {
    title: "AI Tools",
    items: ["Hugging Face", "Lerobot", "TensorFlow", "OpenPI", "Pi0.5", "Weights & Biases"],
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "kevinleeshawkiat@gmail.com",
    href: "mailto:kevinleeshawkiat@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lee-shaw-kiat-kevin",
    href: "https://www.linkedin.com/in/lee-shaw-kiat-kevin/",
  },
  {
    label: "Portfolio",
    value: "This portfolio home",
    href: "#home",
  },
];

const validPages = new Set(navigation.map((item) => item.page));

function getActivePageFromHash() {
  const page = window.location.hash.replace("#", "") || "home";
  return validPages.has(page) ? page : "home";
}

function AboutSection() {
  return (
    <section className="section panel" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Finance, analytics, and emerging technology with a builder mindset</h2>
      </div>

      <div className="about-grid">
        <p>
          I am currently pursuing a Bachelor of Engineering in Engineering Systems and Design at
          the Singapore University of Technology and Design, where I am building a foundation in
          probability, optimization, analytics, and AI.
        </p>
        <p>
          I am especially interested in finance, analytics, and emerging technologies, and I try to
          approach problems with originality and discipline. The way I work is grounded in humility,
          adaptability, and a genuine eagerness to keep learning.
        </p>
      </div>

      <div className="about-highlights">
        <article className="panel about-card">
          <p className="card-label">Education</p>
          <h3>Singapore University of Technology and Design</h3>
          <p className="card-meta">Sep 2024 - Present</p>
          <p className="project-description">
            Bachelor of Engineering in Engineering Systems and Design
          </p>
          <div className="tag-row">
            <span className="tag">Probability &amp; Statistics</span>
            <span className="tag">Optimization</span>
            <span className="tag">Data &amp; Business Analytics</span>
            <span className="tag">AI &amp; Digital Humanities</span>
          </div>
        </article>

        <article className="panel about-card">
          <p className="card-label">Additional Information</p>
          <h3>Availability and background</h3>
          <div className="tag-row">
            <span className="tag">Singaporean</span>
            <span className="tag">English</span>
            <span className="tag">Mandarin</span>
            <span className="tag">Immediate availability</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Recent experience in robotics, data collection, and applied AI</h2>
      </div>

      <div className="card-grid">
        {experienceItems.map((item) => (
          <article className="panel card" key={item.company}>
            <p className="card-label">{item.company}</p>
            <h3>{item.role}</h3>
            <p className="card-meta">{item.period}</p>
            <ul className="detail-list">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Venture and analytics work outside the classroom</h2>
      </div>

      <div className="card-grid projects-grid">
        {projectItems.map((project) => (
          <article className="panel card project-card" key={project.title}>
            <p className="card-label">{project.title}</p>
            <p className="project-description">{project.description}</p>
            <ul className="detail-list">
              {project.impact.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="tag-row">
              {project.tools.map((tool) => (
                <span className="tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technical skills across data, forecasting, and AI tooling</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="panel skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section panel contact-panel" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Open to finance, analytics, business, and AI-related opportunities</h2>
      </div>

      <p className="contact-copy">
        If you would like to connect about internships, projects, or future opportunities, feel
        free to reach out through the channels below.
      </p>

      <div className="contact-grid">
        {contactLinks.map((item) => (
          <a
            className="contact-card"
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activePage, setActivePage] = useState(getActivePageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getActivePageFromHash());
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigateToPage = (page) => {
    window.location.hash = page;
  };

  const renderFullPage = () => {
    switch (activePage) {
      case "about":
        return <AboutSection />;
      case "experience":
        return (
          <section className="page-panel panel">
            <ExperienceSection />
          </section>
        );
      case "projects":
        return (
          <section className="page-panel panel">
            <ProjectsSection />
          </section>
        );
      case "skills":
        return (
          <section className="page-panel panel">
            <SkillsSection />
          </section>
        );
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />

      <header className="topbar">
        <a
          className="brand"
          href="#home"
          aria-label="Lee Shaw Kiat home"
          onClick={(event) => {
            event.preventDefault();
            navigateToPage("home");
          }}
        >
          <span className="brand-mark">LSK</span>
          <span className="brand-text">Lee Shaw Kiat</span>
        </a>

        <nav className="topnav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.page}
              href={`#${item.page}`}
              className={activePage === item.page ? "is-active" : undefined}
              onClick={(event) => {
                event.preventDefault();
                navigateToPage(item.page);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="/Lee-Shaw-Kiat-Resume.pdf" target="_blank" rel="noreferrer">
          View Resume
        </a>
      </header>

      {activePage === "home" ? (
        <main className="portfolio">
          <section className="hero panel" id="home">
            <div className="hero-copy">
              <p className="eyebrow">Personal Portfolio</p>
              <h1>Lee Shaw Kiat</h1>
              <p className="hero-subtitle">
                Engineering Systems and Design Undergraduate | Finance, Analytics, and Emerging Technologies
              </p>
              <p className="hero-intro">
                I am a SUTD undergraduate with a strong interest in finance, analytics, and
                emerging technologies. I enjoy combining structured thinking, technical execution,
                and business awareness to turn data and systems into practical outcomes.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="/Lee-Shaw-Kiat-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
                <a
                  className="button button-secondary"
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    navigateToPage("contact");
                  }}
                >
                  Contact Me
                </a>
              </div>

              <div className="hero-pills" aria-label="Focus areas">
                <span>Finance and analytics</span>
                <span>AI and robotics</span>
                <span>Business problem solving</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-frame">
                <div className="portrait-glow" aria-hidden="true" />
                <img src={portrait} alt="Lee Shaw Kiat portrait" className="portrait-image" />
              </div>
            </div>
          </section>

          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      ) : (
        <main className="page-view">
          <button type="button" className="back-link" onClick={() => navigateToPage("home")}>
            <span aria-hidden="true">&larr;</span>
            <span>Back to Home</span>
          </button>

          {renderFullPage()}
        </main>
      )}
    </div>
  );
}

export default App;
