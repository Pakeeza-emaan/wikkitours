import { Heart, Leaf, Mountain, Award } from 'lucide-react';
import { team } from '@/data/content';

const values = [
  {
    icon: Heart,
    title: 'Personal, always',
    description:
      'No call centres. You talk to the person who designed your trip, before, during, and after.',
  },
  {
    icon: Leaf,
    title: 'Responsible travel',
    description:
      'We partner with local families, guesthouses, and drivers so your money stays in the valleys.',
  },
  {
    icon: Mountain,
    title: 'Safety first',
    description:
      'Certified guides, oxygen kits, and satellite phones on every high-altitude journey.',
  },
  {
    icon: Award,
    title: 'Award-winning',
    description:
      'Voted Best Northern Pakistan Tour Operator three years running by the Pakistan Tourism Forum.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Story */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/35905389/pexels-photo-35905389.jpeg?auto=compress&cs=tinysrgb&h=700&w=560"
                alt="Local girl in traditional dress against the mountains of Gilgit-Baltistan"
                loading="lazy"
                className="h-[480px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-ocean-600 p-6 text-white shadow-xl sm:block">
              <div className="font-display text-4xl font-600">15+</div>
              <div className="text-sm text-ocean-100">years guiding the north</div>
            </div>
          </div>

          <div>
            <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-700">
              Our Story
            </span>
            <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight text-ink-900 sm:text-5xl text-balance">
              Born in the mountains, <span className="italic text-ocean-600">built for you</span>
            </h2>
            <div className="reveal reveal-delay-2 mt-5 space-y-4 text-ink-600 leading-relaxed">
              <p>
                Travel with Wikki began with a single promise: to show the world the
                Pakistan that locals know and love. Our founder, Wikki Khan, grew up in
                Gilgit — watching tour buses rush past the real magic.
              </p>
              <p>
                So he started small. One jeep. A handful of friends. Trips that felt less
                like tours and more like coming home. Fifteen years later, we have guided
                over 12,000 travellers through Hunza, Skardu, Swat, and beyond — but the
                feeling has never changed.
              </p>
              <p>
                Every trip is still personal. Every guide is still local. And every
                journey still ends with the same words: <em>&ldquo;When can we come back?&rdquo;</em>
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal group rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ocean-300 hover:shadow-lg"
              data-reveal-delay={i * 90}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-100 text-ocean-600 transition-transform duration-500 group-hover:scale-110 group-hover:bg-ocean-600 group-hover:text-white">
                <v.icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-lg font-500 text-ink-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.description}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-700">
              Meet the Team
            </span>
            <h3 className="reveal reveal-delay-1 font-display text-3xl font-400 tracking-tight text-ink-900 sm:text-4xl">
              The people behind your journey
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="reveal group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                data-reveal-delay={i * 120}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h4 className="font-display text-xl font-500">{member.name}</h4>
                    <p className="text-sm text-ocean-200">{member.role}</p>
                  </div>
                </div>
                <p className="p-5 text-sm leading-relaxed text-ink-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
