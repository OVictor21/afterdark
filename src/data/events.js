export const upcomingEvents = [
  {
    slug: 'afro-rave-takeover',
    title: 'AFRO RAVE TAKEOVER',
    date: 'Sep 18',
    fullDate: 'Friday, 18 September 2026',
    time: '8:00 PM till late',
    location: 'Location TBA',
    price: 'Tickets soon',
    image: '/afro.jpeg',
    tag: 'Afrobeats · Amapiano · GQOM · House',
    about: 'Presented by Undercover Ent, Afro Rave Takeover brings Afrobeat, amapiano, GQOM, and house together for a high-energy night with music, energy, and no limits.',
    highlights: ['Sound by Ifemh, Cruel Pluto, Ms Lani, Wilcoxx', 'Special guest appearance', 'Doors open 8PM till late'],
    status: 'upcoming',
    ticketOptions: [
      { name: 'Early Raver', price: '₦10,000', left: 'Limited' },
      { name: 'Squad Pass', price: '₦40,000', left: 'For 5 guests' },
      { name: 'VIP Energy', price: '₦25,000', left: 'Priority entry' },
    ],
  },
];

export const pastEvents = [
  {
    slug: 'house-party',
    title: 'The House Party',
    date: 'Jul 18',
    fullDate: 'Saturday, 18 July 2026',
    time: '4:00 PM till dawn',
    location: 'Somewhere in Lagos',
    image: '/house.jpeg',
    tag: 'Music · Pop up · Food · Drink · Live stream · Tattoo',
    about: 'After Dark and Undercover Ent presented The House Party, an archive night built around music, pop-ups, food, drinks, live streaming, and tattoos.',
    highlights: ['Music, food, and drinks', 'Live stream and tattoo experience', 'After Dark x Undercover Ent'],
    status: 'past',
    ticketOptions: [],
  },
];

export const allEvents = [...upcomingEvents, ...pastEvents];

export const values = ['Culture', 'Afrobeats', 'Creativity', 'Community', 'Energy', 'Experience'];

export const startingCommunityCount = 2847;
