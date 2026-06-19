import { useState } from 'react'

const openings = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Full-time',
    mode: 'On-site / Remote',
    location: 'Jabalpur, MP',
    experience: '1–3 years',
    color: '#6C63FF',
    desc: 'We are looking for a passionate Frontend Developer who loves building beautiful, performant web interfaces.',
    responsibilities: [
      'Build responsive UIs using React.js',
      'Collaborate with designers to implement pixel-perfect designs',
      'Write clean, maintainable, well-documented code',
      'Optimize applications for speed and scalability',
      'Participate in code reviews and team discussions',
    ],
    requirements: [
      'Strong proficiency in React.js and JavaScript (ES6+)',
      'Good understanding of CSS3, Flexbox, Grid',
      'Experience with REST APIs and async programming',
      'Familiarity with Git version control',
      'Good communication skills in Hindi/English',
    ],
    niceToHave: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
    salary: '₹15,000 – ₹30,000/mo',
  },
  {
    id: 2,
    title: 'Backend Developer',
    type: 'Full-time',
    mode: 'On-site / Remote',
    location: 'Jabalpur, MP',
    experience: '1–3 years',
    color: '#00D4AA',
    desc: 'Looking for a Backend Developer to build robust APIs, manage databases and handle server-side logic for our client projects.',
    responsibilities: [
      'Design and develop RESTful APIs using Node.js or PHP',
      'Database design and query optimization (MySQL, MongoDB)',
      'Implement authentication and security best practices',
      'Deploy and manage applications on cloud platforms',
      'Work closely with frontend team for seamless integration',
    ],
    requirements: [
      'Proficiency in Node.js (Express) or PHP (Laravel)',
      'Strong knowledge of MySQL / MongoDB',
      'Understanding of REST API design principles',
      'Experience with Git and deployment (Render/Vercel/VPS)',
      'Problem-solving mindset',
    ],
    niceToHave: ['Docker', 'Redis', 'Supabase', 'AWS/Oracle Cloud'],
    salary: '₹18,000 – ₹35,000/mo',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    type: 'Full-time',
    mode: 'On-site',
    location: 'Jabalpur, MP',
    experience: '1–2 years',
    color: '#FF6B6B',
    desc: 'We need a creative UI/UX Designer who can turn business requirements into beautiful, user-friendly digital experiences.',
    responsibilities: [
      'Create wireframes, prototypes and final UI designs in Figma',
      'Design web and mobile app interfaces',
      'Work with developers to ensure design is implemented correctly',
      'Conduct basic user research and usability testing',
      'Maintain design system and component library',
    ],
    requirements: [
      'Strong proficiency in Figma',
      'Good eye for typography, color and spacing',
      'Understanding of web/mobile design principles',
      'Portfolio with at least 3–5 design projects',
      'Ability to take feedback constructively',
    ],
    niceToHave: ['Motion design', 'Lottie animations', 'HTML/CSS basics'],
    salary: '₹12,000 – ₹25,000/mo',
  },
  {
    id: 4,
    title: 'Digital Marketing Executive',
    type: 'Full-time',
    mode: 'On-site',
    location: 'Jabalpur, MP',
    experience: '0–2 years',
    color: '#FFB347',
    desc: 'Looking for a data-driven Digital Marketing Executive to manage SEO, Google Ads and social media for our clients.',
    responsibilities: [
      'Manage SEO for client websites (on-page + technical)',
      'Run and optimize Google Ads and Meta Ads campaigns',
      'Handle social media accounts for clients',
      'Create content calendars and manage posting schedules',
      'Prepare monthly performance reports',
    ],
    requirements: [
      'Basic understanding of SEO and how Google works',
      'Familiarity with Google Ads and Meta Ads Manager',
      'Good written communication in Hindi & English',
      'Knowledge of tools like Google Search Console, Canva',
      'Eagerness to learn and grow',
    ],
    niceToHave: ['Google Ads certification', 'Video editing', 'WordPress'],
    salary: '₹10,000 – ₹20,000/mo',
  },
]

const perks = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Market-rate pay with performance bonuses' },
  { icon: '🏠', title: 'Work From Home', desc: 'Flexible hybrid working options available' },
  { icon: '📚', title: 'Learning Budget', desc: 'Paid courses, certifications and books' },
  { icon: '🚀', title: 'Fast Growth', desc: 'Small team = big responsibility = fast growth' },
  { icon: '🎓', title: 'Mentorship', desc: 'Direct mentorship from experienced founders' },
  { icon: '🎉', title: 'Fun Culture', desc: 'Young team, open culture, no corporate BS' },
]

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_CAREER_FORM_ID/formResponse'

