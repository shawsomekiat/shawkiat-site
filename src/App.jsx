import "./App.css";
import portrait from "./assets/lee-shaw-kiat-portrait.jpg";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const experienceItems = [
  {
    company: "LionsBot International - Griffinlabs",
    role: "Artificial Intelligence Engineer Intern",
    bullets: [
      "Supported robotics development work across Griffinlabs materials covering AMR wiring, EV3 subsystem documentation, and technical coordination for robot hardware setups.",
      "Worked with system-level references for lift and e-box components, building familiarity with sensors, wiring layouts, and integration details in a production-oriented robotics environment.",
      "Contributed in a hands-on setting where technical execution had to stay aligned with clear documentation, organized implementation, and practical engineering needs.",
    ],
  },
  {
    company: "CortexAI",
    role: "Robot Operator and Coordinator",
    bullets: [
      "Operated and coordinated robotics systems in live, user-facing settings, helping demonstrations and workflows run smoothly and reliably.",
      "Supported setup, observation, and on-the-ground troubleshooting so robot interactions stayed presentation-ready and operationally consistent.",
      "Worked in a fast-moving robotics environment that required communication, coordination, and close attention to system behavior during execution.",
    ],
  },
];

const projectItems = [
  {
    title: "SurveSG",
    description:
      "Survey platform concept focused on making participation feel more trustworthy, rewarding, and sustainable for both users and businesses.",
    tools: ["Product strategy", "User experience", "Platform design", "Trust and payout flows"],
    impact: [
      "Framed the product around a clear problem statement and a practical proposed solution.",
      "Explored fast, trustworthy payouts as a key lever for user motivation and retention.",
      "Considered target users, engagement, sustainability, risks, and future extensions in the concept documentation.",
    ],
  },
  {
    title: "SwipeRx",
    description:
      "Business analytics and forecasting project built around pharmacy transaction data to study demand behavior and simulate January 2026 procurement needs.",
    tools: ["Python", "Demand analysis", "Time-series forecasting", "Data visualization"],
    impact: [
      "Analyzed historical transaction data from January 2024 to December 2025 to understand pharmacy purchasing behavior.",
      "Compared SKU growth, revenue growth, discount effects, and pharmacy-level stocking patterns across the distribution channel.",
      "Applied Holt-Winters forecasting to model product demand and support a forward-looking business simulation for January 2026.",
    ],
  },
  {
    title: "AION: Debate Chatbot",
    description:
      "Persuasive AI chatbot built for debate settings, combining a strong persona, conversational interface, and structured rebuttal flow.",
    tools: ["React / Next.js", "Prompt design", "Conversation UX", "Voice interaction"],
    impact: [
      "Designed an AI experience around a clear argumentative persona rather than a generic assistant workflow.",
      "Built a user-facing interface for live debate interactions, fast rebuttals, and conversational back-and-forth.",
      "Focused on rhetoric, interaction flow, and response delivery to create a more engaging and intentional chatbot experience.",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming / Data",
    items: ["Python", "SQL", "JavaScript", "Data analysis", "Time-series data"],
  },
  {
    title: "Analytics / Modelling",
    items: [
      "Business analytics",
      "Demand forecasting",
      "Revenue analysis",
      "Optimization thinking",
      "Data visualization",
    ],
  },
  {
    title: "AI / Robotics",
    items: [
      "AI application design",
      "Prompt design",
      "Robotics operations",
      "System integration",
      "Human-robot interaction",
    ],
  },
  {
    title: "Tools / Platforms",
    items: ["React", "Vite", "Git", "Jupyter notebooks", "Node.js"],
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

function App() {
  return (
    <div className="site-shell">
      <div className="site-backdrop" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Lee Shaw Kiat home">
          <span className="brand-mark">LSK</span>
          <span className="brand-text">Lee Shaw Kiat</span>
        </a>

        <nav className="topnav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="/Lee-Shaw-Kiat-Resume.pdf" target="_blank" rel="noreferrer">
          View Resume
        </a>
      </header>

      <main className="portfolio">
        <section className="hero panel" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Personal Portfolio</p>
            <h1>Lee Shaw Kiat</h1>
            <p className="hero-subtitle">
              Engineering Systems and Design Undergraduate | Finance, Analytics, and AI
            </p>
            <p className="hero-intro">
              I am an Engineering Systems and Design undergraduate at SUTD with interests at the
              intersection of finance, business analytics, optimization, and AI. I enjoy turning
              technical work, data, and systems thinking into practical decisions and user-facing
              solutions with clear business value.
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
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-pills" aria-label="Focus areas">
              <span>Finance and analytics</span>
              <span>AI and robotics</span>
              <span>Systems thinking</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-glow" aria-hidden="true" />
              <img src={portrait} alt="Lee Shaw Kiat portrait" className="portrait-image" />
            </div>
          </div>
        </section>

        <section className="section panel" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Systems-minded, analytical, and business-aware</h2>
          </div>

          <div className="about-grid">
            <p>
              I study Engineering Systems and Design at the Singapore University of Technology and
              Design, where I am drawn to work that blends structured problem solving with
              real-world decision making.
            </p>
            <p>
              My interests span finance, analytics, optimization, and AI, especially in settings
              where technical execution needs to translate into practical value for users,
              operators, or businesses. I am most energized by problems that require both
              analytical depth and a clear understanding of how systems perform in practice.
            </p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Hands-on exposure across robotics and coordination</h2>
          </div>

          <div className="card-grid">
            {experienceItems.map((item) => (
              <article className="panel card" key={item.company}>
                <p className="card-label">{item.company}</p>
                <h3>{item.role}</h3>
                <ul className="detail-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work across analytics, product thinking, and AI</h2>
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

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Built around analytics, technical execution, and applied AI</h2>
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

        <section className="section panel contact-panel" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Open to analytical, finance, business analytics, and AI-related opportunities</h2>
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
      </main>
    </div>
  );
}

export default App;
