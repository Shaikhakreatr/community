import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import UpcomingHero from '../components/events-upcoming/UpcomingHero';

const EventsUpoming = () => {
  return (
    <main className='bg-img'>
      <Header />
      <UpcomingHero />
      <Footer />
    </main>
  )
}

export default EventsUpoming;