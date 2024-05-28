'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';
import React from 'react';
import BlogDetailsHero from '@/app/components/blogs-details/BlogsDetailsHero';

const BlogDetails = () => {
  const { id } = useParams();

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const blogData = data.find(blog => blog[0].id);
        if (blogData) {
          setBlogData(blogData);
        } else {
          setError(new Error('Blog not found'));
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  console.log(blogData);
  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      <BlogDetailsHero blogData={blogData}/>
      <Footer />
    </main>
  );
};

export default BlogDetails;
