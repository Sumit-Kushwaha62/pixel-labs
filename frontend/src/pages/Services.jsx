// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// const services = [
//   {
//     id: 'web',
//     icon: '🌐',
//     title: 'Web Development',
//     tagline: 'Fast, modern, scalable websites & web apps',
//     desc: 'We build everything from simple landing pages to complex enterprise web applications. Every project is built with performance, SEO and scalability in mind.',
//     features: [
//       'Custom website design & development',
//       'Single Page Applications (React, Vue)',
//       'Full-stack web apps (Node.js, PHP)',
//       'eCommerce stores with payment integration',
//       'Admin dashboards & CRM systems',
//       'API development & third-party integrations',
//     ],
//     tech: ['React', 'Next.js', 'Node.js', 'PHP', 'Laravel', 'MySQL', 'MongoDB'],
//     price: '₹15,000',
//     color: '#6C63FF',
//     time: '1–4 weeks',
//   },
//   {
//     id: 'mobile',
//     icon: '📱',
//     title: 'Mobile App Development',
//     tagline: 'iOS & Android apps that users love',
//     desc: 'Cross-platform mobile apps built with React Native and Flutter. One codebase, two platforms — without compromising on performance or user experience.',
//     features: [
//       'Cross-platform iOS & Android apps',
//       'Native-like performance & animations',
//       'Offline functionality support',
//       'Push notifications & real-time updates',
//       'Payment gateway integration',
//       'App Store & Play Store deployment',
//     ],
//     tech: ['React Native', 'Flutter', 'Firebase', 'Supabase', 'REST APIs'],
//     price: '₹40,000',
//     color: '#00D4AA',
//     time: '4–8 weeks',
//   },
//   {
//     id: 'custom',
//     icon: '⚙️',
//     title: 'Custom Software',
//     tagline: 'Tailor-made software for your exact needs',
//     desc: 'No off-the-shelf solution fits your business perfectly. We build custom ERP, CRM, HMS, and management systems designed exactly around your workflow.',
//     features: [
//       'Hospital Management System (HMS)',
//       'School / College ERP',
//       'NGO & Trust management portal',
//       'Inventory & POS systems',
//       'HR & Payroll management',
//       'Clinic appointment & EMR system',
//     ],
//     tech: ['React', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'Redis'],
//     price: '₹50,000',
//     color: '#FF6B6B',
//     time: '6–16 weeks',
//   },
//   {
//     id: 'seo',
//     icon: '📈',
//     title: 'SEO Optimization',
//     tagline: 'Rank higher. Get found. Grow organically.',
//     desc: 'We help businesses in Jabalpur and across India dominate Google search results. Technical SEO, content strategy, and local SEO that actually delivers results.',
//     features: [
//       'Full website SEO audit',
//       'On-page & technical SEO fixes',
//       'Google My Business (GMB) setup & optimization',
//       'Local SEO for MP & India',
//       'Keyword research & content strategy',
//       'Monthly ranking reports',
//     ],
//     tech: ['Google Search Console', 'Ahrefs', 'Semrush', 'GMB', 'Schema Markup'],
//     price: '₹8,000/mo',
//     color: '#FFB347',
//     time: '3–6 months results',
//   },
//   {
//     id: 'redesign',
//     icon: '🎨',
//     title: 'Website Redesign',
//     tagline: 'Transform your outdated site into a conversion machine',
//     desc: 'Is your website looking like it was built in 2010? We redesign websites with modern UI/UX that builds trust, reduces bounce rate and converts visitors into customers.',
//     features: [
//       'Complete UI/UX redesign',
//       'Mobile-first responsive design',
//       'Speed & performance optimization',
//       'Modern design with brand consistency',
//       'Content migration from old site',
//       'SEO-friendly structure',
//     ],
//     tech: ['Figma', 'React', 'CSS3', 'GSAP', 'Framer Motion'],
//     price: '₹20,000',
//     color: '#A855F7',
//     time: '2–5 weeks',
//   },
//   {
//     id: 'maintenance',
//     icon: '🔧',
//     title: 'Website Maintenance',
//     tagline: '24/7 monitoring & support so you can focus on business',
//     desc: 'Your website is your 24/7 salesperson. We make sure it stays fast, secure, and up-to-date. Flexible AMC plans for every budget.',
//     features: [
//       '24/7 uptime monitoring',
//       'Bug fixes & error resolution',
//       'Security updates & patches',
//       'Regular backups',
//       'Performance optimization',
//       'Content updates & minor changes',
//     ],
//     tech: ['Cloudflare', 'AWS', 'Render', 'Vercel', 'Supabase'],
//     price: '₹3,000/mo',
//     color: '#06B6D4',
//     time: 'Ongoing AMC',
//   },
//   {
//     id: 'ai',
//     icon: '🤖',
//     title: 'AI & Automation',
//     tagline: 'Save time, reduce costs, scale faster with AI',
//     desc: 'We integrate AI into your business workflows — chatbots, voice agents, document automation and custom AI tools that save hours of manual work every day.',
//     features: [
//       'AI chatbots for customer support',
//       'Voice AI agents for calls',
//       'Document processing automation',
//       'CRM & lead management automation',
//       'Custom AI tools & dashboards',
//       'WhatsApp business automation',
//     ],
//     tech: ['OpenAI', 'Gemini', 'Bolna.ai', 'Langchain', 'Zapier', 'Node.js'],
//     price: '₹25,000',
//     color: '#6C63FF',
//     time: '2–6 weeks',
//   },
//   {
//     id: 'marketing',
//     icon: '📣',
//     title: 'Digital Marketing',
//     tagline: 'Grow your online presence & get more leads',
//     desc: 'From Google Ads to Instagram reels — we create data-driven digital marketing campaigns that bring real customers, not just clicks.',
//     features: [
//       'Google Ads (Search & Display)',
//       'Meta Ads (Facebook & Instagram)',
//       'Social media management',
//       'Content creation & copywriting',
//       'Email marketing campaigns',
//       'Monthly analytics & ROI reports',
//     ],
//     tech: ['Google Ads', 'Meta Ads', 'Mailchimp', 'Canva', 'Analytics'],
//     price: '₹10,000/mo',
//     color: '#00D4AA',
//     time: 'Results in 30 days',
//   },
// ]

