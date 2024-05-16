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
          <div className="mt-[80px] flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <Tabs.List>
                <Tabs.Tab value="speakers">Speakers</Tabs.Tab>
                <Tabs.Tab value="sponsors">Sponsors</Tabs.Tab>
                <Tabs.Tab value="spaces">Spaces</Tabs.Tab>
                <Tabs.Tab value="sellers">Sellers</Tabs.Tab>
              </Tabs.List>
            </div>
            {/* speakers section */}
            <Tabs.Panel value="speakers">
              <div className="mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Do you love spreading knowledge and igniting minds as a
                    speaker?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px] ">
                    Here’s what happens when you collaborate with us!
                  </p>
                </div>
              </div>
              <div className="mx-[40px] my-[100px] flex items-start justify-center">
                <div className="border-r border-black  px-[50px] sm:w-[50%]">
                  {speakers.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px]  xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc ">
                          {item.title}
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[28px] sm:text-[20px] lg:text-[24px] xl:text-[26px]">
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
            {/* sponsors section */}
            <Tabs.Panel value="sponsors">
              <div className="mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Turbocharge your brand's visibility through sponsorship!
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px] ">
                    Here’s what happens when you collaborate with us!
                  </p>
                </div>
              </div>
              <div className="mx-[40px] my-[100px] flex items-start justify-center">
                <div className="border-r border-black  px-[50px] sm:w-[50%]">
                  {sponsors.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px]  xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc ">
                          {item.title}
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[28px] sm:text-[20px] lg:text-[24px] xl:text-[26px]">
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

            {/* spaces section */}
            <Tabs.Panel value="spaces">
              <div className="mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Got a great space to offer?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px] ">
                    Here’s what happens when you collaborate with us!
                  </p>
                </div>
              </div>
              <div className="mx-[40px] my-[100px] flex items-start justify-center">
                <div className="border-r border-black  px-[50px] sm:w-[50%]">
                  {spaces.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px]  xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc ">
                          {item.title}
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[28px] sm:text-[20px] lg:text-[24px] xl:text-[26px]">
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

            {/* sellers section */}
            <Tabs.Panel value="sellers">
              <div className="mt-[50px]">
                <div>
                  <h1 className="page-subhead partner-text text-center text-[20px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                    Wish to sell your products or services as a seller?
                  </h1>
                  <p className="content-neue-medium text-center text-[14px] italic sm:text-[22px] lg:text-[26px] xl:text-[28px] ">
                    Here’s what happens when you collaborate with us!
                  </p>
                </div>
              </div>
              <div className="mx-[40px] my-[100px] flex items-start justify-center">
                <div className="border-r border-black  px-[50px] sm:w-[50%]">
                  {sellers.map((item, index) => (
                    <div key={index}>
                      <ul className="page-subhead text-[18px] sm:text-[22px] lg:text-[26px]  xl:text-[28px]">
                        <li className="partner-text mb-2 mt-6 list-disc ">
                          {item.title}
                        </li>
                      </ul>
                      <p className="content-neue-medium text-[14px] leading-[28px] sm:text-[20px] lg:text-[24px] xl:text-[26px]">
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
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CollabrationSection;
