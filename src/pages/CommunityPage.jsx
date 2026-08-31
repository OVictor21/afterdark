import React from 'react';
import { Check, Users } from 'lucide-react';
import CommunityJoinSection from '../components/CommunityJoinSection';
import SectionLabel from '../components/SectionLabel';

export default function CommunityPage({
  communityCount,
  communityEmail,
  setCommunityEmail,
  communityMessage,
  joinCommunity,
}) {
  return (
    <main className="pt-20">
      <section className="relative overflow-hidden border-b border-white/10 bg-blood">
        <img
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1800&q=85"
          alt="Friends at a nighttime event"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(59,6,9,0.66),rgba(0,0,0,0.96))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="self-center">
            <SectionLabel icon={Users} label="Community" />
            <h1 className="mt-5 font-display text-6xl leading-none text-white sm:text-7xl">
              {communityCount.toLocaleString()} members and counting.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Join the list for first access to event drops, culture notes, private links, partner pop-ups, and city announcements.
            </p>
          </div>
          <CommunityJoinSection
            compact
            communityCount={communityCount}
            communityEmail={communityEmail}
            setCommunityEmail={setCommunityEmail}
            communityMessage={communityMessage}
            joinCommunity={joinCommunity}
          />
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-8">
          {[
            ['Early access', 'Community members hear about ticket drops, tables, and invite-only nights first.'],
            ['City signals', 'We track which cities are heating up and use the community list to shape future events.'],
            ['Culture circle', 'A home for nightlife lovers, DJs, creators, hosts, and friends of the AFTERDARK movement.'],
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
