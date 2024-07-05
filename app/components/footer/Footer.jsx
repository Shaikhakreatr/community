import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-500">
        <div className="container  mx-auto  ">
          <div className="mt-[28px] grid  grid-cols-1 sm:grid-cols-2 md:mt-8 md:grid-cols-2 lg:ml-4 lg:mt-8 xl:mt-10 ">
            <div className="ml-0 lg:ml-14">
              <div>
                <Link className="sm:inline-block" href="/">
                  <Image
                    src={"/assets/images/home_page/logo/Kreatr-logo.svg"}
                    className="mx-auto h-[1.375rem] w-[7.875rem] sm:mx-0  lg:h-[2rem] lg:w-[10rem]  xl:h-[2.5rem] xl:w-[14.375rem]"
                    alt="Kreatr Logo"
                    height={32}
                    width={160}
                  />
                </Link>
                <div className=" footer-address footer-section sm-[80%] mt-4 hidden w-[70%] sm:block sm:text-[12px] sm:opacity-[60%] md:text-[12px] lg:w-[60%]  lg:text-[14px] xl:mt-6 xl:w-[50%] xl:text-[18px]">
                  <p>
                    18/1, Shariff Square, 1st Block Koramangala,
                    <br /> Bengaluru, Karnataka (560034)
                  </p>
                </div>
                <div className="my-5 gap-2 hidden items-center justify-start sm:flex xl:mt-6">
                  <Link
                    href="https://chat.whatsapp.com/KhEXrhzF4Oj4acJItXEipM"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={
                        "/assets/images/home_page/social_media_icons/Whatsapp.svg"
                      }
                      className=" md:h-[2.125rem] md:w-[2.125rem] lg:h-[2.25rem] lg:w-[2.25rem] xl:h-43.71 xl:w-43.71"
                      alt="Whatsapp"
                      height={36}
                      width={36}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/thekreatr?igsh=Ymdwenl2bmlvanI1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={
                        "/assets/images/home_page/social_media_icons/Instagram.svg"
                      }
                      className=" md:h-[2.125rem] md:w-[2.125rem] lg:h-[2.25rem] lg:w-[2.25rem] xl:h-43.71 xl:w-43.71"
                      alt="Instagram"
                      height={36}
                      width={36}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/the-kreatr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={
                        "/assets/images/home_page/social_media_icons/LinkedIn.svg"
                      }
                      className=" md:h-[2.125rem] md:w-[2.125rem] lg:h-[2.25rem] lg:w-[2.25rem] xl:h-43.71 xl:w-43.71"
                      alt="Linkedin"
                      height={36}
                      width={36}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-around pb-[14px] pt-7 sm:flex-row sm:border-none sm:pt-0 ">
                <ul className="footer-ul flex flex-row tracking-tight sm:flex-col sm:tracking-normal ">
                  <li className="footer-section footer-content inline-block  pr-5 text-[.875rem] opacity-[70%] sm:opacity-[60%] lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>

                  <li className="footer-section footer-content inline-block pr-5 text-[.875rem] opacity-[70%] sm:opacity-[60%] lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/collaboration"
                    >
                      Become a partner
                    </Link>
                  </li>
                  <li className="footer-section footer-content inline-block text-[.875rem] opacity-[70%] sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/careers"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="footer-section footer-content  hidden pr-3 text-[.875rem] opacity-[70%] sm:inline-block sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/FAQ"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
                <ul className="footer-ul flex flex-row tracking-tight sm:mt-[0px] sm:flex-col sm:tracking-normal md:mt-[0px] lg:mt-[0px] xl:mt-[0px]">
                  <li className="footer-content footer-section inline-block pr-5 text-[.875rem] opacity-[70%] sm:hidden sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/FAQ"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="footer-content footer-section inline-block pr-5 text-[.875rem] opacity-[70%] sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="footer-content footer-section inline-block text-[.875rem] opacity-[70%] sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/join-our-klan"
                    >
                      Join our Klan
                    </Link>
                  </li>
                  <li className="footer-content footer-section hidden pr-3 text-[.875rem] opacity-[70%] sm:inline-block  sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/legal"
                    >
                      Legal
                    </Link>
                  </li>
                  <li className="footer-content footer-section hidden pr-3 text-[.875rem] opacity-[70%] sm:inline-block  sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <div className=" sm:inline-block sm:hover:italic">
                      Studio
                    </div>
                  </li>
                </ul>
                <ul className="flex items-center justify-center gap-4">
                  <li className="footer-section footer-content inline-block text-[.875rem] opacity-[70%] sm:hidden  sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <Link
                      className="cursor-pointer sm:inline-block sm:hover:italic"
                      href="/legal"
                    >
                      Legal
                    </Link>
                  </li>
                  <li className="footer-section footer-content inline-block text-[.875rem] opacity-[70%] sm:hidden  sm:opacity-[60%]  lg:text-[1.125rem] xl:text-24">
                    <div className=" sm:inline-block sm:hover:italic">
                      Studio
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:hidden ">
            <div className="my-3 flex items-center gap-2 justify-center sm:mt-12 sm:flex sm:justify-start">
              <Link
                href="https://chat.whatsapp.com/KhEXrhzF4Oj4acJItXEipM"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    "/assets/images/home_page/social_media_icons/Whatsapp.svg"
                  }
                  className="h-[1.9375rem] w-[1.9375rem] "
                  alt="Whatsapp"
                  height={31}
                  width={31}
                />
              </Link>
              <Link
                href="https://www.instagram.com/thekreatr?igsh=Ymdwenl2bmlvanI1"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    "/assets/images/home_page/social_media_icons/Instagram.svg"
                  }
                  className="h-[1.9375rem] w-[1.9375rem] "
                  alt="Instagram"
                  height={31}
                  width={31}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-kreatr/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={
                    "/assets/images/home_page/social_media_icons/LinkedIn.svg"
                  }
                  className="h-[1.9375rem] w-[1.9375rem] "
                  alt="Linkedin"
                  height={31}
                  width={31}
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="footer-section footer-address mx-auto flex w-[70%] justify-center text-center text-[12px] leading-4 opacity-[70%] sm:hidden sm:opacity-[60%]">
              <p>
                18/1, Shariff Square, 1st Block Koramangala,
                <br />
                <span> Bengaluru, Karnataka (560034)</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center px-10 py-5 text-center sm:px-0 md:py-5">
            <p className="content-neue footer-section text-[12px] opacity-[70%] sm:opacity-[60%] md:text-[12px] xl:text-20 ">
              Copyright © 2024 KreatrMinds Pvt. Ltd.|{" "}
              <Link
                href="/bug-report"
                className="content-neue text-blue-800 underline"
              >
                Report bug
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
