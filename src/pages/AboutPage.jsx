import React from 'react';
import { ArrowRight, Disc3, Flame, Music2, ShieldCheck, Users } from 'lucide-react';
import { InfoCard } from '../components/Cards';
import SectionLabel from '../components/SectionLabel';

export default function AboutPage({ goTo }) {
  return (
    <main className="pt-20">
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="self-center">
            <SectionLabel icon={Disc3} label="About us" />
            <h1 className="mt-5 font-display text-6xl leading-none text-white sm:text-7xl">
              AFTERDARK is nightlife built around culture.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              We bring music, fashion, people, and city energy into rooms that feel intentional from the first flyer to the last song.
            </p>
            <button onClick={() => goTo('events')} className="mt-8 inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-black uppercase text-white shadow-glow">
              See events <ArrowRight size={18} />
            </button>
          </div>
          <div className="overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=85"
              alt="Festival crowd at night"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-smoke py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <InfoCard title="What we do" text="House parties, raves, themed events, Halloween parties, and city-to-city nightlife experiences that celebrate Afrobeats and African culture." icon={Music2} />
          <InfoCard title="Who we serve" text="Young, social, culture-driven people who love music, nightlife, fashion, entertainment, and the African creative pulse." icon={Users} />
          <InfoCard title="Mission" text="To create unforgettable nightlife experiences that bring people together through music, energy, and entertainment." icon={Flame} />
          <InfoCard title="Vision" text="To become a leading African nightlife and entertainment brand across Nigeria, Africa, and beyond." icon={ShieldCheck} />
        </div>
      </section>
    </main>
  );
}
