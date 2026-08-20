import { useEffect, useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const links = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Tours', href: '#tours' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-[0_8px_30px_-12px_rgba(18,17,16,0.25)] border-b border-white/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 ${
              scrolled ? 'bg-ocean-600 text-white' : 'bg-white/15 text-white backdrop-blur'
            }`}
          >
            <Plane className="h-5 w-5 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-600 tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              Travel with Wikki
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.22em] transition-colors duration-500 ${
                scrolled ? 'text-ink-400' : 'text-white/70'
              }`}
            >
              Curated Journeys
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`group relative text-sm font-500 transition-colors duration-300 ${
                  scrolled ? 'text-ink-600 hover:text-ink-900' : 'text-white/85 hover:text-white'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-ocean-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-600 transition-all duration-300 ${
              scrolled
                ? 'bg-ink-900 text-sand-50 hover:bg-ocean-600'
                : 'bg-white text-ink-900 hover:bg-ocean-500 hover:text-white'
            }`}
          >
            Plan My Trip
            <Plane className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
            scrolled ? 'text-ink-900' : 'text-white'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mx-4 mb-4 rounded-2xl border border-white/50 p-5 shadow-xl">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-ink-700 transition-colors hover:bg-sand-100 hover:text-ink-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-ink-900 px-4 py-3 text-center font-600 text-sand-50"
              >
                Plan My Trip
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
