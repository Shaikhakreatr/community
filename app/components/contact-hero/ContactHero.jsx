import React from 'react'
import RightImageSection from './rightImage-section/RightImageSection'
import FormSection from './leftForm-section/FormSection'

const ContactHero = () => {
  return (
    <section>
      <div className="container mx-auto h-[100%]">
        <div className="grid sm:grid-cols-2 grid-cols-1 ">
          <RightImageSection className="w-[60%]" />
          <FormSection  className="w-[40%]" />
        </div>
      </div>
    </section>
  )
}

export default ContactHero