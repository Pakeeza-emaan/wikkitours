import { useEffect, useState } from 'react';
import {
  Calendar,
  Check,
  Clock,
  MapPin,
  Mountain,
  Star,
  Users,
  X,
  ArrowRight,
} from 'lucide-react';
import type { Tour } from '@/data/content';

type Props = {
  tour: Tour | null;
  onClose: () => void;
  onBook: () => void;
};

export default function TourDetailModal({ tour, onClose, onBook }: Props) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (tour) {
      setActiveImg(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [tour]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!tour) return null;

  const meta = [
    { icon: Calendar, label: tour.bestSeason },
    { icon: Mountain, label: tour.difficulty },
    { icon: Users, label: `${tour.groupSize} people` },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink-950/70 p-4 backdrop-blur-sm sm:p-8">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative my-auto w-full max-w-4xl animate-scale-in overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-ink-800 shadow-md backdrop-blur transition-all hover:bg-white hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero image gallery */}
        <div className="relative h-72 overflow-hidden sm:h-80">
          <img
            src={tour.gallery[activeImg]}
            alt={tour.title}
            className="h-full w-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
          {tour.tag && (
            <span className="absolute left-5 top-5 rounded-full bg-ocean-600 px-3 py-1 text-xs font-600 uppercase tracking-wider text-white shadow-lg">
              {tour.tag}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex items-center gap-1.5 text-xs font-600 uppercase tracking-wider text-white/90">
              <MapPin className="h-3.5 w-3.5" /> {tour.location}
            </div>
            <h2 className="mt-1 font-display text-3xl font-500 text-white sm:text-4xl">
              {tour.title}
            </h2>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 px-5 pt-3">
          {tour.gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`h-14 w-20 overflow-hidden rounded-lg transition-all duration-300 ${
                activeImg === i
                  ? 'ring-2 ring-ocean-500 ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={src} alt={`${tour.title} ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <div className="max-h-[calc(100vh-420px)] overflow-y-auto p-5 sm:p-7">
          {/* Quick info bar */}
          <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-sand-100 p-4">
            <div className="flex items-center gap-2 text-sm font-600 text-ink-800">
              <Star className="h-4 w-4 fill-sand-400 text-sand-400" />
              {tour.rating}
              <span className="font-400 text-ink-400">({tour.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-600">
              <Clock className="h-4 w-4 text-ocean-600" /> {tour.duration}
            </div>
            {meta.map((m, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-ink-600">
                <m.icon className="h-4 w-4 text-ocean-600" /> {m.label}
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="mt-6">
            <h3 className="font-display text-xl font-500 text-ink-900">Overview</h3>
            <p className="mt-3 leading-relaxed text-ink-600">{tour.overview}</p>
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h3 className="font-display text-xl font-500 text-ink-900">Highlights</h3>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-ink-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: h }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div className="mt-6">
            <h3 className="font-display text-xl font-500 text-ink-900">Day-by-day itinerary</h3>
            <ol className="mt-4 space-y-0">
              {tour.itinerary.map((d, i) => (
                <li key={d.day} className="relative flex gap-4 pb-6 last:pb-0">
                  {/* timeline line */}
                  {i < tour.itinerary.length - 1 && (
                    <span className="absolute left-[18px] top-9 h-full w-px bg-ink-200" />
                  )}
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ocean-600 text-sm font-700 text-white shadow-md">
                    {d.day}
                  </span>
                  <div>
                    <h4 className="font-600 text-ink-900">
                      Day {d.day}: {d.title}
                    </h4>
                    <p
                      className="mt-1 text-sm leading-relaxed text-ink-500"
                      dangerouslySetInnerHTML={{ __html: d.description }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Included / Excluded */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-500 text-ink-900">What&apos;s included</h3>
              <ul className="mt-3 space-y-2.5">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean-600" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-500 text-ink-900">Not included</h3>
              <ul className="mt-3 space-y-2.5">
                {tour.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-400">
                    <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-300" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky booking bar */}
        <div className="flex items-center justify-between gap-4 border-t border-ink-100 bg-white p-5">
          <div>
            <span className="text-xs text-ink-400">from</span>
            <div className="font-display text-3xl font-600 text-ink-900">{tour.price}</div>
            <span className="text-xs text-ink-400">per person</span>
          </div>
          <button
            onClick={onBook}
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-4 font-600 text-sand-50 transition-all duration-300 hover:bg-ocean-600"
          >
            Book this trip
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
