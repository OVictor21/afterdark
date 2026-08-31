import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Footer, Nav } from './components/Layout';
import { allEvents, startingCommunityCount } from './data/events';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import CreateEventPage from './pages/CreateEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import LandingPage from './pages/LandingPage';
import './styles.css';

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [communityEmails, setCommunityEmails] = useState([]);
  const [communityEmail, setCommunityEmail] = useState('');
  const [communityMessage, setCommunityMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    eventName: '',
    city: '',
    date: '',
    tickets: '',
    story: '',
  });

  const activeEventSlug = page.startsWith('event:') ? page.replace('event:', '') : '';
  const activeEvent = allEvents.find((event) => event.slug === activeEventSlug);
  const communityCount = startingCommunityCount + communityEmails.length;
  const completion = useMemo(() => {
    const filled = Object.values(form).filter(Boolean).length;
    return Math.round((filled / Object.keys(form).length) * 100);
  }, [form]);

  const goTo = (target) => {
    setPage(target);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const joinCommunity = (event) => {
    event.preventDefault();
    const email = communityEmail.trim().toLowerCase();

    if (!email) {
      setCommunityMessage('Add your email to join the AFTERDARK community.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setCommunityMessage('Use a valid email address so we can keep you in the loop.');
      return;
    }

    if (communityEmails.includes(email)) {
      setCommunityMessage('You are already on the community list.');
      setCommunityEmail('');
      return;
    }

    setCommunityEmails((current) => [...current, email]);
    setCommunityEmail('');
    setCommunityMessage('You are in. Welcome to the AFTERDARK community.');
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-ember selection:text-white">
      <Nav page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />
      {page.startsWith('event:') ? (
        <EventDetailPage event={activeEvent} goTo={goTo} />
      ) : page === 'create' ? (
        <CreateEventPage form={form} setForm={setForm} completion={completion} goTo={goTo} />
      ) : page === 'events' ? (
        <EventsPage goTo={goTo} />
      ) : page === 'about' ? (
        <AboutPage goTo={goTo} />
      ) : page === 'community' ? (
        <CommunityPage
          communityCount={communityCount}
          communityEmail={communityEmail}
          setCommunityEmail={setCommunityEmail}
          communityMessage={communityMessage}
          joinCommunity={joinCommunity}
        />
      ) : (
        <LandingPage
          goTo={goTo}
          soundOn={soundOn}
          setSoundOn={setSoundOn}
          communityCount={communityCount}
          communityEmail={communityEmail}
          setCommunityEmail={setCommunityEmail}
          communityMessage={communityMessage}
          joinCommunity={joinCommunity}
        />
      )}
      <Footer goTo={goTo} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