// const categories = ['All', 'Development', 'Marketing', 'Support']
// const categoryMap = {
//   Development: ['web', 'mobile', 'custom', 'redesign', 'ai'],
//   Marketing: ['seo', 'marketing'],
//   Support: ['maintenance'],
// }

// export default function Services() {
//   const [active, setActive] = useState('All')
//   const [selected, setSelected] = useState(null)

//   const filtered = active === 'All'
//     ? services
//     : services.filter(s => categoryMap[active]?.includes(s.id))

//   return (
//     <div className="services-page">

//       {/* ── HERO ── */}
//       <section className="page-hero">
//         <div className="page-hero__orb page-hero__orb--1" />
//         <div className="page-hero__orb page-hero__orb--2" />
//         <div className="container">
//           <span className="section-tag">What We Offer</span>
//           <h1 className="page-hero__title">
//             Services That <span className="gradient-text">Solve Real Problems</span>
//           </h1>
//           <p className="page-hero__sub">
//             From a simple website to a full enterprise platform — every service is delivered with transparency, quality and on-time commitment.
//           </p>
//         </div>
//       </section>

//       {/* ── FILTER ── */}
//       <section className="services-filter section">
//         <div className="container">
//           <div className="services-filter__tabs">
//             {categories.map(c => (
//               <button
//                 key={c}
//                 className={`services-filter__tab ${active === c ? 'services-filter__tab--active' : ''}`}
//                 onClick={() => setActive(c)}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>

