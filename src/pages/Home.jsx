import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Modern, fast, and scalable web apps. React, Next.js, Node.js, PHP, Laravel — every stack covered.',
    tags: ['React', 'Node.js', 'PHP', 'Laravel'],
    color: '--primary',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'Cross-platform iOS & Android apps. React Native and Flutter for pixel-perfect mobile experiences.',
    tags: ['React Native', 'Flutter', 'Android', 'iOS'],
    color: '--accent',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Custom Software',
    desc: 'ERP, CRM, HMS, School Management — tailor-made software for your exact business needs.',
    tags: ['ERP', 'CRM', 'HMS', 'POS'],
    color: '--primary',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'SEO Optimization',
    desc: 'Rank higher on Google. Technical SEO, on-page optimization, GMB setup and content strategy.',
    tags: ['On-page', 'Technical', 'GMB', 'Content'],
    color: '--accent',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Website Redesign',
    desc: 'Outdated site holding you back? We transform old websites into modern, conversion-focused experiences.',
    tags: ['UI/UX', 'Figma', 'Modern', 'Fast'],
    color: '--primary',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Website Maintenance',
    desc: '24/7 monitoring, bug fixes, updates, security patches and performance optimization. AMC plans available.',
    tags: ['AMC', '24/7', 'Security', 'Updates'],
    color: '--accent',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
      </svg>
    ),
    title: 'AI & Automation',
    desc: 'Chatbots, voice AI agents, workflow automation. Leverage AI to save time and scale your operations.',
    tags: ['Chatbots', 'Voice AI', 'Automation', 'LLM'],
    color: '--primary',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'Social media management, Google Ads, Meta Ads and content marketing to grow your online presence.',
    tags: ['Google Ads', 'Meta Ads', 'Social', 'Content'],
    color: '--accent',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'Free 30-min consultation to understand your requirements, budget and timeline.',
    icon: '📞',
  },
  {
    step: '02',
    title: 'Proposal & Planning',
    desc: 'Detailed project scope, wireframes, tech stack recommendation and transparent pricing.',
    icon: '📋',
  },
  {
    step: '03',
    title: 'Design & Development',
    desc: 'Agile sprints with weekly updates. You stay in loop at every stage.',
    icon: '⚙️',
  },
  {
    step: '04',
    title: 'Launch & Support',
    desc: 'Thorough testing, deployment and post-launch support. We don\'t disappear after delivery.',
    icon: '🚀',
  },
]

const industries = [
  { icon: '🏥', name: 'Hospital & Clinics', desc: 'OPD, IPD, Billing, Lab, Pharmacy' },
  { icon: '🏫', name: 'School & College', desc: 'ERP, LMS, Fee Management' },
  { icon: '💚', name: 'NGO & Trusts', desc: 'Donation Portal, Member Mgmt' },
  { icon: '🛒', name: 'eCommerce', desc: 'Full Store, Payment, Delivery' },
  { icon: '🏨', name: 'Hotel & Travel', desc: 'Booking, PMS, Channel Manager' },
  { icon: '🏢', name: 'Startups & SMEs', desc: 'MVP to Enterprise Scale' },
  { icon: '⚖️', name: 'Legal & CA Firms', desc: 'Case Mgmt, Client Portal' },
  { icon: '🏗️', name: 'Real Estate', desc: 'Property Listing, CRM, Leads' },
]

const portfolio = [
  {
    title: 'HealTrack HMS',
    category: 'Hospital Management',
    desc: 'Complete hospital management system with OPD, IPD, billing, pharmacy and lab modules.',
    tags: ['React', 'Node.js', 'MySQL'],
    color: '#6C63FF',
    mockup: '🏥',
  },
  {
    title: 'EduSphere LMS',
    category: 'School ERP',
    desc: 'Comprehensive school management with attendance, fees, exams and parent portal.',
    tags: ['React', 'PHP', 'Laravel'],
    color: '#00D4AA',
    mockup: '🏫',
  },
  {
    title: 'ShopNova Store',
    category: 'eCommerce Platform',
    desc: 'Multi-vendor eCommerce platform with Razorpay integration, inventory and delivery tracking.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#FF6B6B',
    mockup: '🛒',
  },
]

