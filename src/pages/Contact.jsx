import { useState } from 'react'

const contactMethods = [
  {
    icon: '💬',
    title: 'WhatsApp',
    desc: 'Fastest response — reply within 1 hour',
    action: 'Chat Now',
    href: 'https://wa.me/7509955205?text=Hi%20Pixel%20Labs!%20I%20want%20to%20discuss%20a%20project.',
    color: '#25D366',
  },
  {
    icon: '📧',
    title: 'Email',
    desc: 'hello@pixellabs.in',
    action: 'Send Email',
    href: 'mailto:hello@pixellabs.in',
    color: '#6C63FF',
  },
  {
    icon: '📞',
    title: 'Phone',
    desc: '+91 XXXXX XXXXX',
    action: 'Call Now',
    href: 'tel:+7509955205',
    color: '#00D4AA',
  },
  {
    icon: '📍',
    title: 'Location',
    desc: 'Jabalpur, Madhya Pradesh, India',
    action: 'Get Directions',
    href: 'https://maps.google.com/?q=Jabalpur,Madhya+Pradesh',
    color: '#FF6B6B',
  },
]

const services = [
  'Web Development',
  'Mobile App Development',
  'Custom Software / ERP',
  'Hospital / School Management System',
  'SEO Optimization',
  'Website Redesign',
  'Website Maintenance',
  'AI & Automation',
  'Digital Marketing',
  'Other',
]

const budgets = [
  'Under ₹15,000',
  '₹15,000 – ₹40,000',
  '₹40,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
]

// Google Forms prefilled URL — replace with your actual form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Send to Google Forms via fetch (no-cors)
    const formData = new FormData()
    // Replace entry.XXXXXXXXX with your actual Google Form entry IDs
    formData.append('entry.111111111', form.name)
    formData.append('entry.222222222', form.email)
    formData.append('entry.333333333', form.phone)
    formData.append('entry.444444444', form.service)
    formData.append('entry.555555555', form.budget)
    formData.append('entry.666666666', form.message)

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="page-hero__title">
            Let's Talk About <span className="gradient-text">Your Project</span>
          </h1>
          <p className="page-hero__sub">
            Free consultation · No obligation · Reply within 2 hours
          </p>
        </div>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section className="section">
        <div className="container">
          <div className="contact-methods">
            {contactMethods.map((m, i) => (
              <a
                key={i}
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="contact-method"
                style={{ '--card-color': m.color }}
              >
                <span className="contact-method__icon">{m.icon}</span>
                <div>
                  <h3 className="contact-method__title">{m.title}</h3>
                  <p className="contact-method__desc">{m.desc}</p>
                </div>
                <span className="contact-method__action">{m.action} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-layout">

            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-wrap__title">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="contact-form-wrap__sub">
                Fill in the details below — we'll get back to you within 2 hours on WhatsApp or email.
              </p>

              {status === 'sent' ? (
                <div className="contact-success">
                  <span className="contact-success__icon">🎉</span>
                  <h3>Message Sent Successfully!</h3>
                  <p>We've received your enquiry. Expect a reply within 2 hours on WhatsApp or email.</p>
                  <button
                    className="btn-primary"
                    onClick={() => setStatus(null)}
                    style={{ marginTop: 20 }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ramesh Sharma"
                        required
                      />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label className="contact-form__label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ramesh@example.com"
                    />
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label">Service Required *</label>
                      <select name="service" value={form.service} onChange={handleChange} required>
                        <option value="">Select a service...</option>
                        {services.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select budget...</option>
                        {budgets.map(b => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label className="contact-form__label">Project Details *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — what do you want to build, who is it for, any special requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className="contact-form__error">
                      Something went wrong. Please WhatsApp us directly at +91 XXXXX XXXXX
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary contact-form__submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="contact-form__spinner" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message →</>
                    )}
                  </button>

                  <p className="contact-form__note">
                    🔒 Your information is 100% confidential. We sign NDA on request.
                  </p>
                </form>
              )}
            </div>

            {/* Info Panel */}
            <div className="contact-info">
              <div className="contact-info__card">
                <h3 className="contact-info__title">Why Contact Us?</h3>
                <ul className="contact-info__list">
                  {[
                    'Free 30-min project consultation',
                    'Honest advice — even if we\'re not the right fit',
                    'Detailed proposal within 24 hours',
                    'Fixed quote, no hidden charges',
                    'NDA signed before project starts',
                    'Local team in Jabalpur, MP',
                  ].map((item, i) => (
                    <li key={i} className="contact-info__item">
                      <span className="contact-info__check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-info__card">
                <h3 className="contact-info__title">Working Hours</h3>
                <div className="contact-hours">
                  <div className="contact-hours__row">
                    <span>Monday – Saturday</span>
                    <span className="contact-hours__time">9 AM – 7 PM</span>
                  </div>
                  <div className="contact-hours__row">
                    <span>Sunday</span>
                    <span className="contact-hours__time">10 AM – 4 PM</span>
                  </div>
                  <div className="contact-hours__row">
                    <span>WhatsApp Support</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 600 }}>24/7</span>
                  </div>
                </div>
              </div>

              <div className="contact-info__card">
                <h3 className="contact-info__title">Response Time</h3>
                <div className="contact-response">
                  <div className="contact-response__item">
                    <span className="contact-response__icon">💬</span>
                    <div>
                      <p className="contact-response__channel">WhatsApp</p>
                      <p className="contact-response__time">Within 1 hour</p>
                    </div>
                  </div>
                  <div className="contact-response__item">
                    <span className="contact-response__icon">📧</span>
                    <div>
                      <p className="contact-response__channel">Email</p>
                      <p className="contact-response__time">Within 4 hours</p>
                    </div>
                  </div>
                  <div className="contact-response__item">
                    <span className="contact-response__icon">📋</span>
                    <div>
                      <p className="contact-response__channel">Project Proposal</p>
                      <p className="contact-response__time">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
