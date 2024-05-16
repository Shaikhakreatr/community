import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CollabrationHero from '../components/collabration-hero/CollabrationHero';

const CollabrationPage = () => {
  return (
    <main className='bg-img'>
      <Header />
      <CollabrationHero />
      <Footer />
    </main>
  )
}

export default CollabrationPage;