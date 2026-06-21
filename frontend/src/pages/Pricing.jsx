import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for small businesses & startups',
    price: { one: '₹15,000', monthly: '₹3,000' },
    color: '#00D4AA',
    features: [
      '5–7 page responsive website',
      'Modern UI design',
      'Contact form integration',
      'Basic SEO setup',
      'Mobile optimized',
      '1 month free support',
      'Source code handover',
    ],
    notIncluded: ['Admin panel', 'Payment integration', 'Custom backend'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    tagline: 'For growing businesses that need more',
    price: { one: '₹40,000', monthly: '₹8,000' },
    color: '#6C63FF',
    features: [
      'Full web app or business website',
      'Custom backend + Admin panel',
      'Payment gateway (Razorpay)',
      'Database design & API',
      'SEO optimization',
      'WhatsApp & email integration',
      '3 months free support',
      'Source code handover',
      'Deployment included',
    ],
    notIncluded: ['Mobile app', 'AI features'],
    cta: 'Most Popular — Get Quote',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For hospitals, schools & large organizations',
    price: { one: 'Custom', monthly: 'Custom' },
    color: '#FF6B6B',
    features: [
      'Full custom ERP / HMS / LMS',
      'Mobile app (iOS + Android)',
      'Advanced admin & role management',
      'Third-party API integrations',
      'AI & automation features',
      'Data migration from old system',
      '1 year AMC included',
      'Dedicated project manager',
      'On-site training (Jabalpur)',
      'Source code + documentation',
    ],
    notIncluded: [],
    cta: 'Talk to Us',
    popular: false,
  },
]

const addons = [
  { name: 'SEO Package', price: '₹8,000/mo', desc: 'Full on-page + technical SEO + GMB' },
  { name: 'Website Maintenance', price: '₹3,000/mo', desc: 'Bug fixes, updates, monitoring' },
  { name: 'Digital Marketing', price: '₹10,000/mo', desc: 'Google Ads + Meta Ads + Social' },
  { name: 'Extra Pages', price: '₹2,000/page', desc: 'Additional pages beyond plan' },
  { name: 'Mobile App Add-on', price: '₹25,000+', desc: 'React Native iOS + Android app' },
  { name: 'AI Chatbot', price: '₹15,000+', desc: 'Custom AI chatbot for your website' },
]

