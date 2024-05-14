import React from 'react'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import CareersMainContent from '@/app/components/careers-description/CareersMainContent'

const CareersDescription = () => {
  return (
    <main className='bg-img'>
        <Header />
        <CareersMainContent />
        <Footer />
    </main>
  )
}

export default CareersDescription