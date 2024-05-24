'use client'
import React from "react";
import Image from "next/image";
import BlogListingMobView from "./blog-listing-mob-view/BlogListingMobView";
import useIsTabletView from "@/app/hooks/isTabHook";
import useIsMobile from "@/app/hooks/customHook";
import BlogListingTabView from "./blog-listing-tab-view/BlogListingTabView";

const BlogListingHero = () => {
  const middle = [
    "/assets/images/blog-page/cover2.svg",
    "/assets/images/blog-page/cover2.svg",
    "/assets/images/blog-page/cover2.svg",
  ];
  const left = ["/assets/images/blog-page/cover2.svg", "/assets/images/blog-page/cover2.svg"];
  const right = [
    "/assets/images/blog-page/cover2.svg",
    "/assets/images/blog-page/cover2.svg",
    "/assets/images/blog-page/cover2.svg",
  ];
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
      <BlogListingMobView blogs={middle}/>:
      isTabletView ?
      
      <BlogListingTabView/>:

      <div className=" w-full h-full flex flex-col justify-center items-center">
        <div className="flex w-fit gap-5 mt-4">
        <div className="first-column">
          <div className=" w-[37.1875rem] h-[39.3125rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[25.9375rem] rounded-t-[24px]"
              style={{
                backgroundImage: "url('/assets/images/blog-page/cover2.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6">
              <h1 className="content font-[800] text-[34px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between pt-3">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
          <div className=" w-[37.1875rem] h-[53.5rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[39rem] rounded-t-[24px]"
              style={{
                backgroundImage: "url('/assets/images/blog-page/cover 1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex pl-6 pr-6 mt-6">
              <div className="">
                <h1 className="content font-[800] text-[34px] mr-24">
                  The Power of Upcycled Materials in Architecture
                </h1>
                <p className="content pt-2">crediting the writerter</p>
              </div>

              <div className="flex flex-col  items-end">
                <div className="flex gap-2 flex-col justify-center items-end text-center">
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                  </div>
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                </div>
                <div className="pt-6">
                  <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-column w-fit ">
          <div className=" w-[31.375rem] h-[32.8125rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[20.25rem] rounded-t-[24px]"
              style={{
                backgroundImage: "url('/assets/images/blog-page/cover_5.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6 pt-3">
              <h1 className="content font-[800] text-[34px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
          <div className=" w-[31.375rem] h-[29.0625rem] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[16.0625rem] rounded-t-[24px]"
              style={{
                backgroundImage: "url('/assets/images/blog-page/cover_3.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6 pt-3">
              <h1 className="content font-[800] text-[34px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
          <div className=" w-[31.375rem] h-[29.0625rem] border border-selectedBorder rounded-[24px]">
            <div
              className=" w-full h-[16.0625rem] rounded-t-[24px]"
              style={{
                backgroundImage: "url('/assets/images/blog-page/cover_4.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-6 pr-6 pt-3">
              <h1 className="content font-[800] text-[34px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content pt-2">crediting the writer</p>
              <div className="flex items-center justify-between ">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                  </div>
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[37.5rem] w-[70.5625rem] rounded-[24px] border border-selectedBorder mt-[20px] ">
        <div
          className=" w-full h-[25.5625rem] rounded-t-[24px] "
          style={{
            backgroundImage: "url('/assets/images/blog-page/cover_6.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="flex pt-6 justify-between pr-6 pl-6">
          <div className="flex items-center w-[50%]  ">
              <div className="content font-[800] text-[34px] mr-20">The Power of Upcycled Materials in Architecture 
              <div className="content pt-2 text-[16px] font-[100]">crediting the writer</div>
              </div>
          </div>
          <div className="flex items-center gap-6 justify-between">
                  <div className="content border flex border-selectedBorder w-[123px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border flex border-selectedBorder w-[151px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                </div>
                <Image src="/assets/images/blog-page/arrow.svg" height={30} width={30} alt="arrow" />
              </div>
        </div>
      </div>
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
