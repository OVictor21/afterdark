import React from 'react';
import { CalendarDays, MapPin, Ticket } from 'lucide-react';

export function EventCard({ event, showDetails = false, isPast = false, onSelect }) {
  const actionLabel = isPast ? 'View event' : 'Get tickets';

  return (
    <article className="group overflow-hidden border border-white/10 bg-black">
      <div className="relative aspect-[3/4] overflow-hidden bg-black">
        <img src={event.image} alt={event.title} className="h-full w-full object-contain opacity-90 transition duration-500 group-hover:opacity-100" />
        <div className={`${isPast ? 'bg-zinc-800' : 'bg-ember'} absolute left-4 top-4 px-3 py-2 text-sm font-black`}>
          {event.date}
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-silver/75">{event.tag}</p>
        <h3 className="mt-3 text-2xl font-black text-white">{event.title}</h3>
        <div className="mt-5 grid gap-2 text-sm text-zinc-300">
          <span className="inline-flex items-center gap-2"><MapPin size={16} />{event.location}</span>
          {showDetails && <span className="inline-flex items-center gap-2"><CalendarDays size={16} />{event.fullDate} · {event.time}</span>}
          {!isPast && <span>{event.price}</span>}
        </div>
        {isPast ? (
          <button
            onClick={() => onSelect?.(event.slug)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-white/10 px-4 py-3 text-center text-sm font-bold uppercase text-zinc-400 transition hover:border-silver hover:text-white"
          >
            {actionLabel} <Ticket size={16} />
          </button>
        ) : (
          <button
            onClick={() => onSelect?.(event.slug)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-white/15 py-3 text-sm font-bold uppercase text-silver transition hover:border-ember hover:bg-ember hover:text-white"
          >
            {actionLabel} <Ticket size={16} />
          </button>
        )}
      </div>
    </article>
  );
}

export function InfoCard({ title, text, icon: Icon }) {
  return (
    <article className="border border-white/10 bg-smoke p-6">
      <Icon className="text-ember" size={25} />
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-400">{text}</p>
    </article>
  );
}

export function MiniStat({ icon: Icon, title, text }) {
  return (
    <div className="border border-white/10 bg-black/40 p-4">
      <Icon size={20} className="text-ember" />
      <p className="mt-3 font-black text-white">{title}</p>
      <p className="text-sm text-zinc-400">{text}</p>
    </div>
  );
}
