import React from 'react';
import { Menu, Ticket, X } from 'lucide-react';

export function Nav({ page, menuOpen, setMenuOpen, goTo }) {
  const links = [
    ['home', 'Experience'],
    ['events', 'Events'],
    ['about', 'About'],
    ['community', 'Community'],
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between rounded-full border border-white/15 bg-black/28 px-4 shadow-2xl backdrop-blur-xl sm:px-6">
        <button onClick={() => goTo('home')} className="group flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-silver/45 bg-black shadow-glow">
            <img src="/afterdark-logo.jpeg" alt="AFTERDARK logo" className="h-full w-full object-cover" />
          </span>
          <span className="text-left">
            <span className="block font-display text-xl tracking-normal text-white sm:text-2xl">AFTERDARK</span>
            <span className="hidden text-xs uppercase tracking-[0.28em] text-silver/80 sm:block">Nightlife</span>
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`text-sm font-medium transition ${
                page === id ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => goTo('create')}
            className="inline-flex h-11 items-center gap-2 bg-silver px-5 text-sm font-black uppercase text-black transition hover:bg-white"
          >
            <Ticket size={17} />
            Create Event
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-white/15 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-black/82 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="grid gap-3">
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="border border-white/10 px-4 py-3 text-left text-sm text-zinc-200"
              >
                {label}
              </button>
            ))}
            <button onClick={() => goTo('create')} className="bg-ember px-4 py-3 text-left text-sm font-black uppercase">
              Create Event
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer({ goTo }) {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-3xl text-white">AFTERDARK</p>
          <p className="mt-2 text-sm text-zinc-500">Culture · Afrobeats · Community · Experience</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => goTo('events')} className="border border-white/10 px-4 py-2 text-sm font-bold text-zinc-400">
            Events
          </button>
          <button onClick={() => goTo('about')} className="border border-white/10 px-4 py-2 text-sm font-bold text-zinc-400">
            About
          </button>
          <button onClick={() => goTo('community')} className="border border-white/10 px-4 py-2 text-sm font-bold text-zinc-400">
            Community
          </button>
          <button onClick={() => goTo('create')} className="border border-silver/30 px-4 py-2 text-sm font-bold text-silver">
            Create Event
          </button>
        </div>
      </div>
    </footer>
  );
}
