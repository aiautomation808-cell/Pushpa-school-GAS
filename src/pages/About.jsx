import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img, schoolContact, photo } from '../data/images.js'
import { motion } from 'motion/react'

const emblemSymbols = [
  { name: 'The Cross', desc: 'The Christian symbol for selfless love and sacrifice.' },
  { name: 'The Burning Lamp', desc: 'With its rays dispersing the darkness of ignorance and spreading the light of knowledge.' },
  { name: 'The Lotus Flower', desc: 'A symbol of purity and the unfolding of the soul towards truth and beauty.' },
  { name: 'The Motto', desc: '“Love and Service” — the guiding spirit of every Pushpa student.' },
]

export default function About() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="About Us"
        title="A Legacy of Love and Service"
        subtitle="Since 1966, Pushpa School has devoted itself to forming individuals of integrity, knowledge and compassion."
        image={img.aboutBuilding}
      />

      {/* Main Content Grid container - Bento style */}
      <section className="py-20 relative isolate">
        {/* Playful background blobs */}
        <div className="absolute top-[20%] left-[10%] -z-10 h-72 w-72 rounded-full bg-primary-300/40 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] -z-10 h-96 w-96 rounded-full bg-gold-300/30 blur-[80px]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* History Bento */}
            <Reveal className="md:col-span-2 glass-panel p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 group-hover:bg-primary-200 transition-colors duration-700"></div>
              <span className="inline-block rounded-full bg-primary-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200 mb-6">Our Story</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">History of the School</h2>
              <div className="mt-8 grid md:grid-cols-2 gap-8 text-lg text-slate-700 leading-relaxed font-medium">
                <p>
                  On the 23rd September 1966, Fr. Gauci and Fr. Mendonca left for Ashta. They met Dr. S.N. Gupta,
                  a catholic resident of Ashta who was very influential and due to his frequent tours to the villages
                  of the area knew the people and their needs intimately.
                </p>
                <div className="space-y-4">
                  <p>
                    Moved by a shared desire to serve, the foundation of Pushpa School was laid — a place where children
                    from all walks of life could receive a quality education grounded in moral values.
                  </p>
                  <p>
                    Today, more than fifty years later, that founding spirit of love and service continues to guide
                    every classroom, every celebration, and every interaction within our walls.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Images Grid nested bento */}
            <Reveal delay={100} className="md:col-span-1 glass-panel rounded-[2.5rem] overflow-hidden relative shadow-lg group h-[300px]">
               <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  src={img.aboutBuilding}
                  alt="Pushpa School building"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                />
            </Reveal>
            <Reveal delay={200} className="md:col-span-1 glass-panel rounded-[2.5rem] overflow-hidden relative shadow-lg group h-[300px]">
               <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  src={img.aboutStudents}
                  alt="Students of Pushpa School"
                  className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500"
                />
            </Reveal>

            {/* Vision */}
            <Reveal delay={100} className="glass-panel p-8 md:p-10 rounded-[2.5rem] shadow-sm transform-gpu hover:-translate-y-2 transition-all duration-500">
               <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1 1 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1 1 0 010 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Vision</h3>
               <p className="text-lg text-slate-700 leading-relaxed">
                  Towards Integral Maturity and Holistic Development of Students for Building an Egalitarian Society
                  and progressive Nation founded on Sound Moral Principles and Gospel.
               </p>
            </Reveal>

            {/* Mission */}
            <Reveal delay={200} className="glass-panel p-8 md:p-10 rounded-[2.5rem] shadow-sm transform-gpu hover:-translate-y-2 transition-all duration-500">
               <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-lg mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
               </div>
               <h3 className="text-3xl font-bold text-slate-900 mb-4">Mission</h3>
               <p className="text-lg text-slate-700 leading-relaxed">
                  To provide a nurturing environment where every student is empowered to grow intellectually,
                  emotionally and spiritually — becoming a responsible citizen who lives by the values of love,
                  service and lifelong learning.
               </p>
            </Reveal>

            {/* Principal's Desk Full Width */}
            <Reveal delay={300} className="md:col-span-2 glass-panel p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white/60 relative overflow-hidden">
               <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-primary-100/50 to-transparent -z-10 blur-xl"></div>
               <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="relative h-64 w-56 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-700 to-primary-950 shadow-2xl ring-4 ring-white"
                    >
                      <img
                        src={photo.principalDesk}
                        alt={`${schoolContact.principal}, Principal`}
                        className="h-full w-full object-cover mix-blend-overlay opacity-80 transition-opacity hover:opacity-100"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="inline-block rounded-full bg-gold-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-700 ring-1 ring-gold-200 mb-4">From the Principal's Desk</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">A Commitment to Excellence</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 font-medium">
                      We have been trying to achieve excellence in our efforts and endeavour during the current session
                      and we will continue to do so. Vince Lombardi once said, “The quality of a person's life is in
                      direct proportion to their commitment to excellence, regardless of their chosen field of endeavor.”
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      At Pushpa, we hold this truth close — nurturing every student to strive, to serve, and to grow
                      into individuals of strong character and gentle heart.
                    </p>
                    <p className="mt-6 font-bold text-primary-800 text-xl">— {schoolContact.principal}</p>
                  </div>
               </div>
            </Reveal>

            {/* Emblem dark mode bento */}
            <Reveal delay={400} className="md:col-span-2 glass-panel-dark p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden mt-8">
               <div className="absolute inset-0 bg-primary-950/40 rounded-[2.5rem] -z-10"></div>
               <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/3 text-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="mx-auto inline-flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-2xl ring-8 ring-white/10"
                    >
                      <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-primary-950">
                        <svg viewBox="0 0 64 64" className="h-24 w-24" aria-hidden="true">
                          <path d="M32 8 L46 16 V32 L32 40 L18 32 V16 Z" fill="none" stroke="#f59e0b" strokeWidth="2" />
                          <path d="M32 40 L32 52" stroke="#f59e0b" strokeWidth="2" />
                          <path d="M44 28 q6 -2 4 6" stroke="#fcd34d" strokeWidth="2" fill="none" />
                        </svg>
                      </div>
                    </motion.div>
                    <p className="mt-8 font-serif text-3xl italic text-gold-300">Love and Service</p>
                  </div>
                  <div className="lg:w-2/3">
                    <span className="inline-block rounded-full bg-primary-800/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-300 ring-1 ring-primary-700 mb-4">Symbol of Our Spirit</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">School Emblem</h2>
                    <p className="text-lg text-blue-100 leading-relaxed mb-8">
                      The school Emblem contains: a Cross, a Burning Lamp with its rays, a Lotus Flower and the
                      motto “Love and Service”. The Cross is the Christian symbol for selfless love.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {emblemSymbols.map((s) => (
                        <div key={s.name} className="glass-panel p-4 rounded-2xl border border-white/5 bg-white/5">
                          <h4 className="font-bold text-gold-400 mb-2">{s.name}</h4>
                          <p className="text-sm text-blue-100 leading-relaxed">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </Reveal>

          </div>
        </div>
      </section>

    </div>
  )
}
