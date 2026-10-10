import { useState } from 'react'

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
      'Academic field studies examining workplace hazards, controls, PPE, environmental impacts and safety practices in study environments.',
    tools: ['OHS', 'Risk', 'Field Study'],
    status: 'Academic Field Study',
    evidence: '[Insert relevant field photograph here]',
  },
]

const filters = ['All', 'GIS', 'ENVIRONMENT', 'SAFETY']

export default function Projects() {
  const [activeProject, setActiveProject] = useState('All')
  const filteredProjects = activeProject === 'All'
    ? projects
    : projects.filter((project) => project.category === activeProject)

  return (
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
        <p className="project-note">More projects will be added as my skills and experience grow.</p>
      </div>

      <div className="project-filters" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeProject === filter ? 'active' : ''}
            onClick={() => setActiveProject(filter)}
            aria-pressed={activeProject === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid" aria-live="polite">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-topline">
              <div className="project-number">{project.number}</div>
              <div className="project-category">{project.category}</div>
            </div>
            <p className="project-status">{project.status}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tools" aria-label="Tools and topics">
              {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="project-evidence">
              <strong>Evidence</strong>
              <span>{project.evidence}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
