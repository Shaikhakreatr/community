import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogListingMobView = ({ blogsData }) => {
  console.log(blogsData);
  return (
    <div className=" flex w-full flex-col items-center justify-center gap-4">
      {blogsData.map((item, index) => (
        <Link key={index} href={`/blogs/${item.id}`}>
          <div className=" h-[14.375rem] w-[21rem] rounded-[7.13px] border border-selectedBorder">
            <div
              className="h-[9.8125rem] w-full rounded-t-[7.13px]"
              style={{
                backgroundImage: `url(${item.coverImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-2 pr-2 ">
              <h1 className="content mr-20 mt-2 text-[12px] font-[800]">
                {item.heading.length > 50
                  ? `${item.heading.slice(0, 50)}...`
                  : item.heading}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2 text-center">
                  <p className="content text-[8px]">
                    {item.writer} | {item.date}
                  </p>
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
