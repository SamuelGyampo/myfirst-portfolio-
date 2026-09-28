import { useState } from 'react'

export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="about" className="section about">
      <div className="section-label">
        <span>01</span>
        ABOUT
      </div>

      <div className="about-content">
        <h2>
          Building where
          <span> engineering meets technology.</span>
        </h2>

        <button
          type="button"
          className={`about-reveal ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="about-details"
        >
          <span className="about-reveal-top">
            <span className="about-reveal-label">
              {isOpen ? 'CLOSE ABOUT' : 'EXPLORE ABOUT'}
            </span>
            <span className="about-reveal-icon" aria-hidden="true">
              {isOpen ? '−' : '+'}
            </span>
          </span>

          <span
            id="about-details"
            className="about-reveal-panel"
            aria-hidden={!isOpen}
          >
            <span className="about-columns">
              <span className="about-copy">
                <span className="about-copy-title">About Samuel</span>
                <span>
                  I am an Environmental &amp; Safety Engineering student at the
                  University of Mines and Technology (UMaT), building a career
                  around environmental problem-solving, GIS and digital
                  technology.
                </span>
              </span>

              <span className="about-copy">
                <span className="about-copy-title">Currently developing</span>
                <span>
                  I am developing my GIS and front-end skills through projects
                  and structured learning, with the goal of applying these
                  skills to real environmental and safety challenges.
                </span>
              </span>

              <span className="about-copy">
                <span className="about-copy-title">Looking for</span>
                <span>
                  I am building capability, documenting what I learn and looking
                  for internship or other learning opportunities where I can gain
                  practical experience and contribute to meaningful work.
                </span>
              </span>
            </span>
          </span>
        </button>
      </div>
    </section>
  )
}
