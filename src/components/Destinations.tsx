import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { destinations } from '@/data/content';

export default function Destinations() {
  return (
    <section id="destinations" className="relative bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-700">
              <MapPin className="h-3.5 w-3.5" /> Where to next
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight text-ink-900 sm:text-5xl text-balance">
              Destinations that <span className="italic text-ocean-600">stay with you</span>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-sm text-ink-500">
            Six of our most-loved corners of the globe. Each one a different kind of
            beautiful — pick the feeling you are chasing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <article
              key={d.name}
              className="reveal group relative overflow-hidden rounded-3xl bg-ink-900 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
              data-reveal-delay={i * 90}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name}, ${d.country}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-600 uppercase tracking-wider text-ink-800 backdrop-blur">
                  {d.tag}
                </span>
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-500 text-white/80">
                    <MapPin className="h-3.5 w-3.5" /> {d.country}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-500">{d.name}</h3>
                  <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
                    <span className="flex items-center gap-1.5 text-sm text-white/80">
                      <Clock className="h-4 w-4" /> {d.days} days
                    </span>
                    <span className="text-sm">
                      <span className="text-white/60">from </span>
                      <span className="font-600 text-white">{d.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
