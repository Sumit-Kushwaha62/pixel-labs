import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Web Development',
    tagline: 'Fast, modern, scalable websites & web apps',
    desc: 'We build everything from simple landing pages to complex enterprise web applications. Every project is built with performance, SEO and scalability in mind.',
    features: [
      'Custom website design & development',
      'Single Page Applications (React, Vue)',
      'Full-stack web apps (Node.js, PHP)',
      'eCommerce stores with payment integration',
      'Admin dashboards & CRM systems',
      'API development & third-party integrations',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'MySQL', 'MongoDB'],
    price: '₹15,000',
    color: '#6C63FF',
    time: '1–4 weeks',
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile App Development',
    tagline: 'iOS & Android apps that users love',
    desc: 'Cross-platform mobile apps built with React Native and Flutter. One codebase, two platforms — without compromising on performance or user experience.',
    features: [
      'Cross-platform iOS & Android apps',
      'Native-like performance & animations',
      'Offline functionality support',
      'Push notifications & real-time updates',
      'Payment gateway integration',
      'App Store & Play Store deployment',
    ],
    tech: ['React Native', 'Flutter', 'Firebase', 'Supabase', 'REST APIs'],
    price: '₹40,000',
    color: '#00D4AA',
    time: '4–8 weeks',
  },
  {
    id: 'custom',
    icon: '⚙️',
    title: 'Custom Software',
    tagline: 'Tailor-made software for your exact needs',
    desc: 'No off-the-shelf solution fits your business perfectly. We build custom ERP, CRM, HMS, and management systems designed exactly around your workflow.',
    features: [
      'Hospital Management System (HMS)',
      'School / College ERP',
      'NGO & Trust management portal',
      'Inventory & POS systems',
      'HR & Payroll management',
      'Clinic appointment & EMR system',
    ],
    tech: ['React', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'Redis'],
    price: '₹50,000',
    color: '#FF6B6B',
    time: '6–16 weeks',
  },
  {
    id: 'seo',
    icon: '📈',
    title: 'SEO Optimization',
    tagline: 'Rank higher. Get found. Grow organically.',
    desc: 'We help businesses in Jabalpur and across India dominate Google search results. Technical SEO, content strategy, and local SEO that actually delivers results.',
    features: [
      'Full website SEO audit',
      'On-page & technical SEO fixes',
      'Google My Business (GMB) setup & optimization',
      'Local SEO for MP & India',
      'Keyword research & content strategy',
      'Monthly ranking reports',
    ],
    tech: ['Google Search Console', 'Ahrefs', 'Semrush', 'GMB', 'Schema Markup'],
    price: '₹8,000/mo',
    color: '#FFB347',
    time: '3–6 months results',
  },
  {
    id: 'redesign',
    icon: '🎨',
    title: 'Website Redesign',
    tagline: 'Transform your outdated site into a conversion machine',
    desc: 'Is your website looking like it was built in 2010? We redesign websites with modern UI/UX that builds trust, reduces bounce rate and converts visitors into customers.',
    features: [
      'Complete UI/UX redesign',
      'Mobile-first responsive design',
      'Speed & performance optimization',
      'Modern design with brand consistency',
      'Content migration from old site',
      'SEO-friendly structure',
    ],
    tech: ['Figma', 'React', 'CSS3', 'GSAP', 'Framer Motion'],
    price: '₹20,000',
    color: '#A855F7',
    time: '2–5 weeks',
  },
  {
    id: 'maintenance',
    icon: '🔧',
    title: 'Website Maintenance',
    tagline: '24/7 monitoring & support so you can focus on business',
    desc: 'Your website is your 24/7 salesperson. We make sure it stays fast, secure, and up-to-date. Flexible AMC plans for every budget.',
    features: [
      '24/7 uptime monitoring',
      'Bug fixes & error resolution',
      'Security updates & patches',
      'Regular backups',
      'Performance optimization',
      'Content updates & minor changes',
    ],
    tech: ['Cloudflare', 'AWS', 'Render', 'Vercel', 'Supabase'],
    price: '₹3,000/mo',
    color: '#06B6D4',
    time: 'Ongoing AMC',
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI & Automation',
    tagline: 'Save time, reduce costs, scale faster with AI',
    desc: 'We integrate AI into your business workflows — chatbots, voice agents, document automation and custom AI tools that save hours of manual work every day.',
    features: [
      'AI chatbots for customer support',
      'Voice AI agents for calls',
      'Document processing automation',
      'CRM & lead management automation',
      'Custom AI tools & dashboards',
      'WhatsApp business automation',
    ],
    tech: ['OpenAI', 'Gemini', 'Bolna.ai', 'Langchain', 'Zapier', 'Node.js'],
    price: '₹25,000',
    color: '#6C63FF',
    time: '2–6 weeks',
  },
  {
    id: 'marketing',
    icon: '📣',
    title: 'Digital Marketing',
    tagline: 'Grow your online presence & get more leads',
    desc: 'From Google Ads to Instagram reels — we create data-driven digital marketing campaigns that bring real customers, not just clicks.',
    features: [
      'Google Ads (Search & Display)',
      'Meta Ads (Facebook & Instagram)',
      'Social media management',
      'Content creation & copywriting',
      'Email marketing campaigns',
      'Monthly analytics & ROI reports',
    ],
    tech: ['Google Ads', 'Meta Ads', 'Mailchimp', 'Canva', 'Analytics'],
    price: '₹10,000/mo',
    color: '#00D4AA',
    time: 'Results in 30 days',
  },
]

