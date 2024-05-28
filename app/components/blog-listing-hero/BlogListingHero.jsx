'use client'
import React,{useState,useEffect} from "react";
import Image from "next/image";
import BlogListingMobView from "./blog-listing-mob-view/BlogListingMobView";
import useIsTabletView from "@/app/hooks/isTabHook";
import useIsMobile from "@/app/hooks/customHook";
import BlogListingTabView from "./blog-listing-tab-view/BlogListingTabView";
import Link from "next/link";

const BlogListingHero = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [blogsDataMob, setBlogsDataMob] = useState([]);

  const fetchBlogsData = async () => {
    try {
      const response = await fetch("https://mik4tx7ct3.execute-api.ap-south-1.amazonaws.com/dev/blogs");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data[0].coverLetter)
      setBlogsData(data[0]);
      setBlogsDataMob(data)
    } catch (error) {
      console.error("Error fetching blogs data:", error);
    }
  };
  
  useEffect(() => {
    fetchBlogsData();
  }, []);
  const isMobile = useIsMobile();
  const isTabletView = useIsTabletView();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div>
        <h1 className={isMobile? " text-[2.5rem] heading":isTabletView?" text-70 heading":"heading text-110 "}>Explore The</h1>
        <div className={isMobile?"h-fit flex justify-center -translate-y-3 -rotate-4":
        isTabletView?"h-fit flex justify-center -translate-y-6 -rotate-4":"h-fit flex justify-center -translate-y-9 -rotate-4"}>
          <Image
            src="/assets/images/blog-page/blog_sticker.svg"
            alt=" blog sticker"
            height={isMobile?35:isTabletView?50:105.78}
            width={isMobile?109.33:isTabletView?210:331.05}
          />
        </div>
      </div>
      
      {isMobile ?
      <BlogListingMobView blogsDataMob={blogsDataMob}/>:
      isTabletView ?
      
      <BlogListingTabView blogsData={blogsData}/>:

      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="flex w-fit gap-5 mt-4">
        <div className="first-column">
        
          <Link href='/blogs-details'>
          <div className=" w-[37.1875rem] h-[39.3125rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[25.9375rem] rounded-t-[24px]"
              style={{
                backgroundImage: `url(${blogsData.coverLetter})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6">
              <h1 className="content font-[800] text-[34px] mr-20">
                {blogsData.heading}
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between pt-3">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.readTime}
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.date}
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
          </Link>

          <Link href='/blogs-details'>
          <div className=" w-[37.1875rem] h-[53.5rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[39rem] rounded-t-[24px]"
              style={{
                backgroundImage: `url(${blogsData.coverLetter})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex pl-6 pr-6 mt-6">
              <div className="">
                <h1 className="content font-[800] text-[34px] mr-24">
                  {blogsData.heading}
                </h1>
                <p className="content pt-2">crediting the writerter</p>
              </div>

              <div className="flex flex-col  items-end">
                <div className="flex gap-2 flex-col justify-center items-end text-center">
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                  {blogsData.date}
                  </div>
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                  {blogsData.readTime}
                  </div>
                </div>
                <div className="pt-6">
                  <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
          </Link>

        </div>
        <div className="second-column w-fit ">
          <Link href='/blogs-details'>
          <div className=" w-[31.375rem] h-[32.8125rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[20.25rem] rounded-t-[24px]"
              style={{
                backgroundImage: `url(${blogsData.coverLetter})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6 pt-3">
              <h1 className="content font-[800] text-[34px] mr-20">
                {blogsData.heading}
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.readTime}
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.date}
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
          </Link>
          <Link href='/blogs-details'>
          <div className=" w-[31.375rem] h-[29.0625rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[16.0625rem] rounded-t-[24px]"
              style={{
                backgroundImage: `url(${blogsData.coverLetter})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6 pt-3">
              <h1 className="content font-[800] text-[34px] mr-20">
                {blogsData.heading}
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.readTime}
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.date}
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
          </Link>
          <Link href='/blogs-details'>
          <div className=" w-[31.375rem] h-[29.0625rem] border border-selectedBorder rounded-[24px]">
            <div
              className=" w-full h-[16.0625rem] rounded-t-[24px]"
              style={{
                backgroundImage: `url(${blogsData.coverLetter})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6 pt-3">
              <h1 className="content font-[800] text-[34px] mr-20">
                {blogsData.heading}
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between ">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.readTime}
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.date}
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <Link href='/blogs-details'>
      <div className=" h-[37.5rem] w-[70.5625rem] rounded-[24px] border border-selectedBorder mt-[20px] ">
        <div
          className=" w-full h-[25.5625rem] rounded-t-[24px] "
          style={{
            backgroundImage: `url(${blogsData.coverLetter})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="flex pt-6 justify-between pr-6 pl-6">
          <div className="flex items-center w-[50%]  ">
              <div className="content font-[800] text-[34px] mr-20">{blogsData.heading} 
              <div className="content pt-2 text-[16px] font-[100]">crediting the writer</div>
              </div>
          </div>
          <div className="flex items-center gap-6 justify-between">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.readTime}
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    {blogsData.date}
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
        </div>
      </div>
      </Link>
      </div>
      }
      <div className="w-full flex justify-center mt-6 mb-6">
        <div className=" bg-selected w-[13.5625rem] h-[3.8125rem] flex justify-center text-center items-center rounded-[2rem] text-loadMore">
          Load more
        </div>
      </div>
    </div>
  );
};

export default BlogListingHero;
