import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Modal } from '../components/Modal.jsx'
import { img } from '../data/images.js'
import { motion } from 'motion/react'
import { FloatingShape } from '../components/FloatingShape.jsx'
import { InteractiveHead } from '../components/InteractiveHead.jsx'

const steps = [
  { title: 'Submit Application Form', desc: 'Complete the application form online or collect it from the school office.' },
  { title: 'Student Interview', desc: 'An informal interaction to understand the child’s interests and readiness.' },
  { title: 'Document Verification', desc: 'Submit and verify required documents such as previous records and ID.' },
  { title: 'Fee Payment', desc: 'Pay the admission and first-term fees as per the published fee structure.' },
  { title: 'Enrollment', desc: 'Receive your enrollment details and welcome kit. Welcome to the Pushpa family!' },
]

const eligibility = [
  {
    grade: 'Primary (Grade 1–5)',
    age: '5–10 years',
    points: ['Basic literacy readiness', 'Interaction with parents and child', 'Previous school record (if any)'],
  },
  {
    grade: 'Middle (Grade 6–8)',
    age: '11–13 years',
    points: ['Passing certificate from previous grade', 'Subject assessment in core areas', 'Character certificate'],
  },
  {
    grade: 'Secondary (Grade 9–10)',
    age: '14–15 years',
    points: ['Transfer certificate from previous school', 'Entrance assessment', 'Previous academic performance'],
  },
]

const feeStructure = [
  { grade: 'Grade 1–5', admission: '₹ 8,000', tuition: '₹ 18,000 / yr', other: '₹ 4,000' },
  { grade: 'Grade 6–8', admission: '₹ 10,000', tuition: '₹ 22,000 / yr', other: '₹ 5,000' },
  { grade: 'Grade 9–10', admission: '₹ 12,000', tuition: '₹ 28,000 / yr', other: '₹ 6,000' },
]

const initialForm = { name: '', age: '', grade: '', parentName: '', phone: '', email: '' }

