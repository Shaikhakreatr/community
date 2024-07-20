'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import Spinner from '@/app/components/spinner/Spinner';

const BlogDetailsHero = () => {
  const { id } = useParams();
  
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs/${id}`);
        const data = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of the fetch outcome
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className='pt-[6.25rem] bg-img h-full w-full'>
      <Header />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className='w-full h-full flex flex-col justify-center items-center xl:mt-[140px] lg:mt-[80px] sm:mt-[60px] mt-[44px]'>
          hello world
          </div>
      )}
      <Footer />
    </main>
  );
};

export default BlogDetailsHero;
