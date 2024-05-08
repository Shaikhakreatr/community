import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import FAQSection from '../components/FAQ-section/FAQSection';

const FAQPage = () => {
  return (
    <main className='bg-img'>
      <Header />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default FAQPage;