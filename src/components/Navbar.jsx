import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Logo } from './Logo.jsx'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/news', label: 'News & Events' },
  { to: '/cbse-info', label: 'CBSE Info' },
  { to: '/contact', label: 'Contact' },
  { to: '/school-mis', label: 'School MIS' },
  { to: '/tc-search', label: 'TC Search' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navClass = `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm shadow-slate-900/5'
      : 'bg-transparent'
  }`

  return (
    <header className={navClass}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group shrink-0" onClick={() => setOpen(false)}>
            <Logo className="h-9 w-9 lg:h-11 lg:w-11 transition-transform group-hover:scale-105" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base lg:text-lg text-primary-800">Pushpa School</span>
              <span className="text-[10px] lg:text-xs font-medium tracking-wider uppercase text-gold-600">Love and Service</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-slate-700 hover:text-primary-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/admissions"
                className="ml-2 inline-flex items-center rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold-600 hover:shadow-md active:scale-95"
              >
                Apply Now
              </Link>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-3 space-y-1 shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/admissions"
            onClick={() => setOpen(false)}
            className="block rounded-lg bg-gold-500 px-4 py-3 text-center text-base font-semibold text-white shadow-sm mt-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}
