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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    num: '01',
    title: 'Web Development',
    tagline: 'Modern & Scalable Web Solutions',
    desc: 'We build fast, responsive, and SEO-friendly websites and web applications using cutting-edge technologies that deliver real business results.',
    features: ['Custom Website Design', 'React / Next.js SPAs', 'eCommerce Stores', 'Admin Dashboards', 'API Development'],
    tech: ['React', 'Next.js', 'Node.js', 'PHP', 'Laravel'],
    color: '#6C63FF',
  },
  {
    id: 'mobile',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    num: '02',
    title: 'App Development',
    tagline: 'Cross-Platform Mobile Apps',
    desc: 'Native-like mobile applications for iOS and Android built with React Native & Flutter — one codebase, two platforms, zero compromise.',
    features: ['iOS & Android Apps', 'Native Performance', 'Offline Support', 'Push Notifications', 'Play Store Deployment'],
    tech: ['React Native', 'Flutter', 'Firebase', 'Supabase'],
    color: '#00D4AA',
  },
  {
    id: 'custom',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    num: '03',
    title: 'Custom Software',
    tagline: 'Tailor-Made Business Solutions',
    desc: 'Enterprise-grade custom software designed exactly around your workflow — ERP, CRM, HMS, School Management and more.',
    features: ['ERP Systems', 'Hospital Management', 'School ERP', 'Inventory & POS', 'HR & Payroll'],
    tech: ['React', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL'],
    color: '#FF6B6B',
  },
  {
    id: 'seo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    num: '04',
    title: 'SEO Optimization',
    tagline: 'Rank Higher, Get Found Organically',
    desc: 'Data-driven SEO strategies to dominate Google rankings, drive organic traffic, and convert visitors into paying customers.',
    features: ['Technical SEO Audit', 'Local SEO (MP & India)', 'Google My Business', 'Keyword Research', 'Monthly Reports'],
    tech: ['Ahrefs', 'SEMrush', 'Search Console', 'Schema Markup'],
    color: '#FFB347',
  },
  {
    id: 'maintenance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    num: '05',
    title: 'Website Maintenance',
    tagline: '24/7 Support & Monitoring',
    desc: 'Comprehensive AMC plans — security updates, performance optimization, regular backups, and bug fixes so you never go offline.',
    features: ['24/7 Uptime Monitoring', 'Security Patches', 'Regular Backups', 'Bug Fixes', 'Content Updates'],
    tech: ['Cloudflare', 'AWS', 'Vercel', 'Supabase'],
    color: '#06B6D4',
  },
  {
    id: 'redesign',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    num: '06',
    title: 'Website Redesigning',
    tagline: 'Transform Your Digital Presence',
    desc: 'Modern UI/UX redesign that converts visitors into customers — mobile-first, fast-loading, and built with brand consistency.',
    features: ['Complete UI/UX Overhaul', 'Mobile-First Design', 'Performance Boost', 'Content Migration', 'SEO-Friendly Structure'],
    tech: ['Figma', 'React', 'GSAP', 'Framer Motion'],
    color: '#A855F7',
  },
  {
    id: 'automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    num: '07',
    title: 'Automation Systems',
    tagline: 'Eliminate Manual Work at Scale',
    desc: 'Intelligent workflow automation to streamline your operations — CRM automation, lead management, WhatsApp bots, and more.',
    features: ['CRM Automation', 'Lead Management', 'WhatsApp Bots', 'Voice AI Agents', 'Document Processing'],
    tech: ['Zapier', 'N8N', 'OpenAI', 'Node.js', 'Python'],
    color: '#EC4899',
  },
  {
    id: 'ai',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    num: '08',
    title: 'AI & ML Solutions',
    tagline: 'Intelligent Predictive Systems',
    desc: 'Custom AI models, chatbots, computer vision, and machine learning pipelines that unlock deep insights from your business data.',
    features: ['AI Chatbots', 'Predictive Analytics', 'Computer Vision', 'NLP Models', 'Deep Learning'],
    tech: ['TensorFlow', 'LangChain', 'Gemini API', 'Python'],
    color: '#8B5CF6',
  },
]

