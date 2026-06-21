import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'

const programs = [
  {
    title: 'Primary School',
    grades: 'Grade 1–5',
    desc: 'Foundation learning with a strong focus on basic literacy, numeracy and curiosity-driven discovery.',
    image: img.classroom,
  },
  {
    title: 'Middle School',
    grades: 'Grade 6–8',
    desc: 'Comprehensive curriculum with practical, hands-on learning that bridges concepts to the real world.',
    image: img.scienceLab,
  },
  {
    title: 'Secondary School',
    grades: 'Grade 9–10',
    desc: 'Advanced preparation for higher education, equipping students with discipline and depth of knowledge.',
    image: img.library,
  },
]

const facilities = [
  { name: 'Modern Library', desc: 'A vast collection of books, journals and digital resources.', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.073 0 3.95.642 5.5 1.735A8.987 8.987 0 0117 18c1.046 0 2.045.18 3 .512V4.262A8.967 8.967 0 0017 3.75c-1.048 0-2.062.18-3 .512v2.78z' },
  { name: 'Science Labs', desc: 'Well-equipped physics, chemistry and biology laboratories.', icon: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
  { name: 'Computer Lab', desc: 'Modern computing infrastructure with high-speed internet.', icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25' },
  { name: 'Sports Arena', desc: 'Spacious grounds for athletics, cricket, football and more.', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0v-3.75m0-12.5V2m9 9h-3.75m-12.5 0H2' },
  { name: 'Auditorium', desc: 'A versatile hall for performances, assemblies and events.', icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0a2.25 2.25 0 004.5 0M12 9v.75' },
  { name: 'Transport', desc: 'Safe and reliable bus services across nearby routes.', icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' },
]

export default function Academics() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="Academics"
        title="Academics Built for Growth"
        subtitle="A thoughtfully structured learning journey from primary to secondary — balancing rigour with discovery."
        image={img.library}
      />

      {/* Main Container */}
      <div className="relative isolate">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-primary-200/40 blur-[100px]" />
        <div className="absolute bottom-[20%] left-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold-200/30 blur-[100px]" />

        {/* Programs */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center glass-panel p-8 rounded-[2.5rem]">
              <span className="inline-block rounded-full bg-gold-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-700 ring-1 ring-gold-200 mb-4">Learning Pathway</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Academic Programs</h2>
              <p className="mt-4 text-slate-700 leading-relaxed font-medium">
                Each stage of schooling is designed to meet students where they are, and gently lift them toward their full potential.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {programs.map((p, i) => (
                <Reveal key={p.title} delay={i * 120} className="h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] glass-panel shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 duration-500">
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover mix-blend-overlay opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:mix-blend-normal group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6">
                        <span className="inline-block rounded-full bg-gold-500/90 backdrop-blur px-4 py-1.5 text-xs font-bold text-white shadow-lg">{p.grades}</span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-8 bg-white/40 backdrop-blur-md">
                      <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>
                      <p className="mt-3 flex-1 text-slate-700 leading-relaxed font-medium">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 md:py-28 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center glass-panel p-8 rounded-[2.5rem] mb-14">
              <span className="inline-block rounded-full bg-primary-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200 mb-4">Campus & Resources</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Facilities</h2>
              <p className="mt-4 text-slate-700 leading-relaxed font-medium">
                Modern, safe and inspiring spaces that support every dimension of student life.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {facilities.map((f, i) => (
                <Reveal key={f.name} delay={(i % 3) * 100} className="h-full">
                  <div className="group flex h-full items-start gap-5 rounded-[2rem] glass-panel p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white/60">
                    <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{f.name}</h3>
                      <p className="mt-2 text-slate-700 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Image band */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal className="glass-panel p-2 rounded-[2.5rem]">
                <img src={img.library} alt="Library" loading="lazy" className="h-80 w-full rounded-[2rem] object-cover mix-blend-overlay opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-500" />
              </Reveal>
              <Reveal delay={120} className="glass-panel p-2 rounded-[2.5rem]">
                <img src={img.scienceLab} alt="Science lab" loading="lazy" className="h-80 w-full rounded-[2rem] object-cover mix-blend-overlay opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-500" />
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
