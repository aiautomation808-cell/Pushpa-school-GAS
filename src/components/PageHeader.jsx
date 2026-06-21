export function PageHeader({ title, subtitle, image, breadcrumb }) {
  return (
    <section className="relative isolate pt-32 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl shadow-primary-900/10 min-h-[400px] flex items-center p-8 sm:p-16">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-50/90 to-primary-100/40 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="page-fade max-w-3xl relative z-10 glass-panel p-8 rounded-3xl border border-white/60">
          {breadcrumb && (
            <span className="mb-4 inline-block rounded-full bg-gold-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-700 ring-1 ring-gold-200">
              {breadcrumb}
            </span>
          )}
          <h1 className="font-bold text-primary-950 text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg sm:text-xl text-primary-800 leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