const WA_NUMBER = '7509955205'

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '8px', flexShrink: 0 }} fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.558 4.14 1.535 5.875L.057 23.943a.75.75 0 00.919.919l6.07-1.478A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.528-5.228-1.443l-.374-.223-3.875.943.962-3.742-.245-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  )
}

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [heroVisible, setHeroVisible] = useState(false)
  const cardsRef = useRef([])

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.index)
            setVisibleCards((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.08 }
    )
    cardsRef.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="srv-page">

      {/* ══ VIDEO HERO ══ */}
      <section className="srv-hero">
        {/* Background video */}
        <div className="srv-hero__video-wrap">
          <video
            className="srv-hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            {/* Uses a free-to-use abstract tech video from Pexels CDN */}
            <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="srv-hero__video-overlay" />
        </div>

        {/* Particle dots */}
        <div className="srv-hero__particles" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="srv-hero__particle" style={{
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--d': `${2 + Math.random() * 4}s`,
              '--s': `${Math.random() * 0.5 + 0.3}`,
            }} />
          ))}
        </div>

        <div className="container">
          <div className={`srv-hero__content ${heroVisible ? 'srv-hero__content--in' : ''}`}>
            <div className="srv-hero__badge">
              <span className="srv-hero__badge-dot" />
              What We Build
            </div>
            <h1 className="srv-hero__title">
              Services That
              <br />
              <span className="srv-grad-text">Drive Real Growth</span>
            </h1>
            <p className="srv-hero__sub">
              From pixel-perfect websites to intelligent AI pipelines — every service is crafted with precision,
              transparency, and a commitment to on-time delivery.
            </p>
            <div className="srv-hero__actions">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi! I'd like to discuss a project.`}
                target="_blank"
                rel="noreferrer"
                className="srv-btn-primary"
              >
                <WhatsAppIcon />
                Get Free Consultation
              </a>
              <Link to="/pricing" className="srv-btn-outline">View Pricing →</Link>
            </div>

            {/* Stats row */}
            <div className="srv-hero__stats">
              {[['50+', 'Projects Delivered'], ['4.9★', 'Client Rating'], ['8', 'Core Services'], ['2yr+', 'Industry Exp']].map(([num, label]) => (
                <div key={label} className="srv-hero__stat">
                  <span className="srv-hero__stat-num">{num}</span>
                  <span className="srv-hero__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll chevron */}
        <div className="srv-hero__scroll" aria-hidden="true">
          <span className="srv-hero__scroll-line" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ══ SECTION HEADER ══ */}
      <section className="srv-intro">
        <div className="container srv-intro__inner">
          <div className="srv-intro__left">
            <span className="srv-tag">Our Expertise</span>
            <h2 className="srv-intro__title">
              Eight Services.<br />
              <span className="srv-grad-text">One Trusted Partner.</span>
            </h2>
          </div>
          <p className="srv-intro__text">
            We're a full-service digital agency based in Jabalpur, MP. Whether you need a landing page
            or an enterprise AI system, we bring the same level of craft, honesty, and technical depth.
          </p>
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section className="srv-grid-section">
        <div className="container">
          <div className="srv-grid">
            {services.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => (cardsRef.current[i] = el)}
                data-index={i}
                className={`srv-card ${visibleCards.has(i) ? 'srv-card--in' : ''}`}
                style={{
                  '--c': s.color,
                  '--delay': `${i * 60}ms`,
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Top glow line */}
                <div className="srv-card__top-line" />

                {/* Number */}
                <span className="srv-card__num">{s.num}</span>

                {/* Icon */}
                <div className={`srv-card__icon ${hoveredCard === i ? 'srv-card__icon--active' : ''}`}>
                  {s.icon}
                </div>

                <h3 className="srv-card__title">{s.title}</h3>
                <p className="srv-card__tagline">{s.tagline}</p>
                <p className="srv-card__desc">{s.desc}</p>

                <ul className="srv-card__features">
                  {s.features.map((f) => (
                    <li key={f} className="srv-card__feature">
                      <span className="srv-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="srv-card__divider" />

                <div className="srv-card__tech">
                  {s.tech.map((t) => (
                    <span key={t} className="srv-card__tech-tag">{t}</span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hi! I'm interested in ${s.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="srv-card__cta"
                >
                  Get Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                {/* Hover background glow */}
                <div className={`srv-card__glow ${hoveredCard === i ? 'srv-card__glow--on' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="srv-process">
        <div className="container">
          <div className="srv-section-head">
            <span className="srv-tag">How We Work</span>
            <h2 className="srv-section-title">Our <span className="srv-grad-text">Process</span></h2>
          </div>
          <div className="srv-process__steps">
            {[
              { n: '01', title: 'Free Consultation', desc: 'Tell us your idea. We listen carefully, ask the right questions, and understand your exact requirements.' },
              { n: '02', title: 'Proposal & Scope', desc: 'You get a detailed proposal — scope, timeline, tech stack, and fixed pricing. No hidden charges.' },
              { n: '03', title: 'Development', desc: 'Agile sprints with weekly demos. You see real progress at every stage — no black box development.' },
              { n: '04', title: 'Launch & Support', desc: 'We deploy, test thoroughly, and hand over. Post-launch support included. We never disappear.' },
            ].map((step, i) => (
              <div key={i} className="srv-process__step">
                <div className="srv-process__num">{step.n}</div>
                <div className="srv-process__connector" />
                <h4 className="srv-process__title">{step.title}</h4>
                <p className="srv-process__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="srv-cta">
        <div className="srv-cta__bg-lines" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => <span key={i} className="srv-cta__line" />)}
        </div>
        <div className="container">
          <div className="srv-cta__inner">
            <span className="srv-tag">Let's Build Together</span>
            <h2 className="srv-cta__title">
              Not sure which service you need?
              <br />
              <span className="srv-grad-text">Let's talk — it's free.</span>
            </h2>
            <p className="srv-cta__sub">
              30-minute free consultation · No obligation · Expert guidance
            </p>
            <div className="srv-cta__actions">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi! I need help choosing the right service.`}
                target="_blank"
                rel="noreferrer"
                className="srv-btn-primary"
              >
                <WhatsAppIcon />
                WhatsApp Us Now
              </a>
              <Link to="/contact" className="srv-btn-outline">Contact Form →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STYLES ══ */}
      <style>{`
        /* ─── Page base ─── */
        .srv-page {
          background: var(--bg-dark);
          color: var(--text-primary);
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
        }
        .srv-grad-text {
          background: linear-gradient(135deg, #6C63FF, #00D4AA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .srv-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          background: rgba(108,99,255,0.1);
          border: 1px solid rgba(108,99,255,0.2);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8B85FF;
          margin-bottom: 16px;
        }
        .srv-btn-primary {
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
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(108,99,255,0.35);
        }
        .srv-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(108,99,255,0.5);
        }
        .srv-btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 60px;
          color: var(--text-primary);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .srv-btn-outline:hover {
          border-color: #6C63FF;
          color: #8B85FF;
          box-shadow: 0 0 24px rgba(108,99,255,0.15);
        }

        /* ─── Hero ─── */
        .srv-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .srv-hero__video-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .srv-hero__video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.35;
        }
        .srv-hero__video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(10,10,15,0.92) 0%,
            rgba(18,18,26,0.80) 50%,
            rgba(10,10,15,0.92) 100%
          );
        }
        /* particles */
        .srv-hero__particles { position: absolute; inset: 0; z-index: 1; pointer-events: none; overflow: hidden; }
        .srv-hero__particle {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #6C63FF;
          opacity: var(--s);
          animation: particlePulse var(--d) ease-in-out infinite alternate;
        }
        @keyframes particlePulse {
          from { opacity: var(--s); transform: scale(1); }
          to   { opacity: calc(var(--s) * 0.2); transform: scale(1.8); }
        }
        .srv-hero .container { position: relative; z-index: 2; }
        .srv-hero__content {
          max-width: 760px;
          padding: 140px 0 120px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .srv-hero__content--in {
          opacity: 1;
          transform: none;
        }
        .srv-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(108,99,255,0.12);
          border: 1px solid rgba(108,99,255,0.25);
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: #8B85FF;
          margin-bottom: 28px;
        }
        .srv-hero__badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #00D4AA;
          box-shadow: 0 0 8px #00D4AA;
          animation: dotBlink 2s ease-in-out infinite;
        }
        @keyframes dotBlink {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .srv-hero__title {
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -1px;
          margin-bottom: 22px;
        }
        .srv-hero__sub {
          font-size: 17px;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 600px;
        }
        .srv-hero__actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }
        .srv-hero__stats {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .srv-hero__stat { display: flex; flex-direction: column; gap: 4px; }
        .srv-hero__stat-num {
          font-size: 26px;
          font-weight: 800;
          background: linear-gradient(135deg, #6C63FF, #00D4AA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .srv-hero__stat-label { font-size: 12px; color: var(--text-muted); letter-spacing: 0.3px; }
        .srv-hero__scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0.4;
          animation: scrollBounce 2s ease-in-out infinite;
          color: var(--text-muted);
        }
        .srv-hero__scroll-line {
          width: 1px; height: 32px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.3));
        }
        @keyframes scrollBounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ─── Intro ─── */
        .srv-intro {
          padding: 80px 0 60px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .srv-intro__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .srv-intro__title {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        .srv-intro__text {
          font-size: 16px;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        /* ─── Grid ─── */
        .srv-grid-section { padding: 80px 0 100px; }
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ─── Card ─── */
        .srv-card {
          position: relative;
          background: rgba(18,18,26,0.7);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px 22px 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.6s ease var(--delay),
            transform 0.6s cubic-bezier(0.34,1.56,0.64,1) var(--delay),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          cursor: default;
        }
        .srv-card--in {
          opacity: 1;
          transform: none;
        }
        .srv-card:hover {
          border-color: var(--c);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px var(--c), 0 0 60px rgba(0,0,0,0.3);
          transform: translateY(-6px);
        }
        /* Top accent line */
        .srv-card__top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--c);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 20px 20px 0 0;
        }
        .srv-card:hover .srv-card__top-line { opacity: 1; }
        /* Number */
        .srv-card__num {
          position: absolute;
          top: 16px; right: 18px;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.1);
          letter-spacing: 1px;
        }
        /* Icon */
        .srv-card__icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          color: var(--c);
          transition: all 0.3s ease;
        }
        .srv-card__icon svg { width: 22px; height: 22px; }
        .srv-card__icon--active {
          background: rgba(108,99,255,0.12);
          border-color: var(--c);
          box-shadow: 0 0 24px color-mix(in srgb, var(--c) 30%, transparent);
          transform: scale(1.08);
        }
        .srv-card__title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 4px;
          color: var(--text-primary);
        }
        .srv-card__tagline {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--c);
          margin-bottom: 12px;
          opacity: 0.9;
        }
        .srv-card__desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 18px;
          flex: 1;
        }
        .srv-card__features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          padding: 0;
        }
        .srv-card__feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--text-secondary);
        }
        .srv-card__check {
          color: var(--c);
          font-weight: 700;
          font-size: 11px;
          flex-shrink: 0;
        }
        .srv-card__divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin: 14px 0;
        }
        .srv-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 18px;
        }
        .srv-card__tech-tag {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          color: var(--text-muted);
          background: rgba(255,255,255,0.04);
          padding: 3px 9px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: 0.3s;
        }
        .srv-card:hover .srv-card__tech-tag {
          color: var(--text-secondary);
          border-color: rgba(255,255,255,0.1);
        }
        .srv-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: var(--c);
          text-decoration: none;
          padding: 9px 18px;
          border: 1px solid var(--c);
          border-radius: 100px;
          align-self: flex-start;
          transition: all 0.3s ease;
          background: transparent;
        }
        .srv-card__cta:hover {
          background: var(--c);
          color: #fff;
          box-shadow: 0 4px 20px color-mix(in srgb, var(--c) 40%, transparent);
          transform: translateX(2px);
        }
        /* Glow bg */
        .srv-card__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 20%, var(--c), transparent 60%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
          border-radius: 20px;
        }
        .srv-card__glow--on { opacity: 0.06; }

        /* ─── Process ─── */
        .srv-process {
          padding: 80px 0;
          background: rgba(255,255,255,0.015);
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .srv-section-head { text-align: center; margin-bottom: 56px; }
        .srv-section-title {
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 800;
          margin: 0;
        }
        .srv-process__steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          position: relative;
        }
        .srv-process__steps::after {
          content: '';
          position: absolute;
          top: 28px; left: 12.5%; right: 12.5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(108,99,255,0.3) 20%, rgba(0,212,170,0.3) 80%, transparent);
        }
        .srv-process__step {
          text-align: center;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }
        .srv-process__num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px; height: 56px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 2px solid rgba(108,99,255,0.4);
          font-size: 14px;
          font-weight: 800;
          color: #6C63FF;
          margin: 0 auto 20px;
        }
        .srv-process__connector { display: none; }
        .srv-process__title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text-primary);
        }
        .srv-process__desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* ─── CTA ─── */
        .srv-cta {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a1a 0%, #0d0d20 50%, #0a0a1a 100%);
        }
        .srv-cta__bg-lines {
          position: absolute; inset: 0; overflow: hidden;
          display: flex; flex-direction: column;
          justify-content: space-evenly;
          pointer-events: none;
        }
        .srv-cta__line {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(108,99,255,0.06), rgba(0,212,170,0.06), transparent);
          animation: lineSlide 8s ease-in-out infinite alternate;
        }
        .srv-cta__line:nth-child(2n) { animation-delay: -2s; }
        .srv-cta__line:nth-child(3n) { animation-delay: -4s; }
        @keyframes lineSlide {
          from { transform: translateX(-5%); }
          to   { transform: translateX(5%); }
        }
        .srv-cta__inner {
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .srv-cta__title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .srv-cta__sub {
          font-size: 15px;
          color: var(--text-secondary);
          margin-bottom: 36px;
          letter-spacing: 0.3px;
        }
        .srv-cta__actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1200px) {
          .srv-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .srv-grid { grid-template-columns: repeat(2, 1fr); }
          .srv-intro__inner { grid-template-columns: 1fr; gap: 24px; }
          .srv-process__steps { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .srv-process__steps::after { display: none; }
        }
        @media (max-width: 600px) {
          .srv-grid { grid-template-columns: 1fr; }
          .srv-hero__content { padding: 100px 0 80px; }
          .srv-hero__title { font-size: 36px; letter-spacing: -0.5px; }
          .srv-hero__stats { gap: 24px; }
          .srv-hero__actions { flex-direction: column; }
          .srv-process__steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}