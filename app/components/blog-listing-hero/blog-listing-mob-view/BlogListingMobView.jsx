import React from "react";
import Image from 'next/image';

const BlogListingMobView = ({ blogs }) => {
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-4">
      {blogs.map((val, index) => (
        <div key={index} className=" w-[21rem] h-[14.375rem] rounded-[7.13px] border border-selectedBorder">
          <div
            className="w-full h-[9.8125rem] rounded-t-[7.13px]"
            style={{
              backgroundImage: "url('/assets/images/blog-page/cover_3.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="pl-2 pr-2 ">
            <h1 className="content font-[800] text-[12px] mt-2 mr-20">
              The Power of Upcycled Materials in Architecture
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 justify-center items-center text-center">
                <p className="content text-[8px]">Jevin Mary | Nov 20, 2023</p>
              </div>
              <div className="">
                <Image
                  src="/assets/images/blog-page/arrow.svg"
                  alt="arrow"
                  width={18.45}
                  height={18.45}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListingMobView;