export default function Career() {
  const [openJob, setOpenJob] = useState(null)
  const [applyJob, setApplyJob] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', portfolio: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleApply = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData()
    fd.append('entry.111111111', applyJob?.title || '')
    fd.append('entry.222222222', form.name)
    fd.append('entry.333333333', form.email)
    fd.append('entry.444444444', form.phone)
    fd.append('entry.555555555', form.portfolio)
    fd.append('entry.666666666', form.message)
    try {
      await fetch(GOOGLE_FORM_URL, { method: 'POST', mode: 'no-cors', body: fd })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="career-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container">
          <span className="section-tag">Join Our Team</span>
          <h1 className="page-hero__title">
            Build the Future<br />
            <span className="gradient-text">With Us</span>
          </h1>
          <p className="page-hero__sub">
            We're a small but mighty team building real products for real clients. If you love solving problems with code — you'll fit right in.
          </p>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Join Us</span>
            <h2 className="section-title">
              Life at <span className="gradient-text">Pixel Labs</span>
            </h2>
          </div>
          <div className="career-perks">
            {perks.map((p, i) => (
              <div key={i} className="career-perk">
                <span className="career-perk__icon">{p.icon}</span>
                <h3 className="career-perk__title">{p.title}</h3>
                <p className="career-perk__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPENINGS ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Open Positions</span>
            <h2 className="section-title">
              Current <span className="gradient-text">Openings</span>
            </h2>
            <p className="section-subtitle">
              {openings.length} positions open · Jabalpur, MP
            </p>
          </div>

          <div className="career-jobs">
            {openings.map(job => (
              <div
                key={job.id}
                className={`career-job ${openJob === job.id ? 'career-job--open' : ''}`}
                style={{ '--card-color': job.color }}
              >
                {/* Header */}
                <div
                  className="career-job__header"
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                >
                  <div className="career-job__left">
                    <h3 className="career-job__title">{job.title}</h3>
                    <div className="career-job__meta">
                      <span className="career-job__tag">💼 {job.type}</span>
                      <span className="career-job__tag">🏠 {job.mode}</span>
                      <span className="career-job__tag">📍 {job.location}</span>
                      <span className="career-job__tag">⏳ {job.experience}</span>
                    </div>
                  </div>
                  <div className="career-job__right">
                    <span className="career-job__salary">{job.salary}</span>
                    <span className={`career-job__toggle ${openJob === job.id ? 'career-job__toggle--open' : ''}`}>↓</span>
                  </div>
                </div>

                {/* Body */}
                <div className="career-job__body">
                  <p className="career-job__desc">{job.desc}</p>
                  <div className="career-job__cols">
                    <div>
                      <h4 className="career-job__sub">Responsibilities</h4>
                      <ul className="career-job__list">
                        {job.responsibilities.map(r => (
                          <li key={r}><span style={{ color: job.color }}>→</span> {r}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="career-job__sub">Requirements</h4>
                      <ul className="career-job__list">
                        {job.requirements.map(r => (
                          <li key={r}><span style={{ color: job.color }}>✓</span> {r}</li>
                        ))}
                      </ul>
                      <h4 className="career-job__sub" style={{ marginTop: 20 }}>Nice to Have</h4>
                      <div className="career-job__nice">
                        {job.niceToHave.map(n => (
                          <span key={n} className="career-job__nice-tag">{n}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn-primary"
                    style={{ marginTop: 24 }}
                    onClick={() => { setApplyJob(job); setStatus(null) }}
                  >
                    Apply for {job.title} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION ── */}
      <section className="section">
        <div className="container">
          <div className="career-general">
            <div className="career-general__left">
              <span className="section-tag">Don't See Your Role?</span>
              <h2 className="section-title">
                Send a <span className="gradient-text">General Application</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.7 }}>
                We're always looking for talented people. If you're passionate about tech and think you'd be a great fit — drop us your CV. We'll reach out when something opens up.
              </p>
              <div style={{ marginTop: 24 }}>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi! I want to apply at Pixel Labs."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  💬 WhatsApp Your CV
                </a>
              </div>
            </div>
            <div className="career-general__right">
              {[
                { icon: '📄', text: 'Send your resume/portfolio on WhatsApp' },
                { icon: '📞', text: 'Quick 15-min intro call with our team' },
                { icon: '💻', text: 'Small practical task (paid if hired)' },
                { icon: '🤝', text: 'Offer letter within 48 hours' },
              ].map((s, i) => (
                <div key={i} className="career-step">
                  <span className="career-step__num">{i + 1}</span>
                  <span className="career-step__icon">{s.icon}</span>
                  <p className="career-step__text">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY MODAL ── */}
      {applyJob && (
        <div className="port-modal" onClick={() => setApplyJob(null)}>
          <div className="port-modal__box" onClick={e => e.stopPropagation()}>
            <button className="port-modal__close" onClick={() => setApplyJob(null)}>✕</button>
            <div className="port-modal__body">
              {status === 'sent' ? (
                <div className="contact-success">
                  <span className="contact-success__icon">🎉</span>
                  <h3>Application Sent!</h3>
                  <p>We'll review your application and get back to you within 48 hours on WhatsApp or email.</p>
                  <button className="btn-primary" onClick={() => setApplyJob(null)} style={{ marginTop: 20 }}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="port-modal__title">Apply — {applyJob.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 28 }}>
                    Fill in your details and we'll get back to you within 48 hours.
                  </p>
                  <form className="contact-form" onSubmit={handleApply}>
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label className="contact-form__label">Full Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                      </div>
                      <div className="contact-form__field">
                        <label className="contact-form__label">Phone *</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                      </div>
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Portfolio / GitHub / LinkedIn URL</label>
                      <input type="url" name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://github.com/yourname" />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Why do you want to join Pixel Labs? *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about yourself, your experience and why you want to join..." required />
                    </div>
                    {status === 'error' && (
                      <p className="contact-form__error">Something went wrong. Please WhatsApp us your CV directly.</p>
                    )}
                    <button type="submit" className="btn-primary contact-form__submit" disabled={status === 'sending'}>
                      {status === 'sending' ? <><span className="contact-form__spinner" /> Sending...</> : 'Submit Application →'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}