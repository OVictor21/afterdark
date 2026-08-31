import React from 'react';
import { ArrowRight, Check, CircleDollarSign, ShieldCheck, Ticket, Upload } from 'lucide-react';
import { MiniStat } from '../components/Cards';
import SectionLabel from '../components/SectionLabel';

export default function CreateEventPage({ form, setForm, completion, goTo }) {
  const fields = [
    ['name', 'Organizer name', 'After Dark Collective'],
    ['email', 'Contact email', 'events@afterdark.ng'],
    ['eventName', 'Event name', 'Mainland Midnight'],
    ['city', 'City / venue', 'Lagos'],
    ['date', 'Event date', '2026-10-31'],
    ['tickets', 'Ticket tiers', 'Regular ₦10,000, VIP ₦25,000'],
  ];

  return (
    <main className="pt-20">
      <section className="border-b border-white/10 bg-smoke">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="self-center">
            <SectionLabel icon={Ticket} label="Create events" />
            <h1 className="mt-4 font-display text-6xl leading-none text-white sm:text-7xl">
              Sell tickets through the AFTERDARK platform.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Submit your party, rave, pop-up, listening night, or city experience. Our team reviews the event, helps package it, and turns it into a ticket-ready listing.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MiniStat icon={Upload} title="Submit" text="Event details" />
              <MiniStat icon={ShieldCheck} title="Review" text="Brand fit" />
              <MiniStat icon={CircleDollarSign} title="Sell" text="Ticket tiers" />
            </div>
          </div>

          <form className="border border-white/10 bg-black p-5 sm:p-7" onSubmit={(event) => event.preventDefault()}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-silver">Application</p>
                <h2 className="mt-2 text-2xl font-black text-white">Event host form</h2>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-full border border-ember text-sm font-black text-silver">
                {completion}%
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map(([key, label, placeholder]) => (
                <label key={key} className="grid gap-2 text-sm font-bold text-zinc-300">
                  {label}
                  <input
                    type={key === 'email' ? 'email' : key === 'date' ? 'date' : 'text'}
                    value={form[key]}
                    onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
                    placeholder={placeholder}
                    className="h-12 border border-white/10 bg-smoke px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-ember"
                  />
                </label>
              ))}
            </div>

            <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-300">
              Event story
              <textarea
                value={form.story}
                onChange={(event) => setForm((current) => ({ ...current, story: event.target.value }))}
                placeholder="Tell us the sound, audience, dress code, capacity, and the experience you want people to remember."
                className="min-h-32 resize-none border border-white/10 bg-smoke p-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-ember"
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex flex-1 items-center justify-center gap-2 bg-ember px-5 py-4 text-sm font-black uppercase text-white shadow-glow">
                Submit event <ArrowRight size={18} />
              </button>
              <button type="button" onClick={() => goTo('home')} className="border border-white/15 px-5 py-4 text-sm font-black uppercase text-silver">
                Back home
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-8">
          {[
            ['Ticket setup', 'Regular, VIP, table reservations, early bird, promo codes, and guest-list capacity.'],
            ['Event page', 'A branded listing with visuals, date, venue, lineup, dress code, and payment-ready ticket cards.'],
            ['Promotion support', 'AFTERDARK-style packaging that makes your event feel like part of a wider cultural calendar.'],
          ].map(([title, text]) => (
            <div key={title} className="border border-white/10 bg-smoke p-6">
              <Check className="text-ember" size={24} />
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
