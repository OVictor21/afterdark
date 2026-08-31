import React from 'react';
import { Mail, Users } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function CommunityJoinSection({
  communityCount,
  communityEmail,
  setCommunityEmail,
  communityMessage,
  joinCommunity,
  compact = false,
}) {
  const content = (
    <div className={compact ? 'self-center' : ''}>
      <SectionLabel icon={Users} label="Community" />
      <h2 className="mt-4 font-display text-5xl leading-none text-white sm:text-6xl">
        Join {communityCount.toLocaleString()} people moving with AFTERDARK.
      </h2>
      <p className="mt-5 max-w-xl leading-7 text-zinc-300">
        Get early event drops, private invite links, city announcements, and community-only moments before they hit the timeline.
      </p>
    </div>
  );

  const form = (
    <form className="self-center border border-white/10 bg-black p-6 sm:p-8" onSubmit={joinCommunity}>
      <div className="grid gap-2">
        <label className="text-sm font-bold text-zinc-300" htmlFor={compact ? 'community-page-email' : 'community-email'}>
          Email address
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id={compact ? 'community-page-email' : 'community-email'}
            type="email"
            value={communityEmail}
            onChange={(event) => setCommunityEmail(event.target.value)}
            placeholder="you@afterdark.ng"
            className="h-13 min-h-13 flex-1 border border-white/10 bg-smoke px-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-ember"
          />
          <button className="inline-flex min-h-13 items-center justify-center gap-2 bg-ember px-6 py-4 text-sm font-black uppercase text-white shadow-glow transition hover:bg-red-900">
            Join <Mail size={18} />
          </button>
        </div>
        {communityMessage && <p className="mt-3 text-sm font-semibold text-silver">{communityMessage}</p>}
      </div>
      <div className="mt-7 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
        {[
          [communityCount.toLocaleString(), 'Members'],
          ['12', 'Cities'],
          ['48', 'Drops'],
        ].map(([value, label]) => (
          <div key={label} className="bg-smoke p-4">
            <p className="font-display text-3xl text-white">{value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );

  if (compact) {
    return (
      <div className="grid gap-8">
        {content}
        {form}
      </div>
    );
  }

  return (
    <section id="community" className="border-y border-white/10 bg-blood py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {content}
        {form}
      </div>
    </section>
  );
}
