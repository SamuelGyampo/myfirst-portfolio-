export default function Footer({ scrollToSection }) {
  return (
    <footer>
      <div className="footer-brand">
        SG<span>.</span>
      </div>

      <p>
        Environmental & Safety Engineering • GIS • Digital Development
      </p>

      <button onClick={() => scrollToSection('home')}>Back to top ↑</button>
    </footer>
  )
}
