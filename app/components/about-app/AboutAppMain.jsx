import React from 'react'
import AboutAppHeader from './about-app-header/AboutAppHeader'
import AboutAppHero from './about-app-hero/AboutAppHero'

const AboutAppMain = () => {
  return (
    <section>
      <div >
        <div>
            <AboutAppHeader />
            <AboutAppHero />
        </div>
      </div>
    </section>
  )
}

export default AboutAppMain;