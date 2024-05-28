import React from "react";
import Image from 'next/image';
import Link from "next/link";

const BlogListingMobView = ({ blogsDataMob }) => {
  console.log(blogsDataMob);
  return (
    <div className=" w-full flex flex-col justify-center items-center gap-4">
      {blogsDataMob.map((item, index) => (
        <Link key={index} href='/blogs-details'>
        <div  className=" w-[21rem] h-[14.375rem] rounded-[7.13px] border border-selectedBorder">
          <div
            className="w-full h-[9.8125rem] rounded-t-[7.13px]"
            style={{
              backgroundImage: `url(${item.coverLetter})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="pl-2 pr-2 ">
            <h1 className="content font-[800] text-[12px] mt-2 mr-20">
              {item.heading}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 justify-center items-center text-center">
                <p className="content text-[8px]">Jevin Mary | {item.date}</p>
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
        </Link>
      ))}
    </div>
  );
};

export default BlogListingMobView;
