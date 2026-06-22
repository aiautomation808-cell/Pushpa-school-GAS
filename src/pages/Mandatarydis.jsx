import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { img } from '../data/images.js'

const DOWNLOAD_ICON = 'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'

const generalInfo = [
  ['1', 'Name of the School', 'PUSHPA Hr Sec School'],
  ['2', 'Affiliation No. (if applicable)', '1030206'],
  ['3', 'School Code (if applicable)', '50184'],
  ['4', 'Complete Address with Pin Code', 'Kannod Road, Ashta - 466116'],
  ['5', 'Principal Name & Qualification', 'Fr. Melvin C.J.'],
  ['6', 'School Email ID', 'pushpaashta@yahoo.com'],
  ['7', 'Contact Details (Landline / Mobile)', '07560-242178, 07560-243974'],
]

const documentsInfo = [
  { n: '1', label: 'Copies of Affiliation / Upgradation Letter and recent extension of Affiliation, if any', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/AFFILIATION.pdf' },
  { n: '2', label: 'Copies of Societies / Trust / Company Registration / Renewal Certificate, as applicable', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/SOCIETY%20REGISTRATION%200.pdf' },
  { n: '3', label: 'Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt. / UT', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/NOC.pdf' },
  { n: '4', label: 'Copies of Recognition Certificate under RTE Act 2009, and its renewal if applicable', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/rte.pdf' },
  { n: '5', label: 'Copy of valid Building Safety Certificate as per the National Building Code', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/building-safety.pdf' },
  { n: '6', label: 'Copy of valid Fire Safety Certificate issued by the competent authority', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/fire-safety.pdf' },
  { n: '7', label: 'Copy of the DEO Certificate submitted by the school for Affiliation / Upgradation / Extension of Affiliation, or self-certification by school', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/DEO%20CERTIFICATE.pdf' },
  { n: '8', label: 'Copies of valid Water, Health and Sanitation Certificates', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/sanitation.pdf' },
]

const resultAcademics = [
  { n: '1', label: 'Fee Structure of the School', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/fees-structure.pdf' },
  { n: '2', label: 'Annual Academic Calendar', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory/academic-calender.pdf' },
  { n: '3', label: 'List of School Management Committee (SMC)', link: 'https://www.pushpaschool.com/uploads/cbse-mandatory//smc-2025.pdf' },
  { n: '4', label: 'List of Parents Teachers Association (PTA) Members', link: '#' },
  { n: '5', label: "Last three-year result of the Board Examination as per applicability", link: '#' },
]

const classXResult = [
  ['1', '2023-24', '127', '112', '88.18%'],
  ['2', '2022-23', '106', '100', '94.33%'],
  ['3', '2021-22', '102', '102', '100%'],
]

const classXIIResult = [
  ['1', '2023-24', '48', '43', '89.58%'],
  ['2', '2022-23', '66', '63', '95.45%'],
  ['3', '2021-22', '52', '48', '92.30%'],
]

const staff = [
  ['1', 'Principal', '01'],
  ['2', 'Total No. of Teachers', '69'],
  ['3', 'PGT', '11'],
  ['4', 'TGT', '23'],
  ['5', 'PRT', '32'],
  ['6', 'PTI', '03'],
]

const infrastructure = [
  ['1', 'Total campus area of the school (in square mtr)', '10121 sqm'],
  ['2', 'No. and size of classrooms (in sq.mtr)', '36 - 35.972057 each'],
  ['3', 'No. and size of laboratories including computer labs (in sq.mtr)', '11 - 69.6773 each'],
  ['4', 'Internet facility (Y/N)', 'Y'],
  ['5', 'No. of girls toilets', '20'],
  ['6', 'No. of boys toilets', '20'],
  ['7', 'Link of YouTube video of the inspection of school covering the infrastructure', 'https://www.youtube.com/watch?v=KAFSox2v_Xs'],
]

function SectionTitle({ kicker, title }) {
  return (
    <div className="mb-6">
      {kicker && (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold-600">{kicker}</p>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">{title}</h2>
    </div>
  )
}

function DownloadRow({ n, label, link }) {
  return (
    <tr className="hover:bg-slate-50 transition-colors">
      <td className="px-4 py-3 text-sm font-semibold text-slate-500 whitespace-nowrap">{n}</td>
      <td className="px-4 py-3 text-sm text-slate-700">{label}</td>
      <td className="px-4 py-3 text-right">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 transition-colors hover:bg-primary-100"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={DOWNLOAD_ICON} /></svg>
          Download
        </a>
      </td>
    </tr>
  )
}

function SimpleTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 w-16">Sl. No.</th>
            <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Information</th>
            <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Details</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map(([n, label, detail]) => (
            <tr key={n} className="hover:bg-slate-50 transition-colors">
              <td className="px-4 py-3 text-sm font-semibold text-slate-500">{n}</td>
              <td className="px-4 py-3 text-sm text-slate-700 font-medium">{label}</td>
              <td className="px-4 py-3 text-sm text-slate-900 font-semibold">{detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ResultTable({ caption, rows }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <div className="bg-primary-700 px-4 py-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white">{caption}</h3>
      </div>
      <table className="w-full text-left">
        <thead className="bg-slate-50">
          <tr>
            {['S. No.', 'Year', 'No. of Registered Students', 'No. of Students Passed', 'Pass Percentage', 'Remarks'].map((h) => (
              <th key={h} className="px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-600">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r) => (
            <tr key={r[0]} className="hover:bg-slate-50 transition-colors">
              {r.map((cell, i) => (
                <td key={i} className="px-3 py-3 text-sm text-slate-700">{cell}</td>
              ))}
              <td className="px-3 py-3 text-sm text-slate-700">—</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function DownloadTable({ caption, rows }) {
  return (
    <div>
      <h3 className="mb-3 text-base font-semibold text-slate-800">{caption}</h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 w-16">Sl. No.</th>
              <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600">Documents / Information</th>
              <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 text-right">Documents</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => <DownloadRow key={r.n} {...r} />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function MandatoryDisclosure() {
  return (
    <div className="page-fade">
      <PageHeader
        breadcrumb="CBSE Information"
        title="Mandatory Public Disclosure"
        subtitle="Statutory information and documents published in compliance with CBSE affiliation norms."
        image={img.aboutBuilding}
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-6 border-l-4 border-gold-500">
            <svg className="mt-0.5 h-6 w-6 shrink-0 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
            <p className="text-sm text-slate-600 leading-relaxed">
              In accordance with CBSE Affiliation Bye-Laws, the following information and documents are made available for public inspection. Click any downloadable document to view or download the original PDF.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle kicker="Section A" title="General Information" />
          <SimpleTable rows={generalInfo} />
        </Reveal>

        <Reveal>
          <SectionTitle kicker="Section B" title="Documents and Information" />
          <DownloadTable caption="Statutory Certificates" rows={documentsInfo} />
        </Reveal>

        <Reveal>
          <SectionTitle kicker="Section C" title="Result and Academics" />
          <DownloadTable caption="Academic Documents" rows={resultAcademics} />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <ResultTable caption="Result — Class X" rows={classXResult} />
            <ResultTable caption="Result — Class XII" rows={classXIIResult} />
          </div>
        </Reveal>

        <Reveal>
          <SectionTitle kicker="Section D" title="Staff (Teaching)" />
          <SimpleTable rows={staff} />
        </Reveal>

        <Reveal>
          <SectionTitle kicker="Section E" title="School Infrastructure" />
          <SimpleTable rows={infrastructure} />
          <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="School Infrastructure Inspection"
              src="https://www.youtube.com/embed/KAFSox2v_Xs"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </div>
  )
      }
