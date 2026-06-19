import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Sumit',
    role: 'Tech Lead & Full Stack Developer',
    bio: 'Full stack developer with expertise in React, Node.js, and cloud infrastructure. Handles architecture, backend, deployment and client-facing technical decisions.',
    skills: ['React', 'Node.js', 'DevOps', 'AWS', 'Supabase'],
    avatar: 'SU',
    color: '#6C63FF',
    founder: true,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Riya',
    role: 'UI/UX Designer & Frontend Developer',
    bio: 'Creative designer who turns complex ideas into beautiful, intuitive interfaces. Expert in Figma, React and crafting pixel-perfect user experiences.',
    skills: ['Figma', 'React', 'CSS3', 'Framer', 'UI/UX'],
    avatar: 'RI',
    color: '#00D4AA',
    founder: true,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Kashish',
    role: 'Backend Developer & API Expert',
    bio: 'Backend specialist focused on building scalable APIs, database architecture and server-side logic. Expert in Node.js, PHP and MySQL.',
    skills: ['Node.js', 'PHP', 'MySQL', 'REST API', 'Laravel'],
    avatar: 'KA',
    color: '#FFB347',
    founder: false,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Somya',
    role: 'Digital Marketing & SEO Specialist',
    bio: 'Growth-focused marketer who drives organic traffic and paid campaigns. Specializes in local SEO for MP businesses and Google Ads management.',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Content', 'GMB'],
    avatar: 'SO',
    color: '#FF6B6B',
    founder: false,
    linkedin: '#',
    github: '#',
  },
]

const values = [
  { icon: '🎯', title: 'Client First', desc: 'Your success is our success. We prioritize your business goals over everything else.' },
  { icon: '🔍', title: 'Transparency', desc: 'No jargon, no hidden costs. Clear communication at every stage of the project.' },
  { icon: '⚡', title: 'Speed + Quality', desc: 'We move fast without cutting corners. Agile process, clean code, on-time delivery.' },
  { icon: '🤝', title: 'Long-term Partner', desc: 'We don\'t disappear after launch. We\'re your tech partner for the long run.' },
  { icon: '🌱', title: 'Local Roots', desc: 'Jabalpur-based team proud to serve businesses across MP and India.' },
  { icon: '📚', title: 'Always Learning', desc: 'Tech evolves fast. We stay ahead so your products are always modern.' },
]

const milestones = [
  { year: '2021', title: 'Started as freelancers', desc: 'Sumit and Riya started taking freelance web projects while completing their education.' },
  { year: '2022', title: 'First big client', desc: 'Delivered a complete HMS for a hospital in Jabalpur. Turned client into a long-term partner.' },
  { year: '2023', title: 'Team of 4', desc: 'Kashish and Somya joined. Started handling 5+ projects simultaneously.' },
  { year: '2024', title: 'Agency formation', desc: 'Officially founded Pixel Labs Software Solutions. Expanded to mobile apps and AI solutions.' },
  { year: '2027', title: 'Training center', desc: 'Launching offline training center in Jabalpur to nurture local tech talent.' },
]

export default function About() {
  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container">
          <span className="section-tag">Our Story</span>
          <h1 className="page-hero__title">
            Built in Jabalpur,<br />
            <span className="gradient-text">Trusted Across India</span>
          </h1>
          <p className="page-hero__sub">
            We're a passionate team of developers, designers and marketers on a mission to make quality software accessible to every business — big or small.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section">
        <div className="container">
          <div className="about-mission">
            <div className="about-mission__left">
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title">
                We Believe Every Business Deserves
                <span className="gradient-text"> Great Software</span>
              </h2>
              <p className="about-mission__text">
                Too many small businesses in MP are stuck with outdated systems, overpriced agencies, or unreliable freelancers. We started Pixel Labs to change that.
              </p>
              <p className="about-mission__text">
                Our mission is simple: deliver enterprise-quality software at startup-friendly prices, with the reliability and support that local businesses deserve.
              </p>
              <p className="about-mission__text">
                From a hospital in Jabalpur to a startup in Bangalore — we treat every project like it's our own business.
              </p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
                Work With Us →
              </Link>
            </div>
            <div className="about-mission__right">
              <div className="about-stats-box">
                {[
                  { v: '50+', l: 'Projects Delivered' },
                  { v: '30+', l: 'Happy Clients' },
                  { v: '8+', l: 'Industries' },
                  { v: '4', l: 'Core Team Members' },
                  { v: '4+', l: 'Years Experience' },
                  { v: '100%', l: 'Source Code Ownership' },
                ].map((s, i) => (
                  <div key={i} className="about-stat">
                    <span className="about-stat__val gradient-text">{s.v}</span>
                    <span className="about-stat__label">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">
              How We <span className="gradient-text">Got Here</span>
            </h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                <div className="timeline__content">
                  <span className="timeline__year">{m.year}</span>
                  <h3 className="timeline__title">{m.title}</h3>
                  <p className="timeline__desc">{m.desc}</p>
                </div>
                <div className="timeline__dot" />
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">
              People Who Make It <span className="gradient-text">Happen</span>
            </h2>
          </div>
          <div className="about-team__grid">
            {team.map((m, i) => (
              <div key={i} className="about-team-card" style={{ '--card-color': m.color }}>
                <div className="about-team-card__avatar-wrap">
                  <div className="about-team-card__avatar" style={{ background: `${m.color}20`, color: m.color }}>
                    {m.avatar}
                  </div>
                  {m.founder && <span className="about-team-card__founder">Co-Founder</span>}
                </div>
                <h3 className="about-team-card__name">{m.name}</h3>
                <p className="about-team-card__role">{m.role}</p>
                <p className="about-team-card__bio">{m.bio}</p>
                <div className="about-team-card__skills">
                  {m.skills.map(s => (
                    <span key={s} className="about-team-card__skill">{s}</span>
                  ))}
                </div>
                <div className="about-team-card__links">
                  <a href={m.linkedin} target="_blank" rel="noreferrer" className="about-team-card__link">
                    LinkedIn
                  </a>
                  <a href={m.github} target="_blank" rel="noreferrer" className="about-team-card__link">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <span className="about-value-card__icon">{v.icon}</span>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING CTA ── */}
      <section className="section">
        <div className="container">
          <div className="home-training__card">
            <div className="home-training__badge">Coming Soon — 2025</div>
            <h2 className="home-training__title">
              🎓 Pixel Labs Training Center
            </h2>
            <p className="home-training__desc">
              Offline coding bootcamp in Jabalpur. Learn web development, mobile apps and AI from the same team that builds real products. Job-ready in 3–6 months.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi! I want to join Pixel Labs Training Center waitlist."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Join Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="home-cta__inner">
            <h2 className="home-cta__title">
              Let's build something<br />
              <span className="gradient-text">great together.</span>
            </h2>
            <p className="home-cta__sub">Free consultation · Quick response · Local team</p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn-primary">Get In Touch</Link>
              <Link to="/portfolio" className="btn-outline">See Our Work →</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}