export default function Admissions() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Student name is required'
    if (!form.age.trim()) e.age = 'Age is required'
    else if (isNaN(form.age) || +form.age < 3 || +form.age > 18) e.age = 'Enter a valid age (3–18)'
    if (!form.grade) e.grade = 'Please select a grade level'
    if (!form.parentName.trim()) e.parentName = 'Parent name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[+\d][\d\s-]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Enter a valid email'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  const closeModal = () => {
    setOpen(false)
    setTimeout(() => {
      setForm(initialForm)
      setErrors({})
      setSubmitted(false)
    }, 250)
  }

  const inputBase = 'w-full rounded-xl border bg-white/50 backdrop-blur-md px-4 py-3 text-sm text-slate-900 placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white/80'
  const ok = 'border-slate-300'
  const bad = 'border-red-400 focus:ring-red-400'

  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="Admissions"
        title="Admissions Open"
        subtitle="A clear, supportive admissions process — designed around your child and your family."
        image={img.admissions}
      />

      <div className="relative isolate">
        {/* Playful Floating 3D Shapes */}
        <FloatingShape type="square" className="top-40 left-10 opacity-30" size={140} color="bg-primary-400" delay={0} />
        <FloatingShape type="circle" className="top-1/3 right-20 opacity-40" size={80} color="bg-gold-400" delay={1} />
        <FloatingShape type="polygon" className="bottom-1/4 left-32 opacity-20" size={120} color="bg-primary-500" delay={2} />
        
        {/* Background blobs */}
        <div className="absolute top-[10%] left-[10%] -z-10 h-72 w-72 rounded-full bg-primary-300/40 blur-[80px]" />
        <div className="absolute bottom-[30%] right-[10%] -z-10 h-96 w-96 rounded-full bg-gold-300/30 blur-[100px]" />

        {/* Process */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center glass-panel p-8 rounded-[2.5rem] mb-14">
              <span className="inline-block rounded-full bg-primary-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200 mb-4">Step by Step</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Admission Process</h2>
              <p className="mt-4 text-slate-700 leading-relaxed font-medium">Five simple steps from application to enrollment.</p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-5 perspective-1000">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 100} className="h-full">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, z: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex h-full flex-col rounded-[2rem] glass-panel p-6 shadow-sm transition-all duration-500"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.span 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white font-bold shadow-lg shadow-primary-500/30"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {i + 1}
                    </motion.span>
                    <motion.h3 style={{ transform: 'translateZ(20px)' }} className="mt-5 font-bold text-slate-900 text-sm sm:text-base leading-snug">{s.title}</motion.h3>
                    <motion.p style={{ transform: 'translateZ(10px)' }} className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">{s.desc}</motion.p>
                    {i < steps.length - 1 && (
                      <span className="hidden md:block absolute -right-3.5 top-12 text-slate-400 animate-pulse">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    )}
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20 md:py-28 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center glass-panel p-8 rounded-[2.5rem] mb-14">
              <span className="inline-block rounded-full bg-gold-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-700 ring-1 ring-gold-200 mb-4">Who Can Apply</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Eligibility Criteria</h2>
              <p className="mt-4 text-slate-700 leading-relaxed font-medium">Requirements vary by grade level. Please review the criteria relevant to your child.</p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3 perspective-1000">
              {eligibility.map((c, i) => (
                <Reveal key={c.grade} delay={i * 120} className="h-full">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotateY: -5, rotateX: 5, z: 30 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex h-full flex-col rounded-[2.5rem] glass-panel p-8"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.h3 style={{ transform: 'translateZ(30px)' }} className="text-xl font-bold text-slate-900">{c.grade}</motion.h3>
                    <motion.p style={{ transform: 'translateZ(20px)' }} className="mt-2 text-sm font-bold bg-gold-100 text-gold-700 inline-block px-3 py-1 rounded-full w-fit">{c.age}</motion.p>
                    <motion.ul style={{ transform: 'translateZ(10px)' }} className="mt-6 space-y-4">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                          <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Download form */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[3rem] glass-panel-dark px-8 py-12 md:px-14 md:py-16 shadow-2xl">
                <div className="absolute -right-12 -bottom-12 h-56 w-56 rounded-full bg-gold-500/30 blur-3xl" aria-hidden="true" />
                <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
                  <div>
                    <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/30 backdrop-blur-md mb-4">Get Started</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Download Application Form</h2>
                    <p className="mt-5 text-lg text-blue-100 leading-relaxed">
                      Fill in your details below to receive the application form. Our admissions team will get in touch with the next steps.
                    </p>
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-gold-500/30 transition-all hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      Request Form
                    </button>
                  </div>
                  <div className="hidden md:flex justify-center items-center">
                    <InteractiveHead />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Fee structure */}
        <section className="py-20 md:py-28 relative">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center glass-panel p-8 rounded-[2.5rem] mb-14">
              <span className="inline-block rounded-full bg-primary-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700 ring-1 ring-primary-200 mb-4">Transparent Pricing</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Fee Structure</h2>
              <p className="mt-4 text-slate-700 leading-relaxed font-medium">Indicative annual fees by grade level. Detailed breakup available at the school office.</p>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[2.5rem] glass-panel shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-primary-900/10 border-b border-white/40">
                        <th className="px-6 py-5 font-bold text-slate-900">Grade Level</th>
                        <th className="px-6 py-5 font-bold text-slate-900">Admission Fee</th>
                        <th className="px-6 py-5 font-bold text-slate-900">Tuition</th>
                        <th className="px-6 py-5 font-bold text-slate-900">Other Fees</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/40">
                      {feeStructure.map((row) => (
                        <tr key={row.grade} className="transition-colors hover:bg-white/40">
                          <td className="px-6 py-5 font-bold text-slate-900">{row.grade}</td>
                          <td className="px-6 py-5 font-medium text-slate-700">{row.admission}</td>
                          <td className="px-6 py-5 font-medium text-slate-700">{row.tuition}</td>
                          <td className="px-6 py-5 font-medium text-slate-700">{row.other}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-5 text-sm text-slate-600 border-t border-white/40 bg-white/20 font-medium">
                  Fees are indicative and subject to revision. Sibling concessions available. Contact the school office for the current schedule.
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* Modal form */}
      <Modal open={open} onClose={closeModal} title="Application Form Request" maxWidth="max-w-xl">
        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="mt-5 text-xl font-bold text-slate-900">Request Received!</h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Thank you, {form.parentName || 'parent'}. Our admissions team will reach out to you shortly with the application form and next steps.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 inline-flex items-center rounded-lg bg-primary-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="af-name" className="mb-1.5 block text-sm font-medium text-slate-700">Student Name *</label>
                <input id="af-name" name="name" value={form.name} onChange={handleChange} className={`${inputBase} ${errors.name ? bad : ok}`} placeholder="Full name" />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="af-age" className="mb-1.5 block text-sm font-medium text-slate-700">Age *</label>
                <input id="af-age" name="age" value={form.age} onChange={handleChange} className={`${inputBase} ${errors.age ? bad : ok}`} placeholder="e.g. 9" />
                {errors.age && <p className="mt-1 text-xs text-red-600">{errors.age}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="af-grade" className="mb-1.5 block text-sm font-medium text-slate-700">Grade Applying For *</label>
              <select id="af-grade" name="grade" value={form.grade} onChange={handleChange} className={`${inputBase} ${errors.grade ? bad : ok}`}>
                <option value="">Select grade level</option>
                <option>Primary (Grade 1–5)</option>
                <option>Middle (Grade 6–8)</option>
                <option>Secondary (Grade 9–10)</option>
              </select>
              {errors.grade && <p className="mt-1 text-xs text-red-600">{errors.grade}</p>}
            </div>
            <div>
              <label htmlFor="af-parent" className="mb-1.5 block text-sm font-medium text-slate-700">Parent Name *</label>
              <input id="af-parent" name="parentName" value={form.parentName} onChange={handleChange} className={`${inputBase} ${errors.parentName ? bad : ok}`} placeholder="Parent / Guardian" />
              {errors.parentName && <p className="mt-1 text-xs text-red-600">{errors.parentName}</p>}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="af-phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone *</label>
                <input id="af-phone" name="phone" value={form.phone} onChange={handleChange} className={`${inputBase} ${errors.phone ? bad : ok}`} placeholder="+91 ..." />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="af-email" className="mb-1.5 block text-sm font-medium text-slate-700">Email *</label>
                <input id="af-email" name="email" type="email" value={form.email} onChange={handleChange} className={`${inputBase} ${errors.email ? bad : ok}`} placeholder="you@example.com" />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">
              <button type="button" onClick={closeModal} className="rounded-lg px-5 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50">
                Cancel
              </button>
              <button type="submit" className="rounded-lg bg-primary-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 active:scale-95">
                Submit Request
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  )
}
