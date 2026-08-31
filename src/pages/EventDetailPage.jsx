import React from 'react';
import { ArrowLeft, CalendarDays, Check, Clock, MapPin, ShieldCheck, Ticket } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

export default function EventDetailPage({ event, goTo }) {
  if (!event) {
    return (
      <main className="grid min-h-screen place-items-center bg-black px-5 pt-24 text-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-silver">Event not found</p>
          <button onClick={() => goTo('events')} className="mt-6 inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-black uppercase text-white">
            <ArrowLeft size={17} /> Back to events
          </button>
        </div>
      </main>
    );
  }

  const isPast = event.status === 'past';

  return (
    <main className="pt-20">
      <section className="relative overflow-hidden border-b border-white/10 bg-smoke">
        <img src={event.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(0,0,0,0.68),rgba(0,0,0,0.98))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-20">
          <div className="overflow-hidden border border-white/10 bg-black shadow-2xl">
            <div className="relative aspect-[3/4]">
              <img src={event.image} alt={`${event.title} flyer`} className="h-full w-full object-contain" />
              <div className={`${isPast ? 'bg-zinc-800' : 'bg-ember'} absolute left-5 top-5 px-4 py-3 text-sm font-black uppercase text-white`}>
                {isPast ? 'Past' : 'Upcoming'}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <button onClick={() => goTo('events')} className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-bold uppercase text-zinc-400 transition hover:text-white">
              <ArrowLeft size={17} /> Events
            </button>
            <SectionLabel icon={Ticket} label="Tickets · Powered by eventOS" />
            <h2 className="mt-5 font-display text-6xl leading-none text-white sm:text-7xl">{event.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">{event.about}</p>

            <div className="mt-8 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              <DetailStat icon={MapPin} label="Location" value={event.location} />
              <DetailStat icon={CalendarDays} label="Starts" value={event.fullDate} />
              <DetailStat icon={Clock} label="Time" value={event.time} />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {event.highlights.map((item) => (
                <div key={item} className="border border-white/10 bg-black/45 p-4 text-sm font-bold text-silver">
                  <Check className="mb-3 text-ember" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionLabel icon={ShieldCheck} label="About the event" />
            <p className="mt-5 text-xl leading-9 text-zinc-300">{event.about}</p>
            <div className="mt-8 border border-white/10 bg-smoke p-6">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-silver">Powered by</p>
              <p className="mt-3 font-display text-4xl text-white">eventOS</p>
              <p className="mt-3 leading-7 text-zinc-400">
                Secure checkout, ticket delivery, inventory, and entry scanning are prepared for AFTERDARK guests.
              </p>
            </div>
          </div>

          <TicketPanel event={event} isPast={isPast} />
        </div>
      </section>
    </main>
  );
}

function DetailStat({ icon: Icon, label, value }) {
  return (
    <div className="bg-black/72 p-5">
      <Icon size={18} className="text-ember" />
      <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-500">{label}</p>
      <p className="mt-2 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

function TicketPanel({ event, isPast }) {
  return (
    <div className="border border-white/10 bg-smoke p-5 sm:p-7">
      <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-silver">Ticket options · NGN</p>
          <h3 className="mt-2 text-3xl font-black text-white">{isPast ? 'Event archive' : 'Secure checkout'}</h3>
        </div>
        <span className={`${isPast ? 'border-white/10 text-zinc-500' : 'border-ember/50 text-silver'} w-fit border px-3 py-2 text-xs font-black uppercase`}>
          {isPast ? 'Closed' : 'Available'}
        </span>
      </div>

      {isPast ? (
        <div className="py-10">
          <p className="text-lg leading-8 text-zinc-300">
            This AFTERDARK experience has ended. Tickets are closed, but the night stays in the archive.
          </p>
          <button className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-white/10 px-5 py-4 text-sm font-black uppercase text-zinc-500" disabled>
            Past event <Ticket size={17} />
          </button>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-3">
            {event.ticketOptions.map((ticket) => (
              <label key={ticket.name} className="grid gap-4 border border-white/10 bg-black/55 p-4 sm:grid-cols-[1fr_auto_5rem] sm:items-center">
                <span>
                  <span className="block font-black text-white">{ticket.name}</span>
                  <span className="mt-1 block text-sm text-zinc-500">{ticket.left}</span>
                </span>
                <span className="font-black text-silver">{ticket.price}</span>
                <input type="number" min="0" defaultValue="0" className="w-full border border-white/10 bg-black px-3 py-2 text-white outline-none focus:border-ember" aria-label={`${ticket.name} quantity`} />
              </label>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <input placeholder="Email" className="border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-ember" />
            <input placeholder="Name" className="border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-ember" />
            <input placeholder="Phone" className="border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none focus:border-ember" />
          </div>

          <button className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-ember px-5 py-4 text-sm font-black uppercase text-white shadow-glow transition hover:bg-red-900">
            Get ticket <Ticket size={17} />
          </button>
          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Prices are displayed in NGN. Payment is securely processed for the organiser's configured ticket flow.
          </p>
        </>
      )}
    </div>
  );
}
