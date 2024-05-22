
import React from "react";
// import Testimonials from "../testimonials/Testimonials";

const PastHero = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="lg:mt-[70px] mt-[25px]">
              <h1 className="page-subhead text-[22px] leading-[24px] lg:leading-[55px] sm:text-[44px] lg:text-[54px] xl:text-[64px]">
                Design Thinking Workshop-
                <br /> Extended Version
              </h1>
              <div className="sm:mb-[20px] sm:mt-[20px] my-[10px] flex">
                <div className="content-neue pb-[16px] mr-3 rounded-[24px] border border-black text-center text-[10px] h-[14px] w-[46px] lg:h-[28px] lg:w-[80px] lg:text-[18px] xl:h-[34px] xl:w-[112px] xl:text-[24px] ">
                  Design
                </div>
                <div className="content-neue pb-[16px] mr-3 rounded-[24px] border border-black text-center text-[10px] h-[14px] w-[36px] lg:h-[28px] lg:w-[60px] lg:text-[18px] xl:h-[34px] xl:w-[87px] xl:text-[24px] ">
                  3 hrs
                </div>
                <div className="content-neue pb-[16px] mr-3 rounded-[24px] border border-black text-center text-[10px] h-[14px] w-[110px] lg:h-[28px] lg:w-[200px] lg:text-[18px] xl:h-[34px] xl:w-[264px] xl:text-[24px]">
                  Speaker: Megha Satish
                </div>
              </div>
              <img
                className="h-[148px] w-[320px] lg:h-[350px] lg:w-[980px] xl:h-[398px] xl:w-[1064px]"
                src="/assets/images/events_page/events-main-page.jpg"
                alt="main-img"
              />
              <div className="content-neue-medium mt-[18px] flex items-center justify-center text-[13px] sm:text-[20px] lg:text-[22px] xl:text-[30px]">
                <div className="mr-3 border-r border-black pr-[40px]">
                  Sat 12 Jan, 2024
                </div>
                <div>Slay Coffee, Koramangala</div>
              </div>
            </div>
            <div className="mx-[166px] mt-[60px]">
              <h3 className="content-neue-medium text-[16px] sm:text-[24px] lg:text-[26px] xl:text-[34px]">
                About
              </h3>
              <br />
              <div className="content-neue text-[14px] leading-[20px] sm:text-[18px] lg:text-[24px] lg:leading-[28px] xl:text-[28px] xl:leading-[33px]">
                <p>
                  Explore the practice of upcycling materials in architecture
                  and its profound impact on the environment, society, and
                  economics. By repurposing and reusing materials, construction,
                  and demolition can be transformed into a sustainable process.
                </p>
                <br />
                <p>
                  {`This Refund and Cancellation Policy (this "policy") is a binding
                policy between you, as an individual or entity ("End User" or
                "you"), and Kreatrminds Private Limited, its subsidiaries and
                affiliates (collectively, the “Company," “we" or “our").`}
                  <br />
                  <br />
                  To ensure compliance with our refund and cancellation policy,
                  individuals under the age of 18 must use our app with explicit
                  consent from a legal parent or guardian. By accessing and
                  purchasing our services through the app, you confirm that you
                  are either 18 years of age or older, or you have obtained the
                  necessary legal parental or guardian consent. You also affirm
                  that you possess the full capacity and competence to abide by
                  the terms, conditions, representations, and warranties
                  outlined in this policy related to the purchase of our
                  services.
                </p>
              </div>
            </div>
            <div className="mt-[50px]">
              <div className="flex items-center justify-center">
                <h1 className="page-subhead mr-[20px] text-[17px] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                  Behold, Snapshots!
                </h1>
              </div>
              <div className="mt-[40px] flex items-center justify-center">
                <img
                  className=" mr-3 h-[354px] w-[378px]"
                  src="/assets/images/events_page/events1.jpg"
                  alt="events img"
                />
                <div className="mr-3 flex flex-col items-center">
                  <img
                    className=" mb-3 h-[170px] w-[269px]"
                    src="/assets/images/events_page/events2.jpg"
                    alt="events img"
                  />
                  <img
                    className="h-[170px] w-[269px]"
                    src="/assets/images/events_page/events3.jpg"
                    alt="events img"
                  />
                </div>
                <img
                  className="h-[354px] w-[378px]"
                  src="/assets/images/events_page/events3.jpg"
                  alt="events img"
                />
              </div>
            </div>
            <div className="w-full my-[40px]">
              <h1 className="page-subhead text-center text-[17px] sm:text-[24px] lg:text-[30px] xl:text-[36px]">
                {`Happy Folks' Words!`}
              </h1>
              {/* <Testimonials /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastHero;
