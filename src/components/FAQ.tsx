import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="mb-14 text-center">
          <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-ocean-100 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-700">
            <HelpCircle className="h-3.5 w-3.5" /> Good to know
          </span>
          <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight text-ink-900 sm:text-5xl text-balance">
            Questions, <span className="italic text-ocean-600">answered</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="reveal overflow-hidden rounded-2xl border border-ink-100 bg-white transition-colors duration-300 hover:border-ocean-200"
                data-reveal-delay={i * 60}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-600 text-ink-900">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sand-100 text-ink-600 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-ocean-600 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-10 text-center text-ink-500">
          Still have questions?{' '}
          <a href="#contact" className="font-600 text-ocean-600 hover:text-ocean-700">
            Reach out to us
          </a>{' '}
          — we love a good question.
        </p>
      </div>
    </section>
  );
}
