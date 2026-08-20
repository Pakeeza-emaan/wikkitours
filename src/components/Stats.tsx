import { useCountUp } from '@/hooks/useScrollReveal';

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 12, suffix: 'K+', label: 'Happy travellers' },
  { value: 20, suffix: '+', label: 'Destinations' },
  { value: 15, suffix: '', label: 'Years of craft' },
  { value: 98, suffix: '%', label: 'Would book again' },
];

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="reveal text-center">
      <div className="font-display text-5xl font-500 text-white sm:text-6xl">
        <span ref={ref}>{value}</span>
        <span className="text-ocean-300">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ocean-700 via-ocean-800 to-ink-950 py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 rounded-full bg-ocean-400/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
