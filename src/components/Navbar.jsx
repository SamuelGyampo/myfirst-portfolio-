import { useState } from 'react'

export default function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigateTo = (sectionId) => {
    scrollToSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <button
        type="button"
        className="brand"
        onClick={() => navigateTo('home')}
        aria-label="Go to homepage"
      >
        SG<span>.</span>
      </button>

      <nav id="main-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <button type="button" onClick={() => navigateTo('home')}>Home</button>
        <button type="button" onClick={() => navigateTo('about')}>About</button>
        <button type="button" onClick={() => navigateTo('skills')}>Skills</button>
        <button type="button" onClick={() => navigateTo('projects')}>Projects</button>
        <button type="button" onClick={() => navigateTo('contact')}>Contact</button>
      </nav>

      <button
        type="button"
        className="menu-button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        <span></span>
        <span></span>
      </button>
    </header>
  )
}
