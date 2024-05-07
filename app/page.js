import React from 'react'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import '@mantine/core/styles.css';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <div className='bg-img h-[100vh]'>
          <div className=''>
          <Header />  
          <Hero />
          <Footer />
          </div>
      </div>
    </>
  )
}

export default App;