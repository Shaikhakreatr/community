'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

const BlogDetailsHero = () => {
    const { id } = useParams();
  const [htmlData, setHtmlData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs/${id}`);
        const data = await response.json();
        setHtmlData(data);
        console.log(data.htmlPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='pt-[6.25rem] bg-img'>
    <Header />
        <div dangerouslySetInnerHTML={{ __html:htmlData.htmlPage }} />
    <Footer />
  </main>
  );
};

export default BlogDetailsHero;
