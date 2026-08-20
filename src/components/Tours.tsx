import { ArrowRight, Check, Clock, MapPin, Star } from 'lucide-react';
import { tours, type Tour } from '@/data/content';

type Props = {
  onSelectTour: (tour: Tour) => void;
};

export default function Tours({ onSelectTour }: Props) {
  return (
    <section id="tours" className="relative bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-700">
              Featured Journeys
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight text-ink-900 sm:text-5xl text-balance">
              Trips our travellers <span className="italic text-ocean-600">can&apos;t stop talking about</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal reveal-delay-2 group inline-flex items-center gap-2 text-sm font-600 text-ink-800 transition-colors hover:text-ocean-600"
          >
            View all packages
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {tours.map((t, i) => (
            <article
              key={t.id}
              className="reveal group flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              data-reveal-delay={i * 120}
              onClick={() => onSelectTour(t)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                {t.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-ocean-600 px-3 py-1 text-xs font-600 uppercase tracking-wider text-white shadow-lg">
                    {t.tag}
                  </span>
                )}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-sm shadow-md backdrop-blur">
                  <Star className="h-4 w-4 fill-sand-400 text-sand-400" />
                  <span className="font-700 text-ink-900">{t.rating}</span>
                  <span className="text-ink-400">({t.reviews})</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-xs font-600 uppercase tracking-wider text-ocean-600">
                  <MapPin className="h-3.5 w-3.5" /> {t.location}
                </div>
                <h3 className="mt-2 font-display text-2xl font-500 text-ink-900">{t.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-ink-500">
                  <Clock className="h-4 w-4" /> {t.duration}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-ink-600">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: h }} />
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between border-t border-ink-100 pt-5">
                  <div>
                    <span className="text-xs text-ink-400">from</span>
                    <div className="font-display text-2xl font-600 text-ink-900">{t.price}</div>
                    <span className="text-xs text-ink-400">per person</span>
                  </div>
                  <span className="group/btn inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-600 text-sand-50 transition-all duration-300 group-hover:bg-ocean-600">
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
