import React from "react";

const SearchSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center lg:my-14 xl:my-12">
        {/* <h1 className="text-center page-heading xl:text-[96px] lg:text-[70px] relative sm:text-[3.75rem]  after:content-[url('/assets/images/FAQ_page/FAQ-sticker.svg')]">Frequently Asked Questions</h1> */}
        <h1 className="page-heading relative text-center sm:text-[3.75rem] lg:text-[70px] xl:text-[96px]">
          Frequently Asked Questions
          <span className="absolute bottom-0 right-0">
            <img
              src="/assets/images/FAQ_page/FAQ-sticker.svg"
              alt="FAQ Sticker"
            />
          </span>
        </h1>

        {/* <img className="absolute xl:top-[24%] xl:right-[12%] lg:top-[21%] lg:right-[19%] " src="/assets/images/FAQ_page/FAQ-sticker.svg" alt="FAQ-sticker" /> */}
      </div>
    </div>
  );
};

export default SearchSection;
