import React from 'react'
import HeaderHome from './components/header-home/HeaderHome';
import Hero from './components/hero/Hero';
import '@mantine/core/styles.css';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <main className='pt-[6.25rem] bg-img md:min-h-[100vh] xl:min-h-[auto] flex flex-col overflow-x-hidden sm:justify-between'>        
          <HeaderHome />
          <Hero /> 
          <Footer />         
      </main>
    </>
  )
}

export default App;