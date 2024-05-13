import React from 'react'
import CareersHeading from './careers-heading/CareersHeading'
import CareersBox from './careers-box/CareersBox'

export const CareersHero = () => {
  return (
    <section>
      <div className="container mx-auto lg:py-0 md:py-[50px] ">
        <div className="">
            <CareersHeading />
            <CareersBox />
        </div>
      </div>
    </section>
  )
}
