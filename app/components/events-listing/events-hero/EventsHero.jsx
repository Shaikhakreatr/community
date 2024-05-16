"use client";
import React from "react";
import { Tabs } from "@mantine/core";

const EventsHero = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Design Thinking Workshop",
      image: "/assets/images/events_page/upcoming-event.jpg",
    },
    {
      id: 2,
      title: "Design Thinking Workshop",
      image: "/assets/images/events_page/upcoming-event.jpg",
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      image: "/assets/images/events_page/upcoming-event.jpg",
    },
  ];
  const pastEvents = [
    {
      id: 1,
      title: "Design Thinking Workshop",
      image: "/assets/images/events_page/past-event.jpg",
    },
    {
      id: 2,
      title: "Design Thinking Workshop",
      image: "/assets/images/events_page/past-event.jpg",
    },
    {
      id: 3,
      title: "Design Thinking Workshop",
      image: "/assets/images/events_page/past-event.jpg",
    },
  ];
  return (
    <div>
      <Tabs variant="pills" radius="lg" defaultValue="upcoming">
        {/* heading section */}
        {/* upcoming heading section */}

        <Tabs.Panel value="upcoming">
          <div className="page-heading relative sm:mt-[70px] sm:h-[50px] mt-[40px]">
            <h1 className="text-center xl:text-[110px] lg:text-[90px] sm:text-[70px] text-[40px] sm:leading-[0px] leading-[32px] ">Kreatr’s<br className="sm:hidden" /> very own</h1>
            <h1 className="absolute sm:leading-[0px] leading-[38px] xl:right-[20%] xl:top-[142%] lg:top-[118%] lg:right-[22%] top-[90%] right-[24%] rotate-[-1deg] text-center text-red-600 xl:text-[110px] lg:text-[90px] sm:text-[70px] text-[48px]">
              events and<br className="sm:hidden" /> Workshops
            </h1>
          </div>
        </Tabs.Panel>
        {/* past heading section */}
        <Tabs.Panel value="past">
          <div className="page-heading relative  sm:mt-[70px] mt-[40px] sm:h-[50px] sm:mb-0  mb-[-40px] ">
            <h1 className="text-center xl:text-[110px] lg:text-[90px] sm:text-[70px] text-[40px] sm:leading-[0px] leading-[33px] ">Take a look<br className="sm:hidden" /> at our</h1>
            <h1 className="absolute lg:top-[-15%] lg:right-[35%]  xl:right-[34%] xl:top-[-18%] top-[60%] right-[18%] rotate-[-1deg] text-center text-blue-600 xl:text-[110px] lg:text-[90px] sm:text-[70px] text-[48px]">
              past Events
            </h1>
          </div>
        </Tabs.Panel>

        {/* toggle section */}
        <div className="xl:mt-[120px] lg:mt-[98px] mb-[34px] mt-[105px] flex justify-center">
          <Tabs.List>
            <Tabs.Tab value="upcoming">Upcoming</Tabs.Tab>
            <Tabs.Tab value="past">Past</Tabs.Tab>
          </Tabs.List>
        </div>

        {/* hero section */}

        {/* upcoming hero section */}

        <Tabs.Panel value="upcoming">
          <div className=" sm:my-[50px] sm:ml-0  flex sm:flex-row flex-col flex-wrap justify-center items-center">
            {upcomingEvents.map((events) => (
              <div
                key={events.id}
                className="
                upcoming-box sm:mr-[45px] sm:mb-0 mb-[30px] xl:h-[521px] xl:w-[381px] lg:h-[400px] lg:w-[321px] h-[357px] w-[290px] rounded-[15px] border border-black lg:p-[18px] xl:p-5 p-[18px]"
              >
                <img
                  className="xl:h-[319.77px] xl:w-[348px] lg:h-[250px] lg:w-[280px] h-[225.63px] w-[261.18px] rounded-[15px]"
                  src={events.image}
                  alt="upcoming img"
                />
                <div className="lg:my-[20px] my-[12px] flex items-center justify-between">
                  <p className="page-subhead xl:text-[32px] lg:text-[28px] sm:text-[26px] text-[24px] xl:leading-[35px] lg:leading-[25px] leading-[21px]">
                    {events.title}
                  </p>
                  <img
                    className="lg:h-[36px] lg:w-[36px] h-[24px] w-[24px]"
                    src="/assets/images/events_page/arrow.svg"
                    alt=""
                  />
                </div>
                <a>
                  <div className="upcoming-sub my-[14px] sm:my-0 lg:my-[16px] lg:mt-[-8px] content-neue-medium xl:h-[40.16px] xl:w-[133.87px] lg:h-[38.16px] lg:w-[123.87px] h-[28.34px] w-[92.54px] rounded-[30px] border border-black sm:pt-[7px] pt-[5px] text-center xl:text-[16px] lg:text-[15px] sm:text-[13px] text-[12px]">
                    Register now
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Tabs.Panel>

        {/* past hero section */}
        <Tabs.Panel value="past">
          <div className=" mt-[35px] mb-[50px] sm:ml-0 flex sm:flex-row flex-col flex-wrap justify-center items-center">
            {pastEvents.map((events) => (
              <div
                key={events.id}
                className="past-box sm:mr-[45px] sm:mb-0 mb-[30px] xl:h-[521px] xl:w-[381px] lg:h-[400px] lg:w-[321px] h-[357px] w-[290px] rounded-[15px] border border-black lg:p-[18px] xl:p-5 p-[18px]"
              >
                <img
                  className="xl:h-[319.77px] xl:w-[348px] lg:h-[250px] lg:w-[280px] h-[225.63px] w-[261.18px] rounded-[15px]"
                  src={events.image}
                  alt="past img"
                />
                <div className="xl:my-[20px] lg:mt-[12px] lg:mb-[10px] my-[12px] flex items-center justify-between">
                  <p className="page-subhead xl:text-[32px] lg:text-[28px] sm:text-[26px] text-[24px] xl:leading-[35px] lg:leading-[25px] leading-[21px]">
                    {events.title}
                  </p>
                  <img
                    className="lg:h-[36px] lg:w-[36px] h-[24px] w-[24px]"
                    src="/assets/images/events_page/arrow.svg"
                    alt=""
                  />
                </div>
                <a>
                  <div className="past-sub content-neue-medium my-[14px] sm:my-0 lg:my-[16px]  lg:h-[40.16px] lg:w-[162px] w-[115px] h-[28px] rounded-[30px] border border-black sm:pt-[7px] pt-[5px] text-center xl:text-[16px] lg:text-[15px] sm:text-[13px] text-[12px]">
                    Explore the event
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default EventsHero;
