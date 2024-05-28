import Image from "next/image";
import React from "react";
import Link from "next/link";
const BlogListingTabView = ({ blogsData }) => {
  return (
    <div className=" flex h-full  w-full flex-col items-center justify-center">
      <div className="mt-4 flex w-fit gap-2">
        <div className="first-column">
          <Link href={`/blogs-details/${blogsData.id}`}>
            <div className=" h-[600px] w-[21.875rem] rounded-[24px] border border-selectedBorder">
              <div
                className="h-[25.9375rem] w-full rounded-t-[24px]"
                style={{
                  backgroundImage: `url(${blogsData.coverLetter})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="pl-3 pr-3 pt-3">
                <h1 className="content mr-20 text-[20px] font-[800]">
                  {blogsData.heading}
                </h1>
                <p className="content text-[12px]">crediting the writer</p>
                <div className="flex items-center justify-between pt-6">
                  <div className="flex items-center justify-center gap-2 text-center">
                    <div className="content flex h-[34px] w-[80px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.readTime}
                    </div>
                    <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.date}
                    </div>
                  </div>
                  <Image
                    src="/assets/images/blog-page/arrow.svg"
                    alt="arrow"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/blogs-details/${blogsData.id}`}>
            <div className=" h-[810px] w-[350px] rounded-[24px] border border-selectedBorder">
              <div
                className="h-[39rem] w-full rounded-t-[24px]"
                style={{
                  backgroundImage: `url(${blogsData.coverLetter})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="flex p-3">
                <div className="">
                  <h1 className="content mr-24 text-[20px] font-[800]">
                    {blogsData.heading}
                  </h1>
                  <p className="content pt-2">crediting the writerter</p>
                </div>

                <div className="flex flex-col  items-end">
                  <div className="flex flex-col items-end justify-center gap-2 text-center">
                    <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.readTime}
                    </div>
                    <div className="content flex h-[34px] w-[80px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.date}
                    </div>
                  </div>
                  <div className="pt-6">
                    <Image
                      src="/assets/images/blog-page/arrow.svg"
                      alt="arrow"
                      width={35}
                      height={35}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="second-column w-fit ">
          <Link href={`/blogs-details/${blogsData.id}`}>
            <div className=" h-[500px] w-[350px] rounded-[24px] border border-selectedBorder">
              <div
                className="h-[20.25rem] w-full rounded-t-[24px]"
                style={{
                  backgroundImage: `url(${blogsData.coverLetter})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="pl-6 pr-6 pt-3">
                <h1 className="content mr-20 text-[20px] font-[800]">
                  {blogsData.heading}
                </h1>
                <p className="content pt-2 text-[12px]">crediting the writer</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2 pt-3 text-center">
                    <div className="content flex h-[34px] w-[80px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.readTime}
                    </div>
                    <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.date}
                    </div>
                  </div>
                  <Image
                    src="/assets/images/blog-page/arrow.svg"
                    alt="arrow"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/blogs-details/${blogsData.id}`}>
            <div className=" h-[450px] w-[350px] rounded-[24px] border border-selectedBorder">
              <div
                className="h-[16.0625rem] w-full rounded-t-[24px]"
                style={{
                  backgroundImage: `url(${blogsData.coverLetter})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="pl-6 pr-6 pt-3">
                <h1 className="content mr-20 text-[20px] font-[800]">
                  {blogsData.heading}
                </h1>
                <p className="content pt-2 text-[12px]">crediting the writer</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center gap-2 pt-5">
                    <div className="content flex h-[34px] w-[80px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.readTime}
                    </div>
                    <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.date}
                    </div>
                  </div>
                  <Image
                    src="/assets/images/blog-page/arrow.svg"
                    alt="arrow"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href={`/blogs-details/${blogsData.id}`}>
            <div className=" h-[430px] w-[350px] rounded-[24px] border border-selectedBorder">
              <div
                className=" h-[16.0625rem] w-full rounded-t-[24px]"
                style={{
                  backgroundImage: `url(${blogsData.coverLetter})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="pl-6 pr-6 pt-3">
                <h1 className="content mr-20 text-[20px] font-[800]">
                  {blogsData.heading}
                </h1>
                <p className="content pt-2 text-[12px]">crediting the writer</p>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center justify-center gap-2 pt-3 text-center">
                    <div className="content flex h-[34px] w-[80px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.readTime}
                    </div>
                    <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                      {blogsData.date}
                    </div>
                  </div>
                  <Image
                    src="/assets/images/blog-page/arrow.svg"
                    alt="arrow"
                    width={35}
                    height={35}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Link href={`/blogs-details/${blogsData.id}`}>
        <div className=" mt-[20px] h-[37.5rem] w-[710px] rounded-[24px] border border-selectedBorder ">
          <div
            className=" h-[25.5625rem] w-full rounded-t-[24px] "
            style={{
              backgroundImage: `url(${blogsData.coverLetter})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex justify-between pl-6 pr-6 pt-6">
            <div className="flex w-[50%] items-center  ">
              <div className="content mr-20 text-[25px] font-[800]">
                {blogsData.heading}
                <div className="content pt-2 text-[12px] font-[100]">
                  crediting the writer
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <div className="content flex h-[34px] w-[80px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                {blogsData.readTime}
              </div>
              <div className="content flex h-[34px] w-[100px] items-center justify-center rounded-[24px] border border-selectedBorder text-center text-[12px]">
                {blogsData.date}
              </div>
              <Image
                src="/assets/images/blog-page/arrow.svg"
                alt="arrow"
                width={35}
                height={35}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogListingTabView;
