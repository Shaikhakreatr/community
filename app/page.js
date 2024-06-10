"use client"
import React,{useState,useEffect} from 'react'
import HeaderHome from './components/header-home/HeaderHome';
import Hero from './components/hero/Hero';
import '@mantine/core/styles.css';
import Footer from './components/footer/Footer';
import Spinner from './components/spinner/Spinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time with a timeout
    setTimeout(() => {
      setLoading(false);
    },800); 
  }, []);
  return (
    <>
    {loading ? (
      <Spinner loading={loading} />
    ) : (
      <main className='pt-[6.25rem] bg-img md:min-h-[100vh] xl:min-h-[auto] flex flex-col overflow-x-hidden sm:justify-between'>
        <HeaderHome />
        <Hero />
        <Footer />
      </main>
    )}
  </>
  )
}

export default App;