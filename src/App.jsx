import { useState } from 'react'
import './App.css'
import profileImage from './assets/samuel-profile.png'
import About from './components/About'
import Contact from './components/Contact'
import Vision from './components/Vision'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Footer from './components/Footer'

const projects = [
  {
    category: 'GIS',
    number: '01',
    title: 'Ada East & Ada West Flood Risk Mapping',
    description:
      'Academic GIS project examining flood-risk patterns using terrain and hydrological factors for the Ada East and Ada West study area.',
    tools: ['QGIS', 'ArcGIS Pro', 'DEM'],
    status: 'Academic GIS Project',
    evidence: '[Insert final flood-risk map here]',
  },
  {
    category: 'ENVIRONMENT',
    number: '02',
    title: 'Waste Management Field Study',
    description:
      'Academic field study covering waste sorting, recycling, composting, material recovery and related environmental and public-health risks.',
    tools: ['Waste Management', 'Recycling', 'Safety'],
    status: 'Academic Field Study',
    evidence: '[Insert field-study photograph here]',
  },
  {
    category: 'SAFETY',
    number: '03',
    title: 'Environmental & Safety Field Studies',
    description:
      'Academic field studies examining workplace hazards, controls, PPE, environmental impacts and safety practices in real study environments.',
    tools: ['OHS', 'Risk', 'Field Study'],
    status: 'Academic Field Study',
    evidence: '[Insert relevant field photograph here]',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState('All')

  const filteredProjects =
    activeProject === 'All'
      ? projects
      : projects.filter((project) => project.category === activeProject)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    setMenuOpen(false)
  }

  return (
    <div className="portfolio">
      <header className="navbar">
        <button
          className="brand"
          onClick={() => scrollToSection('home')}
          aria-label="Go to homepage"
        >
          SG<span>.</span>
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <div className="availability">
            <span></span>
            ENVIRONMENTAL & SAFETY ENGINEERING • UMaT
          </div>

          <h1>
            Samuel
            <br />
            <em>Gyampo.</em>
          </h1>

          <p className="hero-title">
            Engineering student • GIS enthusiast • Environmental
            problem solver
          </p>

          <p className="hero-description">
            I am developing my GIS and front-end skills while working on
            academic projects that connect engineering, technology and real-world
            environmental challenges. I am currently open to internship and
            learning opportunities, including remote and field-based roles.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => scrollToSection('projects')}
            >
              View my work
            </button>

            <button
              className="text-button"
              onClick={() => scrollToSection('contact')}
            >
              Contact me <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="hero-meta">
            <div>
              <strong>FOCUS</strong>
              <span>GIS • Environmental • Safety • Digital Skills</span>
            </div>

            <div>
              <strong>LOCATION</strong>
              <span>Ghana • Open to remote or field-based opportunities</span>
            </div>
          </div>
        </div>

        <div className="portrait-area">
          <div className="portrait-glow"></div>

          <div className="portrait-frame">
            <img
              src={profileImage}
              alt="Samuel Gyampo profile portrait"
            />
          </div>

          <div className="portrait-label">
            <span>PROFILE / 01</span>
            <span>SG — 2026</span>
          </div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
        </div>
      </section>

      <Marquee />
      <About />
      <Stats />

      <section id="skills" className="section skills">
        <div className="section-label">
          <span>02</span>
          SKILLS IN DEVELOPMENT
        </div>

        <div className="skills-content">
          <h2>
            Skills I am
            <span> building.</span>
          </h2>

          <p className="section-intro">
            A practical mix of engineering knowledge, GIS, digital development
            and productivity tools that I am continuing to strengthen through
            coursework and projects.
          </p>

          <div className="skills-grid">
            <article>
              <span>01</span>
              <h3>GIS & Mapping</h3>
              <p>
                QGIS, ArcGIS Pro, spatial analysis and flood-risk mapping.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Environmental</h3>
              <p>
                Environmental assessment, waste management, pollution and
                environmental protection.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Safety Engineering</h3>
              <p>
                Hazard identification, risk assessment, occupational safety and
                safety controls.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Digital Development</h3>
              <p>
                Front-end development with React and VS Code, with an ongoing
                focus on digital problem-solving.
              </p>
            </article>

            <article>
              <span>05</span>
              <h3>Productivity</h3>
              <p>
                Microsoft Office tools for documentation, presentations,
                analysis and academic work.
              </p>
            </article>

            <article>
              <span>06</span>
              <h3>AI & Data</h3>
              <p>
                Exploring AI and data analysis for future environmental and GIS
                applications.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="section-label">
          <span>03</span>
          SELECTED WORK
        </div>

        <div className="projects-heading">
          <div>
            <h2>
              Work with
              <span> purpose.</span>
            </h2>
            <p className="section-intro">
              Academic projects and field studies that show how I am applying
              engineering, GIS and environmental thinking.
            </p>
          </div>

          <p className="project-note">
            More projects will be added as my skills and experience grow.
          </p>
        </div>

        <div className="project-filters">
          {['All', 'GIS', 'ENVIRONMENT', 'SAFETY'].map((filter) => (
            <button
              key={filter}
              className={activeProject === filter ? 'active' : ''}
              onClick={() => setActiveProject(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline">
                <div className="project-number">{project.number}</div>
                <div className="project-category">{project.category}</div>
              </div>

              <p className="project-status">{project.status}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="project-evidence">
                <strong>Evidence</strong>
                <span>{project.evidence}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Vision />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default App
