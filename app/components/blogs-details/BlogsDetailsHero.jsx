'use client'

import React, { useEffect, useState } from 'react'
import useIsMobile from '@/app/hooks/customHook';
import useIsTabletView from '@/app/hooks/isTabHook';

const BlogDetailsHero = ({blogData}) => {
    const isMobile = useIsMobile();
    const isTab = useIsTabletView();
    
    const [content, setContent] = useState([]);
    const [images, setImages] = useState([]);

    const renderContentWithImages = () => {
        const elements = [];
        let imageIndex = 0;

        content.forEach((paragraph, index) => {
            elements.push(
                <p key={`paragraph-${index}`} className='content text-[14px] pt-8'>
                    {paragraph}
                </p>
            );

            if ((index + 1) % 2 === 0 && imageIndex < images.length) {
                elements.push(
                    <div key={`image-${imageIndex}`} className='w-full h-[398px] mt-8'
                        style={{
                            backgroundImage: `url(${blogData.images})`,
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
        <div className={isMobile ? 'p-2 flex flex-col justify-center items-center' : !isTab ? "w-[1064px] flex flex-col justify-center items-center" : 'p-10 flex flex-col justify-center items-center'}>
            <h1 className={isMobile ? "content text-[22px] font-[800] pt-20" : 'content text-[65px] font-[800] pt-20'}>
                {blogData.heading}
            </h1>
            <div className="flex w-full gap-2 pt-3 text-center">
                <div className="content border text-[12px] flex border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogData.readTime}
                </div>
                <div className="content text-[12px] border flex border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogData.date}
                </div>
            </div>
            {renderContentWithImages()}
        </div>
    )
}

export default BlogDetailsHero;
