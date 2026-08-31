import React from 'react';
import { CalendarDays, Disc3, Flame, Ticket } from 'lucide-react';
import { EventCard } from '../components/Cards';
import SectionLabel from '../components/SectionLabel';
import { pastEvents, upcomingEvents } from '../data/events';

export default function EventsPage({ goTo }) {
  const openEvent = (slug) => goTo(`event:${slug}`);

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden border-b border-white/10 bg-smoke">
        <img
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=85"
          alt="Concert crowd with stage lights"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.96),rgba(0,0,0,0.58),rgba(0,0,0,0.96))]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <SectionLabel icon={CalendarDays} label="Events" />
          <h1 className="mt-5 max-w-4xl font-display text-6xl leading-none text-white sm:text-7xl">
            Tickets & AFTERDARK nights.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Catch the next rave, revisit the house party archive, and move through the night with the AFTERDARK community.
          </p>
          <button onClick={() => goTo('create')} className="mt-8 inline-flex items-center gap-2 bg-ember px-6 py-4 text-sm font-black uppercase text-white shadow-glow">
            List your event <Ticket size={18} />
          </button>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel icon={Flame} label="Upcoming" />
          <div className="mt-8 grid max-w-xl gap-5">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} event={event} showDetails onSelect={openEvent} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-smoke py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel icon={Disc3} label="Past events" />
          <div className="mt-8 grid max-w-xl gap-5">
            {pastEvents.map((event) => (
              <EventCard key={event.title} event={event} isPast onSelect={openEvent} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
