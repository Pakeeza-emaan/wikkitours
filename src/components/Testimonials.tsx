import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-700">
            Traveller Stories
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight text-ink-900 sm:text-5xl text-balance">
            Memories made, <span className="italic text-ocean-600">never forgotten</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal group relative flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              data-reveal-delay={i * 120}
            >
              <Quote className="absolute right-7 top-7 h-10 w-10 text-sand-200 transition-colors duration-500 group-hover:text-sand-300" />
              <div className="flex items-center gap-1 text-sand-400">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-ink-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-ink-100 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-sand-200"
                />
                <div>
                  <div className="font-600 text-ink-900">{t.name}</div>
                  <div className="text-sm text-ocean-600">{t.trip}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
