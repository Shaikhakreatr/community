"use client";
import React, { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import Link from "next/link";

const EventsHero = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://erfaz8h6s3.execute-api.ap-south-1.amazonaws.com/dev/eventInfo/"); // Replace with your actual API endpoint
        const data = await response.json();

        const upcoming = data.filter((event) => event.eventType === "upcoming");
        const past = data.filter((event) => event.eventType === "past");

        setUpcomingEvents(upcoming);
        setPastEvents(past);
      } catch (error) {
        console.error("Error fetching events data:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Tabs variant="pills" radius="lg" defaultValue="upcoming">
        {/* heading section */}
        {/* upcoming heading section */}

        <Tabs.Panel value="upcoming">
          <div className="page-heading relative mt-[40px] sm:mt-[70px] sm:h-[50px]">
            <h1 className="text-center text-[40px] leading-[32px] sm:text-[70px] sm:leading-[0px] lg:text-[90px] xl:text-[110px] ">
              Kreatr’s
              <br className="sm:hidden" /> very own
            </h1>
            <h1 className="absolute right-[24%] top-[90%] rotate-[-1deg] text-center text-[48px] leading-[38px] text-red-600 sm:text-[70px] sm:leading-[0px] lg:right-[22%] lg:top-[118%] lg:text-[90px] xl:right-[20%] xl:top-[142%] xl:text-[110px]">
              events and
              <br className="sm:hidden" /> Workshops
            </h1>
          </div>
        </Tabs.Panel>
        {/* past heading section */}
        <Tabs.Panel value="past">
          <div className="page-heading relative mb-[-40px] mt-[40px] sm:mb-0 sm:mt-[70px] sm:h-[50px] ">
            <h1 className="text-center text-[40px] leading-[33px] sm:text-[70px] sm:leading-[0px] lg:text-[90px] xl:text-[110px] ">
              Take a look
              <br className="sm:hidden" /> at our
            </h1>
            <h1 className="absolute right-[18%] top-[60%] rotate-[-1deg] text-center text-[48px] text-blue-600 sm:text-[70px] lg:right-[35%] lg:top-[-15%] lg:text-[90px] xl:right-[34%] xl:top-[-18%] xl:text-[110px]">
              past Events
            </h1>
          </div>
        </Tabs.Panel>

        {/* toggle section */}
        <div className="mb-[34px] mt-[105px] flex justify-center lg:mt-[98px] xl:mt-[120px]">
          <Tabs.List>
            <Tabs.Tab value="upcoming">Upcoming</Tabs.Tab>
            <Tabs.Tab value="past">Past</Tabs.Tab>
          </Tabs.List>
        </div>

        {/* hero section */}

        {/* upcoming hero section */}
        <Tabs.Panel value="upcoming">
          <div className="flex flex-col flex-wrap items-center justify-center sm:my-[50px] sm:ml-0 sm:flex-row">
            {upcomingEvents.map((event) => (
              <Link href={`/events-upcoming/${event.id}`} key={event.id}>
                <div className="upcoming-box mb-[30px] h-[357px] w-[290px] rounded-[15px] border border-black p-[18px] sm:mb-0 sm:mr-[45px] lg:h-[400px] lg:w-[321px] lg:p-[18px] xl:h-[521px] xl:w-[381px] xl:p-5">
                  <img
                    className="h-[225.63px] w-[261.18px] rounded-[15px] lg:h-[250px] lg:w-[280px] xl:h-[319.77px] xl:w-[348px]"
                    src={event.coverImg}
                    alt="upcoming img"
                  />
                  <div className="my-[12px] flex items-center justify-between lg:mb-[20px] lg:mt-[10px] xl:my-[25px]">
                    <p className="page-subhead text-[24px] leading-[21px] sm:text-[26px] lg:text-[28px] lg:leading-[28px] xl:text-[32px] xl:leading-[35px]">
                      {event.heading}
                    </p>
                    <img
                      className="h-[24px] w-[24px] lg:h-[36px] lg:w-[36px]"
                      src="/assets/images/events_page/arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="upcoming-sub content-neue-medium my-[14px] h-[28.34px] w-[92.54px] rounded-[30px] border border-black pt-[5px] text-center text-[12px] sm:my-0 sm:pt-[7px] sm:text-[13px] lg:my-[16px] lg:mt-[-8px] lg:h-[38.16px] lg:w-[123.87px] lg:text-[15px] xl:h-[40.16px] xl:w-[133.87px] xl:text-[16px]">
                    Register now
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Tabs.Panel>

        {/* past hero section */}
        <Tabs.Panel value="past">
          <div className="mb-[50px] mt-[35px] flex flex-col flex-wrap items-center justify-center sm:ml-0 sm:flex-row">
            {pastEvents.map((event) => (
              <Link href={`/events-past/${event.id}`} key={event.id}>
                <div className="past-box mb-[30px] h-[357px] w-[290px] rounded-[15px] border border-black p-[18px] sm:mb-0 sm:mr-[45px] lg:h-[400px] lg:w-[321px] lg:p-[18px] xl:h-[521px] xl:w-[381px] xl:p-5">
                  <img
                    className="h-[225.63px] w-[261.18px] rounded-[15px] lg:h-[250px] lg:w-[280px] xl:h-[319.77px] xl:w-[348px]"
                    src={event.coverImg}
                    alt="past img"
                  />
                  <div className="my-[12px] flex items-center justify-between lg:mb-[-4px] lg:mt-[9px] xl:my-[20px]">
                    <p className="page-subhead text-[24px] leading-[21px] sm:text-[26px] lg:text-[28px] lg:leading-[28px] xl:text-[32px] xl:leading-[35px]">
                      {event.heading}
                    </p>
                    <img
                      className="h-[24px] w-[24px] lg:h-[36px] lg:w-[36px]"
                      src="/assets/images/events_page/arrow.svg"
                      alt=""
                    />
                  </div>
                  <div className="past-sub content-neue-medium my-[14px] h-[28px] w-[115px] rounded-[30px] border border-black pt-[5px] text-center text-[12px] sm:my-0 sm:pt-[7px] sm:text-[13px] lg:my-[16px] lg:h-[40.16px] lg:w-[162px] lg:text-[15px] xl:text-[16px]">
                    Explore the event
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default EventsHero;
