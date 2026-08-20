import { ArrowRight, MapPin, Play, Star } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/35302563/pexels-photo-35302563.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1900';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Aerial view of a tropical beach with turquoise water"
          className="h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/25 to-ink-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/50 to-transparent" />
      </div>

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-ocean-400/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-10 top-24 h-56 w-56 rounded-full bg-sand-300/20 blur-3xl animate-float-slow" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20 lg:px-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-ocean-300" />
              <span className="h-2 w-2 rounded-full bg-ocean-400" />
            </span>
            Now booking 2026 adventures — earlybird savings inside
          </div>

          <h1
            className="animate-fade-up font-display text-5xl font-400 leading-[1.04] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            The north is calling.
            <br />
            <span className="italic text-ocean-200">Let&apos;s go answer it</span> together.
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-white/85"
            style={{ animationDelay: '0.2s' }}
          >
            Travel with Wikki crafts deeply personal journeys across Pakistan&apos;s
            breathtaking northern areas — so you collect moments, not just souvenirs.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#tours"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-600 text-ink-900 shadow-lg shadow-ink-950/20 transition-all duration-300 hover:bg-ocean-500 hover:text-white"
            >
              Explore Tours
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#destinations"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-6 py-4 text-base font-500 text-white backdrop-blur transition-all duration-300 hover:bg-white/15"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
                <Play className="h-4 w-4 fill-white" />
              </span>
              Watch the journey
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="animate-fade-up mt-14 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: '0.45s' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[
                  'https://images.pexels.com/photos/33820671/pexels-photo-33820671.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                  'https://images.pexels.com/photos/17030108/pexels-photo-17030108.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                  'https://images.pexels.com/photos/33820660/pexels-photo-33820660.jpeg?auto=compress&cs=tinysrgb&h=80&w=80',
                  'https://images.pexels.com/photos/14010684/pexels-photo-14010684.png?auto=compress&cs=tinysrgb&h=80&w=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy traveller"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-white/85">
                <div className="flex items-center gap-1 text-ocean-200">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-white/70">Loved by 12,000+ travellers</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4 text-ocean-200" />
              20+ destinations across Pakistan&apos;s northern areas
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 lg:flex">
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
      </div>
    </section>
  );
}
