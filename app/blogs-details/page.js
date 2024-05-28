import React from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BlogDetailsHero from '../components/blogs-details/BlogsDetailsHero'

const BlogListing = () => {
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
        <BlogDetailsHero />
      <Footer />
      
    </main>
  )
}

export default BlogListing