import React from "react";
import Image from "next/image";
import KreatrLogo from "@/public/assets/images/home_page/logo/Kreatr-logo.svg";
import Whatsapp from "@/public/assets/images/home_page/social_media_icons/Twitter.svg";
import Instagram from "@/public/assets/images/home_page/social_media_icons/Instagram.svg";
import Linkedin from "@/public/assets/images/home_page/social_media_icons/LinkedIn.svg";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-500">
        <div className="container  mx-auto  ">
          <div className="xl:mt-10 mt-[28px]  lg:mt-8 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:ml-4 ">
            <div className="sm:ml-4">
              <div>
                <Image
                  src={KreatrLogo}
                  className="mx-auto h-[1.375rem] w-[7.875rem] sm:mx-0  lg:h-[2rem] lg:w-[10rem]  xl:h-[2.5rem] xl:w-[14.375rem]"
                  alt="Kreatr Logo"
                />
                <div className="footer-address hidden sm:block xl:mt-6 xl:text-[18px] lg:text-[14px] lg:w-[60%] xl:w-[50%] sm-[80%]  sm:text-[12px] md:text-[12px] mt-4 w-[70%]" >
                  <p>
                    18/1, Shariff Square, 1st Block Koramangala, Bengaluru,
                    Karnataka (560034)
                  </p>
                </div>
                <div className="my-5 hidden items-center justify-start sm:flex xl:mt-6">
                  <a href="#">
                    <Image
                      src={Whatsapp}
                      className="pr-2 md:h-[2.125rem] md:w-[2.125rem] lg:h-[2.25rem] lg:w-[2.25rem] xl:h-43.71 xl:w-43.71"
                      alt="Whatsapp"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={Instagram}
                      className="pr-2 md:h-[2.125rem] md:w-[2.125rem] lg:h-[2.25rem] lg:w-[2.25rem] xl:h-43.71 xl:w-43.71"
                      alt="Instagram"
                    />
                  </a>
                  <a href="#">
                    <Image
                      src={Linkedin}
                      className="pr-2 md:h-[2.125rem] md:w-[2.125rem] lg:h-[2.25rem] lg:w-[2.25rem] xl:h-43.71 xl:w-43.71"
                      alt="Linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-around border-b border-gray-500 pt-7 sm:flex-row sm:border-none sm:pt-0 ">
                <ul className="footer-ul flex flex-row sm:flex-col ">
                  <a href="#">
                    <li className="footer-section footer-content pr-10 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      Blogs
                    </li>
                  </a>
                  <a href="#">
                    <li className="footer-section footer-content pr-6 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      Become a partner
                    </li>
                  </a>
                  <a href="#">
                    <li className="footer-section footer-content pr-3 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      Careers
                    </li>
                  </a>
                  <a href="#">
                    <li className="sm:block hidden footer-section footer-content pr-3 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      FAQs
                    </li>
                  </a>
                </ul>
                <ul className="footer-ul flex flex-row sm:flex-col xl:mt-[-52px] lg:mt-[-42px] md:mt-[-40px] sm:mt-[-41px]">
                <a href="#">
                    <li className="sm:hidden block footer-content footer-section pr-10 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      FAQs
                    </li>
                  </a>
                  <a href="#">
                    <li className="footer-content footer-section pr-10 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      Contact Us
                    </li>
                  </a>
                  <a href="#">
                    <li className="footer-content footer-section pr-3 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      Join our Klan
                    </li>
                  </a>
                  <a href="#">
                    <li className="sm:block hidden footer-content footer-section pr-3 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      Legal
                    </li>
                  </a>
                </ul>
                <a href="#">
                    <li className="sm:hidden block footer-section footer-content pr-3 text-[.875rem] lg:text-[1.125rem] xl:text-24">
                      legal
                    </li>
                  </a>
              </div>
            </div>
          </div>
          <div className="sm:hidden ">
            <p className="footer-findus mt-[-10px] text-center text-[1.125rem] text-blue-700">
              Find us on
            </p>
            <div className="my-3 flex items-center justify-center sm:mt-12 sm:flex sm:justify-start">
              <a href="#">
                <Image
                  src={Whatsapp}
                  className="h-[1.9375rem] w-[1.9375rem] pr-2"
                  alt="Whatsapp"
                />
              </a>
              <a href="#">
                <Image
                  src={Instagram}
                  className="h-[1.9375rem] w-[1.9375rem] pr-2"
                  alt="Instagram"
                />
              </a>
              <a href="#">
                <Image
                  src={Linkedin}
                  className="h-[1.9375rem] w-[1.9375rem] pr-2"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center px-10 md:py-5 py-5 text-center sm:px-0">
            <p className="footer-copyright footer-section md:text-[12px] text-[12px] xl:text-20 ">
              Copyright © 2024 KreatrMinds Pvt Ltd.{" "}
              <a href="#" className="text-blue-700 underline ">
                Legal
              </a>{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
