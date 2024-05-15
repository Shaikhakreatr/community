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
  return (
    <div>
      <Tabs variant="pills" radius="lg" defaultValue="upcoming">
        {/* heading section */}
        {/* upcoming heading section */}

        <Tabs.Panel value="upcoming">
          <div className="page-heading relative text-[110px]">
            <h1 className="text-center">Kreatr’s very own</h1>
            <h1 className="absolute right-[20%] top-[40%] rotate-[-1deg] text-center text-red-600">
              events and Workshops
            </h1>
          </div>
        </Tabs.Panel>
        {/* past heading section */}
        <Tabs.Panel value="past">
          <div className="page-heading relative text-[110px]">
            <h1 className="text-center">TAKE A LOOK AT OUR</h1>
            <h1 className="absolute right-[34%] top-[43%]  rotate-[-1deg] text-center text-blue-600">
              PAST EVENTS
            </h1>
          </div>
        </Tabs.Panel>

        {/* toggle section */}
        <div className="mt-[80px] flex justify-center">
          <Tabs.List>
            <Tabs.Tab value="upcoming">Upcoming</Tabs.Tab>
            <Tabs.Tab value="past">Past</Tabs.Tab>
          </Tabs.List>
        </div>

        {/* hero section */}
        {/* upcoming hero section */}
        <Tabs.Panel value="upcoming">
          <div>
            {upcomingEvents.map((events) => {
              <div
                key={events.id}
                className="h-[521px] w-[381px] rounded-[15px] border border-black p-5"
              >
                <img
                  className="h-[319.77px] w-[348px] rounded-[15px]"
                  src={events.image}
                  alt="upcoming img"
                />
                <div className="my-[20px] flex items-center justify-between">
                  <p className="page-subhead text-[32px] leading-[35px]">
                    {events.title}
                  </p>
                  <img
                    className="h-[36px] w-[36px]"
                    src="/assets/images/events_page/arrow.svg"
                    alt=""
                  />
                </div>
                <a>
                  <div className="content-neue-medium h-[40.16px] w-[133.87px] rounded-[30px] border border-black pt-[7px] text-center text-[16px]">
                    Register now
                  </div>
                </a>
              </div>;
            })}
          </div>
        </Tabs.Panel>

        {/* past hero section */}
        <Tabs.Panel value="past">Messages tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default EventsHero;
