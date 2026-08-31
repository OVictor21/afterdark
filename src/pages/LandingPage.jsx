import React from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Disc3,
  Flame,
  Music2,
  ShieldCheck,
  Sparkles,
  Ticket,
  Users,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { EventCard, InfoCard } from '../components/Cards';
import CommunityJoinSection from '../components/CommunityJoinSection';
import SectionLabel from '../components/SectionLabel';
import { upcomingEvents, values } from '../data/events';

export default function LandingPage({
  goTo,
  soundOn,
  setSoundOn,
  communityCount,
  communityEmail,
  setCommunityEmail,
  communityMessage,
  joinCommunity,
}) {
  return (
    <main>
      <section id="home" className="relative overflow-hidden rounded-b-[2rem] border-b border-white/10 bg-black sm:rounded-b-[3rem]">
        <video
          className="h-[92vh] min-h-[640px] w-full object-cover sm:h-screen"
          autoPlay
          muted={!soundOn}
          loop
          playsInline
          preload="auto"
          aria-label="AFTERDARK nightlife video"
        >
          <source src="/afterdark-opening.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.62)_82%,rgba(0,0,0,0.9)),radial-gradient(circle_at_18%_18%,rgba(127,17,23,0.32),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:pb-16 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-7">
            <img src="/afterdark-logo.jpeg" alt="AFTERDARK" className="h-28 w-28 rounded-full border border-white/20 object-cover shadow-glow sm:h-36 sm:w-36" />
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-silver/30 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-silver backdrop-blur-md">
                <Sparkles size={15} />
                Afrobeats culture after hours
              </p>
              <h1 className="font-display text-5xl leading-[0.88] tracking-normal text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
                AFTERDARK
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-100 sm:text-xl sm:leading-8">
                Nightlife, Afrobeats, African culture, and unforgettable rooms built for people who come alive after dark.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => goTo('events')} className="inline-flex items-center justify-center gap-2 bg-ember px-7 py-4 text-sm font-black uppercase text-white shadow-glow transition hover:bg-red-900">
                  Explore events <ArrowRight size={18} />
                </button>
                <button onClick={() => goTo('community')} className="inline-flex items-center justify-center gap-2 border border-silver/40 px-7 py-4 text-sm font-black uppercase text-silver transition hover:border-white hover:text-white">
                  Join community <Users size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setSoundOn((value) => !value)}
          className="absolute right-5 top-1/2 z-10 grid h-[3.25rem] w-[3.25rem] -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/42 text-white shadow-2xl backdrop-blur-md transition hover:border-silver hover:bg-black/70 sm:right-8"
          aria-label={soundOn ? 'Turn sound off' : 'Turn sound on'}
        >
          {soundOn ? <Volume2 size={23} /> : <VolumeX size={23} />}
        </button>
      </section>

      <section className="relative min-h-[82vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1800&q=85"
          alt="Crowd at an Afrobeats nightlife event"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(127,17,23,0.58),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.98),rgba(0,0,0,0.55),rgba(0,0,0,0.96))]" />
        <div className="relative mx-auto grid min-h-[calc(92vh-5rem)] max-w-7xl content-center px-5 py-16 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 border border-silver/30 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-silver">
              <Sparkles size={15} />
              Afrobeats culture after hours
            </p>
            <h1 className="font-display text-7xl leading-[0.9] tracking-normal text-white sm:text-8xl lg:text-[9.5rem]">
              AFTERDARK
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Parties, raves, Halloween nights, house-party rituals, and city-to-city experiences built around African culture, music, fashion, and the rush of a room moving as one.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => goTo('events')} className="inline-flex h-13 items-center justify-center gap-2 bg-ember px-7 py-4 text-sm font-black uppercase text-white shadow-glow transition hover:bg-red-900">
                Explore events <ArrowRight size={18} />
              </button>
              <button onClick={() => goTo('create')} className="inline-flex h-13 items-center justify-center gap-2 border border-silver/40 px-7 py-4 text-sm font-black uppercase text-silver transition hover:border-white hover:text-white">
                Host with us <Ticket size={18} />
              </button>
            </div>
          </div>
          <div className="mt-14 grid max-w-4xl grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {['House parties', 'Raves', 'Themed nights', 'City tours'].map((item) => (
              <div key={item} className="bg-black/70 p-4 text-sm font-semibold text-silver">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventsPreview goTo={goTo} />
      <AboutPreview goTo={goTo} />
      <CommunityJoinSection
        communityCount={communityCount}
        communityEmail={communityEmail}
        setCommunityEmail={setCommunityEmail}
        communityMessage={communityMessage}
        joinCommunity={joinCommunity}
      />
      <HostPreview goTo={goTo} />
    </main>
  );
}

function EventsPreview({ goTo }) {
  const openEvent = (slug) => goTo(`event:${slug}`);

  return (
    <section id="events" className="border-y border-white/10 bg-smoke py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionLabel icon={Flame} label="Live calendar" />
        <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-display text-5xl leading-none text-white sm:text-6xl">
            Catch the next AFTERDARK experience.
          </h2>
          <button onClick={() => goTo('events')} className="inline-flex w-fit items-center gap-2 bg-silver px-5 py-3 text-sm font-black uppercase text-black">
            View all events <ChevronRight size={17} />
          </button>
        </div>
        <div className="mt-10 grid max-w-xl gap-5">
          {upcomingEvents.map((event) => (
            <EventCard key={event.title} event={event} showDetails onSelect={openEvent} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview({ goTo }) {
  return (
    <section id="about" className="bg-black py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionLabel icon={Disc3} label="Who we are" />
          <h2 className="mt-4 font-display text-5xl leading-none text-white sm:text-6xl">
            We do not just throw parties. We create culture-led experiences.
          </h2>
          <button onClick={() => goTo('about')} className="mt-7 inline-flex w-fit items-center gap-2 border border-silver/40 px-6 py-4 text-sm font-black uppercase text-silver transition hover:border-white hover:text-white">
            About us <ArrowRight size={18} />
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="What we do" text="House parties, raves, themed events, Halloween parties, and city-to-city nightlife experiences that celebrate Afrobeats and African culture." icon={Music2} />
          <InfoCard title="Who we serve" text="Young, social, culture-driven people who love music, nightlife, fashion, entertainment, and the African creative pulse." icon={Users} />
          <InfoCard title="Mission" text="To create unforgettable nightlife experiences that bring people together through music, energy, and entertainment." icon={Flame} />
          <InfoCard title="Vision" text="To become a leading African nightlife and entertainment brand across Nigeria, Africa, and beyond." icon={ShieldCheck} />
        </div>
      </div>
    </section>
  );
}

function HostPreview({ goTo }) {
  return (
    <>
      <section className="border-y border-white/10 bg-blood py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 lg:px-8">
          {values.map((value) => (
            <span key={value} className="border border-silver/30 bg-black/35 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-silver">
              {value}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1571266028243-d220c6a7edbf?auto=format&fit=crop&w=1400&q=85"
              alt="DJ performing at a nightlife event"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center border border-white/10 bg-smoke p-7">
            <SectionLabel icon={CalendarDays} label="Ticket platform" />
            <h2 className="mt-4 font-display text-5xl leading-none text-white">Host your crowd on AFTERDARK.</h2>
            <p className="mt-5 leading-7 text-zinc-300">
              Creators, promoters, DJs, and culture crews can submit events, publish ticket tiers, and sell through the AFTERDARK platform.
            </p>
            <button onClick={() => goTo('create')} className="mt-7 inline-flex w-fit items-center gap-2 bg-ember px-6 py-4 text-sm font-black uppercase">
              Create event <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