//           <div className="services-grid">
//             {filtered.map(s => (
//               <div
//                 key={s.id}
//                 className={`service-detail-card ${selected === s.id ? 'service-detail-card--open' : ''}`}
//                 style={{ '--card-color': s.color }}
//               >
//                 {/* Card Header */}
//                 <div
//                   className="service-detail-card__header"
//                   onClick={() => setSelected(selected === s.id ? null : s.id)}
//                 >
//                   <div className="service-detail-card__left">
//                     <span className="service-detail-card__icon">{s.icon}</span>
//                     <div>
//                       <h3 className="service-detail-card__title">{s.title}</h3>
//                       <p className="service-detail-card__tagline">{s.tagline}</p>
//                     </div>
//                   </div>
//                   <div className="service-detail-card__right">
//                     <div className="service-detail-card__meta">
//                       <span className="service-detail-card__price">From {s.price}</span>
//                       <span className="service-detail-card__time">⏱ {s.time}</span>
//                     </div>
//                     <span className={`service-detail-card__toggle ${selected === s.id ? 'service-detail-card__toggle--open' : ''}`}>
//                       ↓
//                     </span>
//                   </div>
//                 </div>

//                 {/* Expanded Content */}
//                 <div className="service-detail-card__body">
//                   <p className="service-detail-card__desc">{s.desc}</p>
//                   <div className="service-detail-card__cols">
//                     <div>
//                       <h4 className="service-detail-card__sub">What's Included</h4>
//                       <ul className="service-detail-card__features">
//                         {s.features.map(f => (
//                           <li key={f}>
//                             <span className="service-detail-card__check">✓</span>
//                             {f}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="service-detail-card__sub">Tech Stack</h4>
//                       <div className="service-detail-card__tech">
//                         {s.tech.map(t => (
//                           <span key={t} className="service-detail-card__tech-tag">{t}</span>
//                         ))}
//                       </div>
//                       <div className="service-detail-card__cta">
//                         <a
//                           href={`https://wa.me/7509955205?text=Hi! I'm interested in ${s.title} service.`}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="btn-primary"
//                         >
//                           <span style={{display:'flex', alignItems:'center', gap:'4px'}}>
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{marginRight:'6px', verticalAlign:'middle', flexShrink:0}} fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
//                             Get Quote for {s.title}
//                           </span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PROCESS ── */}
//       <section className="section" style={{ background: 'var(--bg-card)' }}>
//         <div className="container">
//           <div className="section-header">
//             <span className="section-tag">Our Process</span>
//             <h2 className="section-title">How We <span className="gradient-text">Deliver</span></h2>
//           </div>
//           <div className="services-process">
//             {[
//               { n: '01', t: 'Free Consultation', d: 'Tell us your idea. We listen, ask questions, and understand your exact requirements.' },
//               { n: '02', t: 'Proposal', d: 'You get a detailed proposal with scope, timeline, tech stack and fixed pricing. No surprises.' },
//               { n: '03', t: 'Development', d: 'Agile sprints. Weekly updates. You see progress at every stage — no black box development.' },
//               { n: '04', t: 'Launch & Support', d: 'We deploy, test, and hand over. Post-launch support included. We don\'t disappear.' },
//             ].map((p, i) => (
//               <div key={i} className="services-process__step">
//                 <div className="services-process__num">{p.n}</div>
//                 <h3 className="services-process__title">{p.t}</h3>
//                 <p className="services-process__desc">{p.d}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <section className="section">
//         <div className="container">
//           <div className="home-cta__inner">
//             <h2 className="home-cta__title">
//               Not sure which service you need?<br />
//               <span className="gradient-text">Let's talk — it's free.</span>
//             </h2>
//             <p className="home-cta__sub">
//               30-minute free consultation · No obligation · Expert advice
//             </p>
//             <div className="home-cta__actions">
//               <a
//                 href="https://wa.me/7509955205?text=Hi! I need help choosing the right service."
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn-primary"
//               >
//                 <span style={{display:'flex', alignItems:'center', gap:'4px'}}>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{marginRight:'6px', verticalAlign:'middle', flexShrink:0}} fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
//                   WhatsApp Us Now
//                 </span>
//               </a>
//               <Link to="/pricing" className="btn-outline">View Pricing →</Link>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }












