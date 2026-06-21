import { Link } from 'react-router-dom'
import { Logo } from './Logo.jsx'
import { SocialIcons } from './SocialIcons.jsx'
import { schoolContact } from '../data/images.js'

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News & Events' },
  { to: '/cbse-info', label: 'CBSE Info' },
  { to: '/mandatory-disclosure', label: 'Mandatory Disclosure' },
  { to: '/committee', label: 'Committees' },
  { to: '/stars-of-pushpa', label: 'Stars of Pushpa' },
  { to: '/contact', label: 'Contact' },
  { to: '/school-mis', label: 'School MIS' },
  { to: '/tc-search', label: 'TC Search' },
]

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden mt-20 pb-8">
      {/* Background glass layer */}
      <div className="absolute inset-0 -z-10 bg-slate-900/90 backdrop-blur-md" />
      <div className="absolute top-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-primary-600/30 blur-[80px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 text-slate-300">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="h-11 w-11" variant="footer" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base lg:text-lg text-white">{schoolContact.shortName}</span>
                <span className="text-xs font-medium tracking-wider uppercase text-gold-400">Love and Service</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Pushpa Senior Secondary School, Ashta — a legacy of value-based education since 1966.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <span>{schoolContact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.2a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.5 1.2l-1.6.8a11 11 0 005.3 5.3l.8-1.6a1 1 0 011.2-.5l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z" />
                </svg>
                <span>{schoolContact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-gold-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{schoolContact.email}</span>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Follow Us</h3>
            <p className="mt-4 text-sm text-slate-400">Stay connected with the Pushpa School community.</p>
            <div className="mt-4">
              <SocialIcons />
            </div>
            <Link
              to="/admissions"
              className="mt-6 inline-flex items-center rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md active:scale-95"
            >
              Apply for Admission
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2026 {schoolContact.name}. All Rights Reserved.</p>
          <p className="text-xs text-slate-600">Love and Service · Est. 1966</p>
        </div>
      </div>
    </footer>
  )
}