const testimonials = [
  {
    name: 'Dr. Ramesh Sharma',
    role: 'Director, Sharma Hospital, Jabalpur',
    text: 'Pixel Labs built our HMS from scratch. The OPD and billing system saved us 3 hours daily. Excellent team, always available on WhatsApp.',
    rating: 5,
    avatar: 'RS',
    color: '#6C63FF',
  },
  {
    name: 'Priya Verma',
    role: 'Principal, Sunrise Academy',
    text: 'Our school ERP is working flawlessly. Fee collection is now fully automated and parents love the app. Highly recommend Pixel Labs!',
    rating: 5,
    avatar: 'PV',
    color: '#00D4AA',
  },
  {
    name: 'Ankit Jain',
    role: 'Founder, QuickMart',
    text: 'They delivered our eCommerce platform in just 3 weeks. Clean code, great design, and zero bugs at launch. Best decision we made!',
    rating: 5,
    avatar: 'AJ',
    color: '#FF6B6B',
  },
  {
    name: 'Sunita Patel',
    role: 'CEO, SP Travels, Bhopal',
    text: 'Website redesign was exactly what we needed. Traffic increased 3x after launch. SEO results are amazing. Very professional team.',
    rating: 5,
    avatar: 'SP',
    color: '#FFB347',
  },
]

const team = [
  {
    name: 'Sumit',
    role: 'Tech Lead & Full Stack Dev',
    skills: 'React · Node.js · DevOps',
    avatar: 'SU',
    color: '#6C63FF',
    founder: true,
  },
  {
    name: 'Riya',
    role: 'UI/UX & Frontend Dev',
    skills: 'Figma · React · CSS',
    avatar: 'RI',
    color: '#00D4AA',
    founder: true,
  },
  {
    name: 'Kashish',
    role: 'Backend Developer',
    skills: 'Node.js · PHP · MySQL',
    avatar: 'KA',
    color: '#FFB347',
    founder: false,
  },
  {
    name: 'Somya',
    role: 'Digital Marketing & SEO',
    skills: 'SEO · Google Ads · Content',
    avatar: 'SO',
    color: '#FF6B6B',
    founder: false,
  },
]

const whyUs = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'Agile process. MVP in 2–4 weeks, full projects on schedule.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden costs. Fixed quotes upfront, starting ₹15,000.' },
  { icon: '💬', title: '24/7 Support', desc: 'WhatsApp, email and call support. We respond within 2 hours.' },
  { icon: '🔧', title: 'Any Tech Stack', desc: 'PHP to Node.js, React to Flutter. Every technology covered.' },
  { icon: '📄', title: '100% Code Ownership', desc: 'Full source code delivered to you. No lock-ins ever.' },
  { icon: '🔒', title: 'NDA Protected', desc: 'Your idea stays yours. We sign NDA before project starts.' },
]

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────

