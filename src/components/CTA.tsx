import { useState } from 'react';
import { Mail, MapPin, Phone, Plane, Send } from 'lucide-react';

const CTA_IMG =
  'https://images.pexels.com/photos/1303469/pexels-photo-1303469.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';

export default function CTA() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img
            src={CTA_IMG}
            alt="Turquoise waves meeting orange sands"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/80 to-ink-950/55" />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div className="text-white">
              <span className="reveal mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-600 uppercase tracking-[0.18em] text-ocean-200">
                Let&apos;s plan your trip
              </span>
              <h2 className="reveal reveal-delay-1 font-display text-4xl font-400 leading-tight tracking-tight sm:text-5xl text-balance">
                Your next great story <span className="italic text-ocean-200">starts here</span>
              </h2>
              <p className="reveal reveal-delay-2 mt-5 max-w-md text-lg text-white/75">
                Tell us where your heart is pointing. We will craft a journey around it
                and send a personalised plan within 48 hours.
              </p>

              <div className="reveal reveal-delay-3 mt-9 space-y-4">
                <a href="tel:+10000000000" className="flex items-center gap-3 text-white/85 transition-colors hover:text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                    <Phone className="h-5 w-5" />
                  </span>
                  +1 (000) 000-0000
                </a>
                <a href="mailto:hello@travelwithwikki.com" className="flex items-center gap-3 text-white/85 transition-colors hover:text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                    <Mail className="h-5 w-5" />
                  </span>
                  hello@travelwithwikki.com
                </a>
                <div className="flex items-center gap-3 text-white/85">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                    <MapPin className="h-5 w-5" />
                  </span>
                  Available worldwide · Remote planning
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="reveal reveal-delay-2 rounded-3xl bg-white/95 p-7 shadow-2xl backdrop-blur sm:p-9">
              {sent ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean-100 text-ocean-600">
                    <Plane className="h-8 w-8 -rotate-45" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-500 text-ink-900">
                    Off it goes!
                  </h3>
                  <p className="mt-2 max-w-xs text-ink-500">
                    Your request is on its way to Wikki. Expect a personalised reply
                    within 48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="font-display text-2xl font-500 text-ink-900">
                      Request a custom plan
                    </h3>
                    <p className="mt-1 text-sm text-ink-500">
                      No obligation. Just inspiration.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="First name" name="first" placeholder="Jane" />
                    <Field label="Last name" name="last" placeholder="Doe" />
                  </div>
                  <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
                  <div>
                    <label className="mb-1.5 block text-sm font-600 text-ink-800">
                      Dream destination
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-ink-200 bg-sand-50 px-4 py-3 text-ink-800 outline-none transition-colors focus:border-ocean-500 focus:bg-white"
                    >
                      <option value="" disabled>Pick a vibe…</option>
                      <option>Valley escape</option>
                      <option>Mountain adventure</option>
                      <option>Lakes & meadows</option>
                      <option>Cultural deep-dive</option>
                      <option>Surprise me!</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-600 text-ink-800">
                      Anything else?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Dates, budget, who's coming…"
                      className="w-full resize-none rounded-xl border border-ink-200 bg-sand-50 px-4 py-3 text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:border-ocean-500 focus:bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-4 font-600 text-sand-50 transition-all duration-300 hover:bg-ocean-600"
                  >
                    Send my request
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-600 text-ink-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-sand-50 px-4 py-3 text-ink-800 outline-none transition-colors placeholder:text-ink-300 focus:border-ocean-500 focus:bg-white"
      />
    </div>
  );
}
