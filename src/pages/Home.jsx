import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'
import { InteractiveHead } from '../components/InteractiveHead.jsx'

export default function Home() {
  return (
    <div className="page-fade bg-slate-50">
      {/* Hero / Bento Container */}
      <section className="relative isolate min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        {/* Background Element */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-slate-50" />
        {/* Decorative blur blobs */}
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-[30rem] w-[30rem] -translate-x-1/4 translate-y-1/4 rounded-full bg-gold-200/40 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          {/* Main Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Hero Block (Spans 2 cols, 2 rows) */}
            <Reveal className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl shadow-slate-200/50 p-8 sm:p-12 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-100/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-800 ring-1 ring-inset ring-primary-200/50 backdrop-blur-md">
                Est. 1966 · Love and Service
              </span>
              <h1 className="mt-6 font-bold text-slate-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                Pushpa School
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-medium text-gold-600">
                Where Excellence Meets Character.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed max-w-md">
                A legacy of value-based education nurturing minds and hearts. We build confident, balanced, and well-rounded individuals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-900/20 transition-all hover:bg-primary-800 hover:-translate-y-0.5 active:scale-95"
                >
                  Apply Now
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-2xl bg-white/80 px-7 py-3.5 text-base font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 backdrop-blur-md transition-all hover:bg-white hover:-translate-y-0.5 active:scale-95 shadow-sm"
                >
                  Discover Pushpa
                </Link>
              </div>
            </Reveal>

            {/* Interactive Head Block (Spans 2 cols, 2 rows) */}
            <Reveal delay={100} className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-lg border border-white/50 shadow-xl shadow-slate-200/50 flex items-center justify-center min-h-[300px]">
               <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-gold-50/50 -z-10" />
               <InteractiveHead />
            </Reveal>

            {/* Stats Block 1 */}
            <Reveal delay={200} className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/30 p-6 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:bg-white/90">
              <p className="font-bold text-4xl sm:text-5xl text-primary-700">50+</p>
              <p className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-wider">Years Exp.</p>
            </Reveal>

            {/* Stats Block 2 */}
            <Reveal delay={300} className="md:col-span-1 md:row-span-1 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/30 p-6 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:bg-white/90">
              <p className="font-bold text-4xl sm:text-5xl text-gold-500">1000+</p>
              <p className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-wider">Students</p>
            </Reveal>

            {/* Image Block */}
            <Reveal delay={400} className="md:col-span-2 md:row-span-1 relative overflow-hidden rounded-3xl border border-white/40 shadow-xl shadow-slate-200/40 group">
              <img src={img.campusAir} alt="Campus" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-bold text-white">Modern Campus</p>
                <p className="text-sm text-blue-100">State-of-the-art facilities for holistic growth.</p>
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>

      {/* Expanded Bento Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Feature 1 */}
              <Reveal className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/50 p-8 transition-transform hover:-translate-y-1 hover:bg-white/80">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">Quality Education</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    A rigorous academic curriculum delivered by experienced educators committed to excellence in every classroom.
                  </p>
              </Reveal>

              {/* Feature 2 */}
              <Reveal delay={100} className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/50 p-8 transition-transform hover:-translate-y-1 hover:bg-white/80">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-white shadow-lg shadow-gold-500/30">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0A3.5 3.5 0 0112 6a3.5 3.5 0 01-3.5 3.5 3.5 3.5 0 013.5 3.5zm0 0H9.128" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">Holistic Growth</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Sports, arts, leadership and life skills that nurture confident, balanced and well-rounded individuals.
                  </p>
              </Reveal>

              {/* Feature 3 */}
              <Reveal delay={200} className="rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/50 p-8 transition-transform hover:-translate-y-1 hover:bg-white/80">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 text-white shadow-lg shadow-slate-500/30">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">Value-Based</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Rooted in the motto "Love and Service", we build character, integrity and a sense of moral purpose.
                  </p>
              </Reveal>

           </div>
        </div>
      </section>

    </div>
  )
}
