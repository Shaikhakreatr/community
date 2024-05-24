import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CareersEmpty = () => {
  return (
    <div>
        <div>
            {/* <Image src={} alt='' /> */}
            <div className='text-center content-neue-medium text-green-500 xl:text-[40px] lg:text-[30px]'>
            <h3 >Oops!</h3>
            <h3>It looks like our tables are full!</h3>
            </div>
            <div>
                <p>Thank you for your interest. Stay tuned for future opportunities!</p>
            </div>
            <div>
                <p>Drop us a line <Link href="#">hr@thekreatr.com</Link></p>
            </div>
        </div>
    </div>
  )
}

export default CareersEmpty