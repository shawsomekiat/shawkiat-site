import './App.css'

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "0 auto", padding: "40px" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1>Lee Shaw Kiat</h1>
        <p><p>Engineering Systems and Design Undergraduate | Finance & Data Analytics</p></p>
        <p>Email: your@email.com | LinkedIn: your-link | GitHub: your-link</p>
      </header>

      <section style={{ marginBottom: "30px" }}>
        <h2>About Me</h2>
        <p>
          I am an undergraduate student interested in finance, analytics, and problem solving.
          I enjoy turning data into clear insights and practical decisions.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Education</h2>
        <p>Singapore University of Technology and Design</p>
        <p>Engineering Systems and Design</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Experience</h2>
        <ul>
          <li>Work experience 1</li>
          <li>Work experience 2</li>
          <li>Leadership or extracurricular experience</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Skills</h2>
        <p>Python, SQL, Excel, Data Analysis, Financial Analysis</p>
      </section>
    </div>
  );
}

export default App;