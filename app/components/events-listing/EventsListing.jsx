import React from 'react'
import EventsHeader from './events-header/EventsHeader'
import EventsHero from './events-hero/EventsHero'

const EventsListing = () => {
  return (
    <div className='container mx-auto'>
      <EventsHeader />
      <EventsHero />
    </div>
  )
}

export default EventsListing