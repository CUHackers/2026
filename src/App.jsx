import React from 'react'

const Nav = () => {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'faq', label: 'FAQ' },
    { id: 'register', label: 'Register' },
    { id: 'sponsor', label: 'Sponsor' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' }
  ]

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="logo">CUHackIt</div>
      <div className="nav-items">
        {items.map(item => (
          <a key={item.id} href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}>{item.label}</a>
        ))}
      </div>
    </nav>
  )
}

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
)

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Section id="home" title="Welcome to CUHackIt 2026">
          <p>Welcome — this is a barebones single-page template. Replace content as needed.</p>
        </Section>

        <Section id="faq" title="FAQ">
          <p>Q: What is CUHackIt? A: A student hackathon.</p>
        </Section>

        <Section id="register" title="Register">
          <p>Registration details and link placeholder.</p>
          <button className="primary">Register Now</button>
        </Section>

        <Section id="sponsor" title="Sponsor">
          <p>Information for sponsors and contact placeholder.</p>
        </Section>

        <Section id="about" title="About">
          <p>Short about section for CUHackIt.</p>
        </Section>

        <Section id="schedule" title="Schedule">
          <p>High-level schedule goes here.</p>
        </Section>
      </main>
      <footer className="footer">© CUHackers — CUHackIt 2026</footer>
    </div>
  )
}
