import React from 'react';

export default function SectionLabel({ icon: Icon, label }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.24em] text-silver">
      <Icon size={15} className="text-ember" />
      {label}
    </p>
  );
}
