import { features } from '@/data/content';

export default function Features() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-ocean-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sand-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-200">
            Why Travel with Wikki
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight sm:text-5xl text-balance">
            Not just a trip. <span className="italic text-ocean-300">A story worth telling.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-lg text-white/70">
            We sweat the small stuff so your only job is to be present. Here is what
            makes travelling with us feel different.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ocean-400/40 hover:bg-white/[0.07]"
              data-reveal-delay={i * 100}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-ocean-500/0 blur-2xl transition-all duration-500 group-hover:bg-ocean-500/20" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-500/30 to-ocean-700/20 text-ocean-200 ring-1 ring-ocean-400/30 transition-transform duration-500 group-hover:scale-110">
                <f.icon className="h-7 w-7" strokeWidth={1.6} />
              </span>
              <h3 className="relative mt-6 font-display text-xl font-500">{f.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/65">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
