import React from 'react'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import '@mantine/core/styles.css';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <main className='bg-img md:min-h-[100vh] xl:min-h-[auto]'>
          <Header />  
          <Hero />
          <Footer />
      </main>
    </>
  )
}

export default App;