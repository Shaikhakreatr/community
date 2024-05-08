import React from 'react'
import Header from '../components/header/Header'
import ContactHero from '../components/contact-hero/ContactHero'

const ContactPage = () => {
  return (
    <main className='bg-img md:min-h-[100vh] xl:min-h-100%'>
      <Header />
      <ContactHero />
    </main>
  )
}

export default ContactPage