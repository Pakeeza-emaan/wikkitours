import { Camera } from 'lucide-react';
import { galleryImages } from '@/data/content';

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-200">
            <Camera className="h-3.5 w-3.5" /> Postcards from the North
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight text-white sm:text-5xl text-balance">
            A glimpse of <span className="italic text-ocean-300">what awaits</span>
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-white/60">
            Every photo below was taken on a real Travel with Wikki trip. This is the
            Pakistan we cannot wait to show you.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <figure
              key={i}
              className={`reveal group relative overflow-hidden rounded-2xl ${
                img.span ? 'sm:col-span-2 sm:row-span-1' : ''
              }`}
              data-reveal-delay={i * 80}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
