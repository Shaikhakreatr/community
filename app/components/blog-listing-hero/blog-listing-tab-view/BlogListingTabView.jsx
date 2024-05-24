import Image from "next/image";
import React from "react";

const BlogListingTabView = () => {
  return (
    <div className=" w-full h-full  flex flex-col justify-center items-center">
      <div className="flex w-fit gap-2 mt-4">
        <div className="first-column">
          <div className=" w-[21.875rem] h-[600px] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[25.9375rem] rounded-t-[24px]"
              style={{
                backgroundImage: "url('/assets/images/blog-page/cover2.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="pl-3 pr-3 pt-3">
              <h1 className="content font-[800] text-[20px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content text-[12px]">crediting the writer</p>
              <div className="flex items-center justify-between pt-6">
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="content border flex text-[12px] border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border flex text-[12px] border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
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
          <div className=" w-[350px] h-[810px] rounded-[24px] border border-selectedBorder">
            <div
              className="w-full h-[39rem] rounded-t-[24px]"
              style={{
                backgroundImage: "url('/assets/images/blog-page/cover 1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="flex p-3">
              <div className="">
                <h1 className="content font-[800] text-[20px] mr-24">
                  The Power of Upcycled Materials in Architecture
                </h1>
                <p className="content pt-2">crediting the writerter</p>
              </div>

              <div className="flex flex-col  items-end">
                <div className="flex gap-2 flex-col justify-center items-end text-center">
                  <div className="content border flex text-[12px] border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
                  </div>
                  <div className="content border flex text-[12px] border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
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
        </div>
        <div className="second-column w-fit ">
          <div className=" w-[350px] h-[500px] rounded-[24px] border border-selectedBorder">
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
              <h1 className="content font-[800] text-[20px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content pt-2 text-[12px]">crediting the writer</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 justify-center pt-3 items-center text-center">
                  <div className="content border text-[12px] flex border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border text-[12px] flex border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
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
          <div className=" w-[350px] h-[450px] rounded-[24px] border border-selectedBorder">
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
              <h1 className="content font-[800] text-[20px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content pt-2 text-[12px]">crediting the writer</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 justify-center items-center pt-5">
                  <div className="content border text-[12px] flex border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content border text-[12px] flex border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
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
          <div className=" w-[350px] h-[430px] border border-selectedBorder rounded-[24px]">
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
              <h1 className="content font-[800] text-[20px] mr-20">
                The Power of Upcycled Materials in Architecture
              </h1>
              <p className="content pt-2 text-[12px]">crediting the writer</p>
              <div className="flex items-center justify-between ">
                <div className="flex gap-2 justify-center items-center pt-3 text-center">
                  <div className="content border text-[12px] flex border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    4 min read
                  </div>
                  <div className="content text-[12px] border flex border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
                    Nov 20,2023
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
        </div>
      </div>
      <div className=" h-[37.5rem] w-[710px] rounded-[24px] border border-selectedBorder mt-[20px] ">
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
            <div className="content font-[800] text-[25px] mr-20">
              The Power of Upcycled Materials in Architecture
              <div className="content pt-2 text-[12px] font-[100]">
                crediting the writer
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 justify-between">
            <div className="content border text-[12px] flex border-selectedBorder w-[80px] h-[34px] rounded-[24px] items-center justify-center text-center">
              4 min read
            </div>
            <div className="content border text-[12px] flex border-selectedBorder w-[100px] h-[34px] rounded-[24px] items-center justify-center text-center">
              Nov 20,2023
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
    </div>
  );
};

export default BlogListingTabView;
