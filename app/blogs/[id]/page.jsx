'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import Spinner from '@/app/components/spinner/Spinner';

const BlogDetailsHero = () => {
  const { id } = useParams();
  const [htmlData, setHtmlData] = useState(null); // Initialize with null to check if data is loaded
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs/${id}`);
        const data = await response.json();
        setHtmlData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of the fetch outcome
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: htmlData?.htmlPage || '<p>No content available</p>' }} />
      )}
      <Footer />
    </main>
  );
};

export default BlogDetailsHero;