import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Web Development',
    tagline: 'Modern & Scalable Web Solutions',
    desc: 'We build fast, responsive, and SEO-friendly websites and web applications using cutting-edge technologies.',
    features: ['Custom Website Design', 'Single Page Applications', 'eCommerce Stores', 'Admin Dashboards', 'API Development'],
    tech: ['React', 'Next.js', 'Node.js', 'PHP', 'Laravel'],
    color: '#6C63FF',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'App Development',
    tagline: 'Cross-Platform Mobile Apps',
    desc: 'Native-like mobile applications for iOS and Android with a single codebase using React Native and Flutter.',
    features: ['iOS & Android Apps', 'Native Performance', 'Offline Support', 'Push Notifications', 'Payment Integration'],
    tech: ['React Native', 'Flutter', 'Firebase', 'Supabase'],
    color: '#00D4AA',
    gradient: 'from-teal-400 to-emerald-500',
  },
  {
    id: 'custom',
    icon: '⚙️',
    title: 'Custom Software',
    tagline: 'Tailor-Made Business Solutions',
    desc: 'Enterprise-grade custom software designed exactly for your business workflow and operational needs.',
    features: ['ERP Systems', 'Hospital Management', 'School Management', 'Inventory Systems', 'HR Management'],
    tech: ['React', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL'],
    color: '#FF6B6B',
    gradient: 'from-red-400 to-pink-500',
  },
  {
    id: 'seo',
    icon: '📈',
    title: 'SEO Optimization',
    tagline: 'Rank Higher, Get Found',
    desc: 'Data-driven SEO strategies to improve your Google rankings and drive organic traffic to your website.',
    features: ['Technical SEO', 'Local SEO', 'Content Strategy', 'GMB Optimization', 'Monthly Reports'],
    tech: ['Ahrefs', 'Semrush', 'Google Console', 'Schema Markup'],
    color: '#FFB347',
    gradient: 'from-orange-400 to-yellow-500',
  },
  {
    id: 'maintenance',
    icon: '🔧',
    title: 'Website Maintenance',
    tagline: '24/7 Support & Monitoring',
    desc: 'Comprehensive website maintenance services including security updates, backups, and performance optimization.',
    features: ['24/7 Uptime Monitoring', 'Security Updates', 'Regular Backups', 'Bug Fixes', 'Content Updates'],
    tech: ['Cloudflare', 'AWS', 'Vercel', 'Supabase'],
    color: '#06B6D4',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    id: 'redesign',
    icon: '🎨',
    title: 'Website Redesign',
    tagline: 'Transform Your Digital Presence',
    desc: 'Modern UI/UX redesign that converts visitors into customers with stunning, mobile-first designs.',
    features: ['UI/UX Redesign', 'Mobile-First Design', 'Performance Optimization', 'Brand Consistency', 'Content Migration'],
    tech: ['Figma', 'React', 'GSAP', 'Framer Motion'],
    color: '#A855F7',
    gradient: 'from-purple-400 to-violet-500',
  },
  {
    id: 'automation',
    icon: '🤖',
    title: 'Automation Systems',
    tagline: 'Workflow & Process Automation',
    desc: 'Intelligent automation solutions to streamline your business processes and eliminate manual work.',
    features: ['CRM Automation', 'Lead Management', 'Document Processing', 'Voice AI Agents', 'WhatsApp Automation'],
    tech: ['Zapier', 'OpenAI', 'Node.js', 'Python'],
    color: '#EC4899',
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    id: 'ai',
    icon: '🧠',
    title: 'AI & ML Solutions',
    tagline: 'Intelligent & Predictive Solutions',
    desc: 'Custom AI models, predictive analytics, and machine learning pipelines to unlock insights from your data.',
    features: ['Predictive Analytics', 'AI Chatbots', 'Computer Vision', 'NLP', 'Deep Learning'],
    tech: ['TensorFlow', 'Langchain', 'Gemini', 'Python'],
    color: '#8B5CF6',
    gradient: 'from-indigo-400 to-purple-500',
  },
]

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.service-card-video')
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="services-page">
      {/* ── HERO SECTION ── */}
      <section className="services-hero">
        <div className="services-hero__bg">
          <div className="services-hero__orb services-hero__orb--1"></div>
          <div className="services-hero__orb services-hero__orb--2"></div>
          <div className="services-hero__orb services-hero__orb--3"></div>
        </div>
        <div className="container">
          <div className="services-hero__content">
            <div className="services-hero__badge">
              <span className="services-hero__badge-dot"></span>
              Our Services
            </div>
            <h1 className="services-hero__title">
              <span className="gradient-text">Innovative</span> Solutions for
              <br />Modern Businesses
            </h1>
            <p className="services-hero__sub">
              From web development to AI solutions — we deliver cutting-edge technology
              that drives real business growth.
            </p>
            <div className="services-hero__actions">
              <a
                href="https://wa.me/7509955205"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '8px' }} fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Let's Talk
              </a>
              <Link to="/pricing" className="btn-outline">View Pricing →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="services-grid-section" ref={sectionRef}>
        <div className="container">
          <div className="services-grid-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">
              Services That <span className="gradient-text">Drive Impact</span>
            </h2>
            <p className="section-subtitle">
              Every service is crafted with precision, transparency, and a commitment to excellence.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card-video ${visibleCards.includes(index) ? 'service-card-video--visible' : ''}`}
                data-index={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ '--card-color': service.color }}
              >
                {/* Video-like animation overlay */}
                <div className="service-card-video__overlay">
                  <div className="service-card-video__scanline"></div>
                  <div className={`service-card-video__glow ${hoveredCard === index ? 'service-card-video__glow--active' : ''}`}></div>
                </div>

                {/* Card content */}
                <div className="service-card-video__content">
                  <div className="service-card-video__header">
                    <div className="service-card-video__icon-wrapper">
                      <span className="service-card-video__icon">{service.icon}</span>
                    </div>
                    <div className="service-card-video__badge">{service.tagline}</div>
                  </div>

                  <h3 className="service-card-video__title">{service.title}</h3>
                  <p className="service-card-video__desc">{service.desc}</p>

                  <div className="service-card-video__features">
                    {service.features.slice(0, 4).map((feature) => (
                      <span key={feature} className="service-card-video__feature">
                        <span className="service-card-video__check">✓</span>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="service-card-video__tech">
                    {service.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="service-card-video__tech-tag">{tech}</span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/7509955205?text=Hi! I'm interested in ${service.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="service-card-video__cta"
                    style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
                  >
                    Get Started <span className="service-card-video__arrow">→</span>
                  </a>
                </div>

                {/* Pulse animation ring */}
                <div className="service-card-video__pulse-ring"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="services-cta">
        <div className="container">
          <div className="services-cta__inner">
            <div className="services-cta__content">
              <span className="section-tag">Let's Build Together</span>
              <h2 className="services-cta__title">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="services-cta__sub">
                Get a free consultation and discover how our services can help you achieve your goals.
              </p>
              <div className="services-cta__actions">
                <a
                  href="https://wa.me/7509955205"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '8px' }} fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  WhatsApp Now
                </a>
                <Link to="/contact" className="btn-outline">Contact Us →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INLINE STYLES ── */}
      <style jsx>{`
        /* ── Hero ── */
        .services-hero {
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
          background: var(--bg-dark);
        }

        .services-hero__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .services-hero__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .services-hero__orb--1 {
          width: 500px;
          height: 500px;
          background: rgba(108, 99, 255, 0.12);
          top: -200px;
          right: -100px;
          animation: floatOrb 20s ease-in-out infinite;
        }

        .services-hero__orb--2 {
          width: 400px;
          height: 400px;
          background: rgba(0, 212, 170, 0.08);
          bottom: -150px;
          left: -100px;
          animation: floatOrb 25s ease-in-out infinite reverse;
        }

        .services-hero__orb--3 {
          width: 300px;
          height: 300px;
          background: rgba(168, 85, 247, 0.08);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: floatOrb 30s ease-in-out infinite;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }

        .services-hero__content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .services-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(108, 99, 255, 0.12);
          border: 1px solid rgba(108, 99, 255, 0.2);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-light);
          margin-bottom: 24px;
        }

        .services-hero__badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .services-hero__title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .services-hero__sub {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .services-hero__actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Services Grid ── */
        .services-grid-section {
          padding: 80px 0;
          background: var(--bg-dark);
        }

        .services-grid-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .services-grid-header .section-tag {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(108, 99, 255, 0.1);
          border: 1px solid rgba(108, 99, 255, 0.2);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: var(--primary-light);
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 12px;
        }

        .section-subtitle {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Video Card ── */
        .service-card-video {
          position: relative;
          background: rgba(18, 18, 30, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 28px 24px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .service-card-video--visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          animation: none;
        }

        .service-card-video:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--card-color);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--card-color);
        }

        /* Scanline effect */
        .service-card-video__overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 20px;
        }

        .service-card-video__scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 2px,
            rgba(255, 255, 255, 0.02) 2px,
            rgba(255, 255, 255, 0.02) 4px
          );
          animation: scanMove 8s linear infinite;
          opacity: 0.5;
        }

        @keyframes scanMove {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .service-card-video__glow {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(circle at center, var(--card-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
          filter: blur(60px);
        }

        .service-card-video__glow--active {
          opacity: 0.1;
        }

        .service-card-video__pulse-ring {
          position: absolute;
          inset: -2px;
          border-radius: 20px;
          border: 2px solid var(--card-color);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .service-card-video:hover .service-card-video__pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }

        @keyframes pulseRing {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }

        .service-card-video__content {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-card-video__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .service-card-video__icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: 0.3s ease;
        }

        .service-card-video:hover .service-card-video__icon-wrapper {
          background: rgba(108, 99, 255, 0.15);
          border-color: var(--card-color);
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(108, 99, 255, 0.15);
        }

        .service-card-video__badge {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          letter-spacing: 0.3px;
        }

        .service-card-video__title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        .service-card-video__desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
          flex: 1;
        }

        .service-card-video__features {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .service-card-video__feature {
          font-size: 12px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255, 255, 255, 0.03);
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: 0.3s ease;
        }

        .service-card-video:hover .service-card-video__feature {
          border-color: rgba(255, 255, 255, 0.08);
        }

        .service-card-video__check {
          color: var(--card-color);
          font-weight: 700;
        }

        .service-card-video__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .service-card-video__tech-tag {
          font-size: 10px;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.04);
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }

        .service-card-video:hover .service-card-video__tech-tag {
          border-color: rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
        }

        .service-card-video__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          align-self: flex-start;
          border: none;
          cursor: pointer;
        }

        .service-card-video__cta:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 24px rgba(108, 99, 255, 0.3);
        }

        .service-card-video__arrow {
          transition: transform 0.3s ease;
        }

        .service-card-video__cta:hover .service-card-video__arrow {
          transform: translateX(4px);
        }

        /* ── CTA Section ── */
        .services-cta {
          padding: 80px 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .services-cta__inner {
          text-align: center;
        }

        .services-cta__title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .services-cta__sub {
          font-size: 16px;
          color: var(--text-secondary);
          max-width: 520px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }

        .services-cta__actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card-video {
            min-height: auto;
            padding: 24px 20px;
          }

          .services-hero {
            padding: 80px 0 60px;
          }

          .services-hero__title {
            font-size: 28px;
          }

          .services-hero__actions {
            flex-direction: column;
            align-items: center;
          }
        }

        /* ── Utilities ── */
        .gradient-text {
          background: linear-gradient(135deg, #6C63FF, #00D4AA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          background: linear-gradient(135deg, #6C63FF, #5a52e0);
          border: none;
          border-radius: 60px;
          color: white;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(108, 99, 255, 0.3);
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(108, 99, 255, 0.4);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 60px;
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-outline:hover {
          border-color: var(--primary);
          color: var(--primary-light);
          box-shadow: 0 0 30px rgba(108, 99, 255, 0.1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Dark theme variables */
        :root {
          --bg-dark: #0a0a0f;
          --bg-card: #11111a;
          --border: #2a2a3a;
          --text-primary: #f0f0f5;
          --text-secondary: #a8a8c0;
          --text-muted: #6a6a82;
          --primary: #6C63FF;
          --primary-light: #8a82ff;
          --accent: #00D4AA;
        }
      `}</style>
    </div>
  )
}