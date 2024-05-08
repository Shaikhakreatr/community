import React from "react";
import LeftImageSection from './leftImage-section/leftImageSection'
import FormSection from './RightForm-section/FormSection'

const ContactHero = () => {
  return (
    <section className="h-[90vh]" >
      <div className="container max-w-[700px] w-[100%] m-auto h-[50vh] flex items-center justify-center ">
      <div className=" bg-green-300">
         <div className=" bg-red-200 flex">
           <LeftImageSection />
           <FormSection />
         </div>
       </div>
      </div>
    </section>
  )
}

export default ContactHero

