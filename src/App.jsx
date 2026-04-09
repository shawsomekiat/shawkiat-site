import { useEffect, useState } from "react";
import "./App.css";
import portrait from "./assets/lee-shaw-kiat-portrait.jpg";

const navigation = [
  { label: "Home", page: "home" },
  { label: "Summary", page: "about" },
  { label: "Experience", page: "experience" },
  { label: "Leadership", page: "projects" },
  { label: "Skills", page: "skills" },
  { label: "Contact", page: "contact" },
];

const experienceItems = [
  {
    company: "LionsBot International, Griffin Labs",
    role: "Artificial Intelligence Engineering Intern - Head of Data Collection and Teleoperation",
    period: "Jan 2026 - Present",
    bullets: [
      "Built and deployed an end-to-end robotics inference pipeline, integrating dual-arm robotic systems with cloud-based Vision-Language-Action (VLA) models for real-time decision-making.",
      "Evaluated model performance across multiple training checkpoints, identifying key failure modes including grasp instability, over-commitment, and policy collapse. Enhanced model performance by 50% within the first week.",
      "Developed a Python-based diagnostic tool that identifies dataset episodes responsible for training loss.",
    ],
  },
  {
    company: "CortexAI",
    role: "Artificial Intelligence Engineering Intern - Lead Robot Operator and Coordinator",
    period: "Sep 2025 - Jan 2026",
    recommendationLabel: "View Recommendation",
    recommendationHref: "/CortexAI-Letter-of-Recommendation.pdf",
    bullets: [
      "Led and trained a 14-member operator team for robotics data collection, recruiting 6 members and ensuring consistent performance and data quality for VLA model training.",
      "Coordinated robotics data collection operations by training operators on egocentric capture and robotic arms, while improving data quality standards for VLA model development by 200%.",
      "Designed and set up 50+ new data collection environments, manipulation tasks, and datasets to expand the quantity and diversity of training data for robotics systems.",
    ],
  },
];

const projectItems = [
  {
    title: "SwipeRX",
    description:
      "Applied SQL, Holt-Winters Forecasting, Rolling Averages, ABC analysis, Backpropagation and Regression models to analyse and transform large amounts of data into actionable inventory recommendations.",
    tools: ["Data & Business Analyst", "SQL", "Forecasting", "Regression"],
    impact: ["Jan 2026 - Present"],
  },
  {
    title: "Surve",
    description:
      "Created a survey app enabling start-ups and small businesses to rapidly collect and distil consumer insights across large audiences.",
    tools: ["Co-Founder & CEO", "Dec 2025 - Present"],
    impact: ["Received $2000 in Funding from SUTD's Baby Shark Fund."],
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
    items: ["Hugging Face", "Lerobot", "TensorFlow", "OpenPI", "Pi0.5", "W&B"],
  },
];

const contactLinks = [
  {
    label: "Phone",
    value: "+65 9221 9665",
    href: "tel:+6592219665",
  },
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
    value: "shawkiat-site.vercel.app",
    href: "https://shawkiat-site.vercel.app/",
  },
];

const validPages = new Set(navigation.filter((item) => item.page).map((item) => item.page));

function getActivePageFromHash() {
  const page = window.location.hash.replace("#", "") || "home";
  return validPages.has(page) ? page : "home";
}

function AboutSection() {
  return (
    <section className="section panel" id="about">
      <div className="section-heading">
        <p className="eyebrow">Professional Summary</p>
        <h2>Finance, analytics, and emerging technologies with originality and discipline</h2>
      </div>

      <div className="about-grid">
        <p>
          I have a strong interest in finance, analytics, and emerging technologies, and take
          pride in approaching problems with originality and discipline.
        </p>
        <p>
          In every role I take on, I remain guided by my three core values, humility,
          adaptability and a genuine eagerness to learn.
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
          <p className="card-label">Miscellaneous Information</p>
          <h3>Background and availability</h3>
          <div className="tag-row">
            <span className="tag">Singaporean</span>
            <span className="tag">Fluent in English</span>
            <span className="tag">Fluent in Mandarin</span>
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
        <h2>Professional Experience</h2>
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
            {item.recommendationHref ? (
              <a
                className="card-cta"
                href={item.recommendationHref}
                target="_blank"
                rel="noreferrer"
              >
                {item.recommendationLabel}
              </a>
            ) : null}
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
        <p className="eyebrow">Leadership &amp; Activities</p>
        <h2>Leadership &amp; Activities</h2>
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
        <h2>Technical Skills</h2>
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
        <h2>Contact</h2>
      </div>

      <p className="contact-copy">
        Reach out through any of the channels below.
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
              key={item.page ?? item.label}
              href={item.href ?? `#${item.page}`}
              className={activePage === item.page ? "is-active" : undefined}
              target={item.target}
              rel={item.rel}
              onClick={
                item.page
                  ? (event) => {
                      event.preventDefault();
                      navigateToPage(item.page);
                    }
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="/Lee-Shaw-Kiat-Kevin-CV.pdf" target="_blank" rel="noreferrer">
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
                I have a strong interest in finance, analytics, and emerging technologies, and
                take pride in approaching problems with originality and discipline.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="/Lee-Shaw-Kiat-Kevin-CV.pdf"
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
                <span>Emerging technologies</span>
                <span>Humility and adaptability</span>
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
