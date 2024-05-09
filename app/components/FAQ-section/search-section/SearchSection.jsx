import React from "react";

const SearchSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
      <h1 className="page-heading xl:text-[3.75rem]">Frequently Asked Questions</h1>
      <p className="content-neue xl:text-[1.25rem]">Everything you need to know about us.</p>
        <div className="border border-black flex rounded-[15px]"><img src="/assets/images/FAQ_page/search-icon.svg" className="ml-2" alt="search icon" /><input type="text" placeholder="Search" className="bg-transparent ml-2" /></div>
      </div>
    </div>
  );
};

export default SearchSection;
