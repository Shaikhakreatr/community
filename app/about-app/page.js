import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AboutAppMain from '../components/about-app/AboutAppMain'

const AboutApp = () => {
  return (
    <main className='bg-img'>
      <Header />
        <AboutAppMain />
      <Footer />
      
    </main>
  )
}

export default AboutApp;