const faqs = [
  {
    q: 'Do you offer EMI or payment in installments?',
    a: 'Yes! We typically take 50% advance and 50% on delivery. For larger projects, we can split into 3 milestones — 30% advance, 40% mid-delivery, 30% final.',
  },
  {
    q: 'What happens after the free support period ends?',
    a: 'After the free support period, you can opt for our AMC (Annual Maintenance Contract) starting ₹3,000/month, or pay per-issue. We never leave you hanging.',
  },
  {
    q: 'Will I own the source code?',
    a: 'Absolutely. 100% source code is yours. We hand over complete code, database, and documentation after final payment. No lock-ins.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Simple websites: 1–2 weeks. Web apps: 4–8 weeks. Custom ERP/HMS: 8–16 weeks. We give you a realistic timeline in the proposal, not just what you want to hear.',
  },
  {
    q: 'Can you work on our existing project?',
    a: 'Yes! We can take over, fix bugs, add features, or redesign your existing website or app — regardless of who built it originally.',
  },
  {
    q: 'Do you sign NDA?',
    a: 'Yes, we sign NDA before every project starts. Your idea, data and business information stay 100% confidential.',
  },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="pricing-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container">
          <span className="section-tag">Transparent Pricing</span>
          <h1 className="page-hero__title">
            No Hidden Costs. <span className="gradient-text">Ever.</span>
          </h1>
          <p className="page-hero__sub">
            Fixed quotes upfront. What we quote is what you pay. Choose a plan or get a custom quote for your project.
          </p>
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((p, i) => (
              <div
                key={i}
                className={`pricing-card ${p.popular ? 'pricing-card--popular' : ''}`}
                style={{ '--card-color': p.color }}
              >
                {p.popular && (
                  <div className="pricing-card__badge">⭐ Most Popular</div>
                )}
                <div className="pricing-card__header">
                  <h3 className="pricing-card__name">{p.name}</h3>
                  <p className="pricing-card__tagline">{p.tagline}</p>
                  <div className="pricing-card__price">
                    <span className="pricing-card__amount">{p.price.one}</span>
                    {p.price.one !== 'Custom' && (
                      <span className="pricing-card__note">one-time</span>
                    )}
                  </div>
                </div>

                <div className="pricing-card__body">
                  <ul className="pricing-card__features">
                    {p.features.map(f => (
                      <li key={f} className="pricing-card__feature pricing-card__feature--yes">
                        <span className="pricing-card__check">✓</span>
                        {f}
                      </li>
                    ))}
                    {p.notIncluded.map(f => (
                      <li key={f} className="pricing-card__feature pricing-card__feature--no">
                        <span className="pricing-card__cross">✗</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-card__footer">
                  <a
                    href={`https://wa.me/7509955205?text=Hi! I'm interested in the ${p.name} plan.`}
                    target="_blank"
                    rel="noreferrer"
                    className={p.popular ? 'btn-primary' : 'btn-outline'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span style={{display:'flex', alignItems:'center', gap:'4px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{marginRight:'6px', verticalAlign:'middle', flexShrink:0}} fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                      {p.cta}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            💡 All prices are starting rates. Final quote depends on requirements. Get a free detailed estimate — no obligation.
          </p>
        </div>
      </section>

      {/* ── ADD-ONS ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Add-ons</span>
            <h2 className="section-title">
              Supercharge Your <span className="gradient-text">Project</span>
            </h2>
            <p className="section-subtitle">Add these services to any plan for maximum impact.</p>
          </div>
          <div className="addons-grid">
            {addons.map((a, i) => (
              <div key={i} className="addon-card">
                <div className="addon-card__left">
                  <h4 className="addon-card__name">{a.name}</h4>
                  <p className="addon-card__desc">{a.desc}</p>
                </div>
                <div className="addon-card__right">
                  <span className="addon-card__price">{a.price}</span>
                  <a
                    href="https://wa.me/7509955205?text=Hi! I want to add an extra service."
                    target="_blank"
                    rel="noreferrer"
                    className="addon-card__btn"
                  >
                    <span style={{display:'flex', alignItems:'center', gap:'4px'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{marginRight:'6px', verticalAlign:'middle', flexShrink:0}} fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                      Add →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Not Freelancers?</span>
            <h2 className="section-title">
              Pixel Labs vs <span className="gradient-text">Others</span>
            </h2>
          </div>
          <div className="compare-table">
            <div className="compare-table__header">
              <div className="compare-table__col compare-table__col--feature" />
              <div className="compare-table__col compare-table__col--us">Pixel Labs</div>
              <div className="compare-table__col">Freelancer</div>
              <div className="compare-table__col">Other Agency</div>
            </div>
            {[
              ['Fixed price quote', '✓', '✗', '✓'],
              ['On-time delivery', '✓', '✗', '~'],
              ['Post-launch support', '✓', '✗', '₹₹₹'],
              ['Source code ownership', '✓', '~', '✗'],
              ['NDA signing', '✓', '~', '✓'],
              ['24/7 WhatsApp support', '✓', '✗', '✗'],
              ['Local team (Jabalpur)', '✓', '✗', '✗'],
              ['Transparent pricing', '✓', '✗', '✗'],
            ].map(([feat, us, free, agency], i) => (
              <div key={i} className={`compare-table__row ${i % 2 === 0 ? 'compare-table__row--alt' : ''}`}>
                <div className="compare-table__col compare-table__col--feature">{feat}</div>
                <div className="compare-table__col compare-table__col--us">
                  <span className={us === '✓' ? 'compare-yes' : 'compare-no'}>{us}</span>
                </div>
                <div className="compare-table__col">
                  <span className={free === '✓' ? 'compare-yes' : free === '~' ? 'compare-maybe' : 'compare-no'}>{free}</span>
                </div>
                <div className="compare-table__col">
                  <span className={agency === '✓' ? 'compare-yes' : agency === '~' ? 'compare-maybe' : 'compare-no'}>{agency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                  <span className={`faq-item__arrow ${openFaq === i ? 'faq-item__arrow--open' : ''}`}>↓</span>
                </button>
                <div className="faq-item__a">
                  <p>{f.a}</p>
                </div>
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
              Ready to get started?<br />
              <span className="gradient-text">Get a free quote today.</span>
            </h2>
            <p className="home-cta__sub">Reply within 2 hours · No commitment · 100% free consultation</p>
            <div className="home-cta__actions">
              <Link to="/contact" className="btn-primary">Get Free Quote</Link>
              <a
                href="https://wa.me/7509955205"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <span style={{display:'flex', alignItems:'center', gap:'4px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{marginRight:'6px', verticalAlign:'middle', flexShrink:0}} fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
