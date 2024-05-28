'use client'

import React, { useEffect, useState } from 'react'
import useIsMobile from '@/app/hooks/customHook';
import useIsTabletView from '@/app/hooks/isTabHook';

const BlogDetailsHero = () => {
    const isMobile = useIsMobile();
    const isTab = useIsTabletView();
    
    const [content, setContent] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                console.log(data[0].content, data[0].images);
                setContent(data[0].content); // Assuming API returns an object with 'content'
                setImages(data[0].images);   // Assuming API returns an object with 'images'
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    

    const renderContentWithImages = () => {
        const elements = [];
        let imageIndex = 0;

        content.forEach((paragraph, index) => {
            elements.push(
                <p key={`paragraph-${index}`} className='content text-center text-[14px] pt-8'>
                    {paragraph}
                </p>
            );

            if ((index + 1) % 2 === 0 && imageIndex < images.length) {
                elements.push(
                    <div key={`image-${imageIndex}`} className='flex flex-col justify-center items-center w-full h-[398px] mt-8'
                        style={{
                            backgroundImage: `url(${images[imageIndex].imgUrl})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                );
                imageIndex++;
            }
        });

        return elements;
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className={isMobile ? 'p-2 flex flex-col justify-start text-start items-center' : !isTab ? "w-[1064px] flex text-start flex-col justify-center items-center" : 'p-10 flex flex-col justify-center items-center'}>
            <h1 className={isMobile ? "page-subhead text-[22px] font-[800] text-start pt-20" : 'content text-start text-[65px] leading-[71px] font-[800] mt-[30px]'}>
                The Power of Upcycled Materials in Architecture
            </h1>
            <div className="flex justify-start w-full gap-2 pt-3 text-center">
                <p className="content border  text-[12px]  flex border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                </p>
                <p className="content text-[12px] border  flex border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                </p>
            </div>
            {renderContentWithImages()}
        </div>
        </div>
    )
}

export default BlogDetailsHero;
