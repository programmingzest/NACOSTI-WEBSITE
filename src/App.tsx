import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
)

const topics = ['All updates', 'Research', 'Policy', 'Opportunities']

const updates = [
  {
    type: 'Research',
    date: '18 Sep 2026',
    title: 'Building a stronger culture of research ethics and integrity',
    text: 'NACOSTI brings together researchers and ethics review committees for a five-day capacity strengthening programme.',
    accent: 'blue',
  },
  {
    type: 'Opportunities',
    date: '02 Sep 2026',
    title: 'Call for proposals: science, technology and innovation',
    text: 'Explore new pathways for Kenyan innovators and research teams to turn bold ideas into lasting impact.',
    accent: 'gold',
  },
  {
    type: 'Policy',
    date: '28 Aug 2026',
    title: 'Shaping Kenya’s next chapter of knowledge-led growth',
    text: 'A look at the partnerships and policies powering a more inclusive, resilient and innovative nation.',
    accent: 'green',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTopic, setActiveTopic] = useState('All updates')
  const [query, setQuery] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredUpdates = updates.filter((update) => {
    const matchesTopic = activeTopic === 'All updates' || update.type === activeTopic
    const matchesQuery = `${update.title} ${update.text}`.toLowerCase().includes(query.toLowerCase())
    return matchesTopic && matchesQuery
  })

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>National Commission for Science, Technology and Innovation</span>
          <div className="topline-links">
            <a href="#contact">Contact us</a>
            <a href="#resources">Resources</a>
            <span className="language">EN <span aria-hidden="true">⌄</span></span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="NACOSTI home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-copy">
              <strong>NACOSTI</strong>
              <small>Science • Technology • Innovation</small>
            </span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#services" onClick={closeMenu}>Our services</a>
            <a href="#innovation" onClick={closeMenu}>Innovation</a>
            <a href="#updates" onClick={closeMenu}>News & insights</a>
          </nav>

          <a className="button button-small nav-cta" href="#services" onClick={closeMenu}>
            Explore services <ArrowUpRight />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="eyebrow"><span /> Kenya’s innovation engine</div>
            <h1>Ideas that move<br /><em>Kenya forward.</em></h1>
            <p className="hero-lede">
              We champion the people, policies and partnerships that turn
              knowledge into a better future for every Kenyan.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#innovation">Discover our impact <ArrowUpRight /></a>
              <a className="text-link" href="#about">Learn about NACOSTI <ArrowRight /></a>
            </div>
            <div className="hero-note">
              <span className="pulse-dot" />
              <span>Driving a knowledge-based economy</span>
              <span className="note-line" />
              <strong>Since 2013</strong>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-core">
              <span className="core-star">✦</span>
              <span>Knowledge<br />in motion</span>
            </div>
            <span className="orbit-label label-one">RESEARCH</span>
            <span className="orbit-label label-two">IMPACT</span>
            <span className="orbit-label label-three">FUTURE</span>
          </div>
        </section>

        <section className="quick-strip" id="services">
          <div className="container quick-grid">
            <div className="quick-intro">
              <span className="section-kicker">How can we help?</span>
              <h2>Start here.</h2>
            </div>
            <a className="quick-card" href="#resources">
              <span className="quick-icon icon-register">◎</span>
              <span><strong>Register your project</strong><small>Research & innovation registration</small></span>
              <ArrowUpRight />
            </a>
            <a className="quick-card" href="#resources">
              <span className="quick-icon icon-licence">◇</span>
              <span><strong>Get a research licence</strong><small>Apply, track and manage</small></span>
              <ArrowUpRight />
            </a>
            <a className="quick-card" href="#contact">
              <span className="quick-icon icon-talk">↗</span>
              <span><strong>Talk to our team</strong><small>We’re here to help</small></span>
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <section className="intro-section container" id="about">
          <div className="intro-heading">
            <span className="section-kicker">Our role</span>
            <h2>Making space for<br /><span>what’s next.</span></h2>
          </div>
          <div className="intro-copy">
            <p>As Kenya’s national agency for science, technology and innovation, we connect ambition to action.</p>
            <p>From setting standards to supporting researchers, we create the conditions for ideas to thrive — and for progress to reach communities.</p>
            <a className="text-link" href="#innovation">Meet NACOSTI <ArrowRight /></a>
          </div>
          <div className="stat-card">
            <span className="stat-mark">+</span>
            <strong>01</strong>
            <span>national vision</span>
            <small>One connected ecosystem for science and innovation.</small>
          </div>
        </section>

        <section className="impact-section" id="innovation">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-kicker">The bigger picture</span>
                <h2>Progress is a<br /><span>team sport.</span></h2>
              </div>
              <p>Our work sits at the intersection of policy, research and the people who make change possible.</p>
            </div>
            <div className="impact-grid">
              <article className="impact-card impact-card-large">
                <div className="impact-number">01</div>
                <div className="impact-art art-network" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                  <span className="network-line line-a" /><span className="network-line line-b" /><span className="network-line line-c" />
                </div>
                <div className="impact-text"><h3>Enable research</h3><p>Creating a trusted, ethical and vibrant research ecosystem.</p><a href="#resources" aria-label="Learn more about enabling research"><ArrowUpRight /></a></div>
              </article>
              <article className="impact-card impact-card-dark">
                <div className="impact-number">02</div>
                <div className="impact-art art-signal" aria-hidden="true"><span /><span /><span /><span /><span /></div>
                <div className="impact-text"><h3>Shape policy</h3><p>Using evidence to guide decisions that matter.</p><a href="#resources" aria-label="Learn more about shaping policy"><ArrowUpRight /></a></div>
              </article>
              <article className="impact-card impact-card-gold">
                <div className="impact-number">03</div>
                <div className="impact-art art-spark" aria-hidden="true">✦</div>
                <div className="impact-text"><h3>Fuel innovation</h3><p>Backing the bold thinkers building Kenya’s tomorrow.</p><a href="#resources" aria-label="Learn more about fuelling innovation"><ArrowUpRight /></a></div>
              </article>
            </div>
          </div>
        </section>

        <section className="updates-section container" id="updates">
          <div className="section-head updates-head">
            <div><span className="section-kicker">From the field</span><h2>What’s happening<br /><span>right now.</span></h2></div>
            <div className="update-tools">
              <label className="search-box">
                <span aria-hidden="true">⌕</span>
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search updates" aria-label="Search updates" />
              </label>
              <a className="text-link" href="#resources">View all updates <ArrowRight /></a>
            </div>
          </div>
          <div className="topic-tabs" role="tablist" aria-label="Filter updates">
            {topics.map((topic) => (
              <button key={topic} type="button" className={activeTopic === topic ? 'active' : ''} onClick={() => setActiveTopic(topic)}>{topic}</button>
            ))}
          </div>
          <div className="updates-grid">
            {filteredUpdates.map((update) => (
              <article className="update-card" key={update.title}>
                <div className={`update-visual ${update.accent}`}><span>{update.type}</span><b aria-hidden="true">↗</b><div className="visual-lines" /></div>
                <div className="update-meta"><span>{update.type}</span><time>{update.date}</time></div>
                <h3>{update.title}</h3><p>{update.text}</p>
                <a className="read-link" href="#resources">Read story <ArrowRight /></a>
              </article>
            ))}
          </div>
          {filteredUpdates.length === 0 && <p className="empty-state">No updates match your search yet. Try a different phrase.</p>}
        </section>

        <section className="newsletter-section" id="resources">
          <div className="container newsletter-inner">
            <div><span className="section-kicker light">Stay curious</span><h2>Good ideas deserve<br /><em>to travel.</em></h2></div>
            <div className="newsletter-copy"><p>Get the latest research opportunities, policy insights and innovation stories from NACOSTI, delivered to your inbox.</p>
              {subscribed ? <div className="success-message">✓ You’re on the list. Thank you for staying curious.</div> : <form onSubmit={handleSubscribe}><input type="email" required placeholder="Your email address" aria-label="Your email address" /><button className="button button-light" type="submit">Subscribe <ArrowUpRight /></button></form>}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-copy"><strong>NACOSTI</strong><small>Science • Technology • Innovation</small></span></a><p>Enabling science, technology and innovation for Kenya’s transformation.</p></div>
          <div className="footer-column"><span>Explore</span><a href="#about">About us</a><a href="#services">Our services</a><a href="#innovation">Innovation</a><a href="#updates">News & insights</a></div>
          <div className="footer-column"><span>Connect</span><a href="mailto:info@nacosti.go.ke">info@nacosti.go.ke</a><a href="tel:+254709949000">+254 (0) 709 949 000</a><a href="#contact">NACOSTI headquarters</a></div>
          <div className="footer-column social-column"><span>Follow along</span><div className="social-links"><a href="#contact" aria-label="LinkedIn">in</a><a href="#contact" aria-label="X">𝕏</a><a href="#contact" aria-label="Facebook">f</a></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 NACOSTI. All rights reserved.</span><span>Republic of Kenya <b>•</b> Knowledge for transformation</span><a href="#top" className="back-top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App