const categories = ['All', 'Development', 'Marketing', 'Support']
const categoryMap = {
  Development: ['web', 'mobile', 'custom', 'redesign', 'ai'],
  Marketing: ['seo', 'marketing'],
  Support: ['maintenance'],
}

export default function Services() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All'
    ? services
    : services.filter(s => categoryMap[active]?.includes(s.id))

  return (
    <div className="services-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container">
          <span className="section-tag">What We Offer</span>
          <h1 className="page-hero__title">
            Services That <span className="gradient-text">Solve Real Problems</span>
          </h1>
          <p className="page-hero__sub">
            From a simple website to a full enterprise platform — every service is delivered with transparency, quality and on-time commitment.
          </p>
        </div>
      </section>

      {/* ── FILTER ── */}
      <section className="services-filter section">
        <div className="container">
          <div className="services-filter__tabs">
            {categories.map(c => (
              <button
                key={c}
                className={`services-filter__tab ${active === c ? 'services-filter__tab--active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filtered.map((s, i) => (
              <div
                key={s.id}
                className={`service-detail-card ${selected === s.id ? 'service-detail-card--open' : ''}`}
                style={{ '--card-color': s.color }}
              >
                {/* Card Header */}
                <div
                  className="service-detail-card__header"
                  onClick={() => setSelected(selected === s.id ? null : s.id)}
                >
                  <div className="service-detail-card__left">
                    <span className="service-detail-card__icon">{s.icon}</span>
                    <div>
                      <h3 className="service-detail-card__title">{s.title}</h3>
                      <p className="service-detail-card__tagline">{s.tagline}</p>
                    </div>
                  </div>
                  <div className="service-detail-card__right">
                    <div className="service-detail-card__meta">
                      <span className="service-detail-card__price">From {s.price}</span>
                      <span className="service-detail-card__time">⏱ {s.time}</span>
                    </div>
                    <span className={`service-detail-card__toggle ${selected === s.id ? 'service-detail-card__toggle--open' : ''}`}>
                      ↓
                    </span>
                  </div>
                </div>

                {/* Expanded Content */}
                <div className="service-detail-card__body">
                  <p className="service-detail-card__desc">{s.desc}</p>
                  <div className="service-detail-card__cols">
                    <div>
                      <h4 className="service-detail-card__sub">What's Included</h4>
                      <ul className="service-detail-card__features">
                        {s.features.map(f => (
                          <li key={f}>
                            <span className="service-detail-card__check">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="service-detail-card__sub">Tech Stack</h4>
                      <div className="service-detail-card__tech">
                        {s.tech.map(t => (
                          <span key={t} className="service-detail-card__tech-tag">{t}</span>
                        ))}
                      </div>
                      <div className="service-detail-card__cta">
                        <a
                          href={`https://wa.me/7509955205?text=Hi! I'm interested in ${s.title} service.`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary"
                        >
                          Get Quote for {s.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We <span className="gradient-text">Deliver</span></h2>
          </div>
          <div className="services-process">
            {[
              { n: '01', t: 'Free Consultation', d: 'Tell us your idea. We listen, ask questions, and understand your exact requirements.' },
              { n: '02', t: 'Proposal', d: 'You get a detailed proposal with scope, timeline, tech stack and fixed pricing. No surprises.' },
              { n: '03', t: 'Development', d: 'Agile sprints. Weekly updates. You see progress at every stage — no black box development.' },
              { n: '04', t: 'Launch & Support', d: 'We deploy, test, and hand over. Post-launch support included. We don\'t disappear.' },
            ].map((p, i) => (
              <div key={i} className="services-process__step">
                <div className="services-process__num">{p.n}</div>
                <h3 className="services-process__title">{p.t}</h3>
                <p className="services-process__desc">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="home-cta__inner">
            <h2 className="home-cta__title">
              Not sure which service you need?<br />
              <span className="gradient-text">Let's talk — it's free.</span>
            </h2>
            <p className="home-cta__sub">
              30-minute free consultation · No obligation · Expert advice
            </p>
            <div className="home-cta__actions">
              <a
                href="https://wa.me/7509955205?text=Hi! I need help choosing the right service."
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                WhatsApp Us Now
              </a>
              <Link to="/pricing" className="btn-outline">View Pricing →</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}