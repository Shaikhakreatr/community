"use client";
import React from "react";
import { Tabs } from "@mantine/core";
import { speakers } from "@/constants/constants";
import { sponsors } from "@/constants/constants";
import { spaces } from "@/constants/constants";
import { sellers } from "@/constants/constants";
import CollabrationForm from "../collabration-form/CollabrationForm";

const CollabrationSection = () => {
  return (
    <div>
      <div>
        <Tabs variant="pills" radius="lg" defaultValue="speakers">
          <div className="mt-[50px] flex flex-col items-center justify-center sm:mt-[80px]">
            <div className="flex justify-center">
              <Tabs.List>
                <Tabs.Tab value="speakers">Speakers</Tabs.Tab>
                {/* <Tabs.Tab value="sponsors">Sponsors</Tabs.Tab>
                <Tabs.Tab value="spaces">Spaces</Tabs.Tab>
                <Tabs.Tab value="sellers">Sellers</Tabs.Tab> */}
              </Tabs.List>
            </div>

            <Tabs.Panel value="speakers">
              <div className="mt-[35px] sm:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Do you love spreading knowledge
                    <br className="sm:hidden" /> and igniting minds as a
                    speaker?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                    {`Here's what happens when you collaborate with us!`}
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:mx-[40px] sm:my-[100px] sm:flex">
                <div className="border-black px-[20px] sm:w-[50%] sm:border-r sm:px-[50px]">
                  {speakers.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc">
                          Hello Title
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[17px] sm:text-[20px] lg:text-[24px] lg:leading-[28px] xl:text-[26px]">
                        Hello Description
                      </p>
                    </div>
                  ))}
                </div>
                <div className="sm:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel>

            {/* <Tabs.Panel value="sponsors">
              <div className="mt-[35px] sm:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Turbocharge your brand&apos;s
                    <br className="sm:hidden" /> visibility through sponsorship!
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                    Here&apos;s what happens when you collaborate with us!
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:mx-[40px] sm:my-[100px] sm:flex">
                <div className="border-black px-[20px] sm:w-[50%] sm:border-r sm:px-[50px]">
                  {sponsors.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc">
                          {item.title}
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[17px] sm:text-[20px] lg:text-[24px] lg:leading-[28px] xl:text-[26px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="sm:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="spaces">
              <div className="mt-[35px] sm:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Got a great space to offer?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                    Here&apos;s what happens when you collaborate with us!
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:mx-[40px] sm:my-[100px] sm:flex">
                <div className="border-black px-[20px] sm:w-[50%] sm:border-r sm:px-[50px]">
                  {spaces.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc">
                          {item.title}
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[17px] sm:text-[20px] lg:text-[24px] lg:leading-[28px] xl:text-[26px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="sm:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="sellers">
              <div className="mt-[35px] sm:mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Wish to sell your products
                    <br className="sm:hidden" /> or services as a seller?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                    Here&apos;s what happens when you collaborate with us!
                  </p>
                </div>
              </div>
              <div className="items-start justify-center sm:mx-[40px] sm:my-[100px] sm:flex">
                <div className="border-black px-[20px] sm:w-[50%] sm:border-r sm:px-[50px]">
                  {sellers.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px] xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc">
                          {item.title}
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[17px] sm:text-[20px] lg:text-[24px] lg:leading-[28px] xl:text-[26px]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="sm:w-[50%]">
                  <CollabrationForm />
                </div>
              </div>
            </Tabs.Panel> */}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CollabrationSection;