function StatCard({ value, suffix, label, start }) {
  const count = useCountUp(value, 2000, start)
  return (
    <div className="home-stat">
      <span className="home-stat__value">
        {count}{suffix}
      </span>
      <span className="home-stat__label">{label}</span>
    </div>
  )
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Home() {
  const [statsRef, statsInView] = useInView(0.3)
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero">
        {/* Animated grid bg */}
        <div className="hero__grid" />
        {/* Glow orbs */}
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />

        <div className={`container hero__inner ${heroLoaded ? 'hero__inner--loaded' : ''}`}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for new projects · Jabalpur, MP
          </div>

          <h1 className="hero__title">
            We Build Digital Products<br />
            <span className="gradient-text">That Drive Results</span>
          </h1>

          <p className="hero__subtitle">
            Custom software, web & mobile apps for hospitals, schools, startups and enterprises.
            From PHP to Node.js — we work on every stack.
          </p>

          <div className="hero__actions">
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20Pixel%20Labs!%20I%20need%20a%20free%20consultation."
              target="_blank"
              rel="noreferrer"
              className="btn-primary hero__btn-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Get Free Consultation
            </a>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-text">Trusted by businesses across MP & India</span>
            <div className="hero__trust-avatars">
              {['RS','PV','AJ','SP','MK'].map((a, i) => (
                <div key={i} className="hero__trust-avatar" style={{ zIndex: 5 - i }}>
                  {a}
                </div>
              ))}
              <span className="hero__trust-count">50+ clients</span>
            </div>
          </div>
        </div>

        {/* Floating code card */}
        <div className={`hero__code-card ${heroLoaded ? 'hero__code-card--loaded' : ''}`}>
          <div className="hero__code-header">
            <span className="hero__code-dot" style={{ background: '#FF5F57' }} />
            <span className="hero__code-dot" style={{ background: '#FFBD2E' }} />
            <span className="hero__code-dot" style={{ background: '#28C840' }} />
            <span className="hero__code-filename">pixellabs.js</span>
          </div>
          <pre className="hero__code-body">{`const agency = {
  name: "Pixel Labs",
  location: "Jabalpur, MP",
  expertise: [
    "Web Development",
    "Mobile Apps",
    "Custom Software",
    "AI Solutions",
  ],
  deliver: () => "🚀 On Time",
}`}</pre>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="home-stats section" ref={statsRef}>
        <div className="container">
          <div className="home-stats__grid">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} start={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="home-services section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Services Built for <span className="gradient-text">Real Business</span>
            </h2>
            <p className="section-subtitle">
              From a simple landing page to a full enterprise ERP — we've got every digital need covered.
            </p>
          </div>
          <div className="home-services__grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-card__icon" style={{ color: `var(${s.color})` }}>
                  {s.icon}
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <div className="service-card__tags">
                  {s.tags.map(t => (
                    <span key={t} className="service-card__tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="home-process section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">
              Simple <span className="gradient-text">4-Step Process</span>
            </h2>
          </div>
          <div className="home-process__grid">
            {process.map((p, i) => (
              <div key={i} className="process-card">
                <div className="process-card__step">{p.step}</div>
                <div className="process-card__icon">{p.icon}</div>
                <h3 className="process-card__title">{p.title}</h3>
                <p className="process-card__desc">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="process-card__arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="home-industries section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Industries We Serve</span>
            <h2 className="section-title">
              Solutions for <span className="gradient-text">Every Sector</span>
            </h2>
          </div>
          <div className="home-industries__grid">
            {industries.map((ind, i) => (
              <div key={i} className="industry-card">
                <span className="industry-card__icon">{ind.icon}</span>
                <div>
                  <h4 className="industry-card__name">{ind.name}</h4>
                  <p className="industry-card__desc">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="home-portfolio section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Work</span>
            <h2 className="section-title">
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Real solutions delivered to real clients.
            </p>
          </div>
          <div className="home-portfolio__grid">
            {portfolio.map((p, i) => (
              <div key={i} className="portfolio-card">
                <div className="portfolio-card__mockup" style={{ background: `${p.color}18` }}>
                  <span className="portfolio-card__emoji">{p.mockup}</span>
                  <div className="portfolio-card__glow" style={{ background: p.color }} />
                </div>
                <div className="portfolio-card__body">
                  <span className="portfolio-card__cat">{p.category}</span>
                  <h3 className="portfolio-card__title">{p.title}</h3>
                  <p className="portfolio-card__desc">{p.desc}</p>
                  <div className="portfolio-card__tags">
                    {p.tags.map(t => (
                      <span key={t} className="portfolio-card__tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/portfolio" className="btn-outline">View All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="home-why section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Pixel Labs</span>
            <h2 className="section-title">
              Why Clients <span className="gradient-text">Choose Us</span>
            </h2>
          </div>
          <div className="home-why__grid">
            {whyUs.map((w, i) => (
              <div key={i} className="why-card">
                <span className="why-card__icon">{w.icon}</span>
                <h3 className="why-card__title">{w.title}</h3>
                <p className="why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="home-testimonials section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Reviews</span>
            <h2 className="section-title">
              What Clients <span className="gradient-text">Say About Us</span>
            </h2>
          </div>
          <div className="home-testimonials__grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div
                    className="testimonial-card__avatar"
                    style={{ background: `${t.color}22`, color: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="home-team section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Team</span>
            <h2 className="section-title">
              The People Behind <span className="gradient-text">Pixel Labs</span>
            </h2>
          </div>
          <div className="home-team__grid">
            {team.map((m, i) => (
              <div key={i} className="team-card">
                <div
                  className="team-card__avatar"
                  style={{ background: `${m.color}22`, color: m.color }}
                >
                  {m.avatar}
                  {m.founder && (
                    <span className="team-card__founder-badge">Co-founder</span>
                  )}
                </div>
                <h3 className="team-card__name">{m.name}</h3>
                <p className="team-card__role">{m.role}</p>
                <p className="team-card__skills">{m.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING BANNER ── */}
      <section className="home-training section">
        <div className="container">
          <div className="home-training__card">
            <div className="home-training__badge">Coming Soon</div>
            <h2 className="home-training__title">
              🎓 Offline Training Center — <span className="gradient-text">Jabalpur</span>
            </h2>
            <p className="home-training__desc">
              Learn Web Development, Mobile Apps, and AI from industry experts. Practical, job-ready training programs starting soon.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20join%20the%20Pixel%20Labs%20training%20waitlist."
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Join Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="home-cta section">
        <div className="container">
          <div className="home-cta__inner">
            <h2 className="home-cta__title">
              Got a project in mind?<br />
              <span className="gradient-text">Let's build it together.</span>
            </h2>
            <p className="home-cta__sub">
              Free consultation · No obligation · Reply within 2 hours
            </p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}