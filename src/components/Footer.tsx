import { useState } from 'react';
import { Facebook, Instagram, Mail, Plane, Send, Twitter } from 'lucide-react';

const columns = [
  {
    title: 'Company',
    links: ['About Wikki', 'Our Guides', 'Sustainability', 'Careers', 'Press'],
  },
  {
    title: 'Destinations',
    links: ['Hunza Valley', 'Skardu', 'Swat', 'Fairy Meadows', 'Neelum Valley', 'Naran'],
  },
  {
    title: 'Support',
    links: ['Contact us', 'FAQs', 'Travel insurance', 'Booking terms', 'Privacy'],
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative bg-ink-950 pt-20 text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 pb-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="group flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ocean-600 text-white">
                <Plane className="h-5 w-5 -rotate-45" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-600 text-white">
                  Travel with Wikki
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                  Curated Journeys
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              We design deeply personal journeys across Pakistan&apos;s northern areas —
              from Hunza to Skardu to the valleys of Swat — so you collect moments,
              not just souvenirs.
            </p>

            {/* Newsletter */}
            <div className="mt-7">
              <h4 className="text-sm font-600 text-white">
                Get travel inspiration in your inbox
              </h4>
              {subscribed ? (
                <p className="mt-3 flex items-center gap-2 text-sm text-ocean-300">
                  <Mail className="h-4 w-4" />
                  You&apos;re on the list! Watch for our next adventure.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubscribed(true);
                  }}
                  className="mt-3 flex max-w-sm gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-ocean-400"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="group flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-ocean-600 text-white transition-all duration-300 hover:bg-ocean-500"
                  >
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:bg-ocean-600 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-600 uppercase tracking-[0.16em] text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-white/55 transition-colors hover:text-ocean-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Travel with Wikki. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with care for the curious traveller.
          </p>
        </div>
      </div>
    </footer>
  );
}
