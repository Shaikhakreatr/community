"use client";
import React, { useState, useRef } from "react";
import { useParams } from "next/navigation";
import {
  useForm,
  isEmail,
  hasLength,
  matches,
  isNotEmpty,
} from "@mantine/form";
import { Button, TextInput } from "@mantine/core";
import styles from "./UpcomingHero.module.css";

const UpcomingHero = ({ upcomingData }) => {
  const { id } = useParams();
  const targetRef = useRef(null);

  const form = useForm({
    mode: "controlled",
    initialValues: {
      forms: [{ name: "", phoneNo: "", email: "" }],
    },
    validate: {
      forms: {
        name: hasLength({ min: 2, max: 20 }, "Please write your name", {
          isNotEmpty: true,
        }),
        phoneNo: matches(
          /^(\+\d{1,3}[-.\s]??)?\d{10}$/,
          "Please enter a valid phone number",
          { isNotEmpty: true },
        ),
        email: isEmail("Please enter a valid email", {
          isNotEmpty: true,
        }),
      },
    },
  });

  const addForm = () => {
    if (form.values.forms.length < 10) {
      form.setFieldValue("forms", [
        ...form.values.forms,
        { name: "", phoneNo: "", email: "" },
      ]);
    }
  };

  const removeForm = () => {
    if (form.values.forms.length > 1) {
      form.setFieldValue("forms", form.values.forms.slice(0, -1));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.validate().hasErrors) {
      console.log(form.values.forms);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_EVENT_INFO_URI}/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              newFormInfoList: form.values.forms.map((formInstance) => ({
                name: formInstance.name,
                phoneNo: formInstance.phoneNo,
                email: formInstance.email,
              })),
            }),
          },
        );

        // Handle the response
        if (res.ok) {
          console.log("Data sent successfully");
          form.reset();
        } else {
          throw new Error("Failed to update event information");
        }
      } catch (error) {
        console.error("Error updating event information:", error);
      }
    }
  };

  const scrollToDiv = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const isDataAvailable =
    upcomingData &&
    upcomingData.heading &&
    upcomingData.sessionType &&
    upcomingData.duration &&
    upcomingData.speakerName &&
    upcomingData.date &&
    upcomingData.coverImg &&
    upcomingData.location &&
    upcomingData.price &&
    upcomingData.description &&
    Array.isArray(upcomingData.images);

  if (!isDataAvailable) {
    return <div>No Data Available</div>;
  }

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[25px] lg:mt-[50px]">
            <h1 className="page-subhead text-[22px] leading-[24px] sm:text-[48px] lg:text-[54px] lg:leading-[55px] xl:text-[64px]">
              {upcomingData.heading}
            </h1>
            <div className="my-[10px] flex sm:mb-[20px] sm:mt-[20px]">
              <div className="content-neue mr-3 flex h-[14px] w-[46px] items-center justify-center rounded-[24px] border border-black text-center text-[10px] sm:h-[24px] sm:w-[66px] sm:text-[15px] lg:h-[28px] lg:w-[80px] lg:text-[18px] xl:h-[34px] xl:w-[112px] xl:text-[24px]">
                {upcomingData.sessionType}
              </div>
              <div className="content-neue mr-3 flex h-[14px] w-[36px] items-center justify-center rounded-[24px] border border-black text-center text-[10px] sm:h-[24px] sm:w-[50px] sm:text-[15px] lg:h-[28px] lg:w-[60px] lg:text-[18px] xl:h-[34px] xl:w-[87px] xl:text-[24px]">
                {upcomingData.duration}
              </div>
              <div className="content-neue mr-3 flex h-[14px] w-[110px] items-center justify-center rounded-[24px] border border-black text-center text-[10px] sm:h-[24px] sm:w-[180px] sm:text-[15px] lg:h-[28px] lg:w-[200px] lg:text-[18px] xl:h-[34px] xl:w-[264px] xl:text-[24px]">
                Speaker: {upcomingData.speakerName}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="h-auto max-w-[100%] object-cover object-center lg:w-[990px] xl:w-[1125px] "
                src={upcomingData.coverImg}
                alt="main-img"
              />
            </div>
            <div className="content-neue-medium mt-[10px] flex items-center  justify-center gap-[5px] text-[11px] sm:mt-[18px] sm:gap-[18px] sm:text-[15px] lg:gap-[18px] lg:text-[22px] xl:text-[30px]">
              <div>{upcomingData.date}</div>
              <div className="h-[20px] border-r border-black sm:h-[35px]"></div>
              <div>{upcomingData.location}</div>
              <div className="h-[20px] border-r border-black sm:h-[35px]"></div>
              <div>{`₹  ${upcomingData.price}`}</div>
              <div className="h-[20px] sm:h-[35px] sm:border-r sm:border-black"></div>
              <div
                onClick={scrollToDiv}
                className=" upcoming-btn hidden h-[24.52px] w-[128.12px]  cursor-pointer items-center  justify-center rounded-[40px] text-center text-[13px] hover:border hover:border-[#3C9E3C] hover:bg-transparent hover:text-[#3C9E3C] sm:mx-[8px] sm:flex sm:h-[30px] sm:w-[200px] sm:text-[20px] lg:h-[48px] lg:w-[261px] lg:rounded-[80px] lg:text-[22px] xl:h-[54px] xl:w-[281px] xl:text-[30px]"
              >
                Book Now
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                onClick={scrollToDiv}
                className=" upcoming-btn mt-[20px] flex h-[24.52px] w-[128.12px] cursor-pointer items-center justify-center rounded-[40px] text-center text-[13px] sm:hidden sm:h-[38px] sm:w-[241px] sm:text-[20px] lg:h-[48px] lg:w-[261px] lg:rounded-[80px] lg:text-[22px] xl:h-[54px] xl:w-[281px] xl:text-[30px]"
              >
                Book Now
              </div>
            </div>
          </div>
          <div className="mx-[20px] mt-[25px] sm:mt-[60px] lg:mx-[130px] xl:mx-[176px]">
            <h3 className="content-neue-medium text-center text-[16px] sm:text-start sm:text-[24px] lg:text-[26px] xl:text-[34px]">
              About
            </h3>
            <br />
            <div className="content-neue text-center text-[14px] leading-[20px] sm:text-start sm:text-[18px] lg:text-[24px] lg:leading-[28px] xl:text-[28px] xl:leading-[33px]">
              <p>{upcomingData.description}</p>
            </div>
          </div>
          <div className="mt-[30px] lg:mt-[50px]">
            <div className="flex items-center justify-center">
              <h1 className="content-neue-medium mr-[20px] text-[16px] sm:text-[20px] lg:text-[28px] xl:text-[34px]">
                Explore more events
              </h1>
              <img
                src="/assets/images/events_page/arrow.svg"
                alt="arrow image"
                className="h-[24px] w-[24px]"
              />
            </div>
            <div className="mt-[15px] flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-5 xl:gap-10">
              {upcomingData.images.map((item, index) => (
                <img
                  key={index}
                  className={`mr-1 h-[106px] w-[106px] object-cover object-center sm:mr-4 sm:h-[250px] sm:w-[250px] lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]`}
                  src={item}
                  alt="events img"
                />
              ))}
            </div>
          </div>
          <div
            ref={targetRef}
            id="target-section"
            className="mt-[30px] sm:mt-[50px]"
          >
            <h1 className="page-subhead text-center text-[16px] sm:text-[22px] lg:text-[26px] xl:text-[34px]">
              Fill in the details
            </h1>
            <form onSubmit={handleSubmit} className="mt-[10px] sm:mt-[20px]">
              {form.values.forms.map((formInstance, index) => (
                <div key={index}>
                  <p className="page-subhead mt-[30px] text-[10px] sm:mt-[50px] sm:text-[16px] lg:text-[20px] xl:text-[24px]">
                    {`Person  ${index + 1}`}
                  </p>
                  <div className={`${styles.formWrap} w-full`}>
                    <TextInput
                      label="Name"
                      mt={10}
                      radius={50}
                      placeholder="Your name here"
                      classNames={{
                        input: styles.transparentInput,
                        label: styles.inputLabel,
                        error: styles.inputError,
                      }}
                      withAsterisk
                      {...form.getInputProps(`forms.${index}.name`)}
                    />
                    <br className="hidden sm:block" />
                    <TextInput
                      label="Phone Number"
                      mt={10}
                      radius={50}
                      placeholder="Your phone number here"
                      classNames={{
                        input: styles.transparentInput,
                        label: styles.inputLabel,
                        error: styles.inputError,
                      }}
                      withAsterisk
                      inputMode="numeric"
                      {...form.getInputProps(`forms.${index}.phoneNo`)}
                    />
                    <br className="hidden sm:block" />
                    <TextInput
                      label="Email"
                      mt={10}
                      radius={50}
                      placeholder="Your email here"
                      classNames={{
                        input: styles.transparentInput,
                        label: styles.inputLabel,
                        error: styles.inputError,
                      }}
                      withAsterisk
                      {...form.getInputProps(`forms.${index}.email`)}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-[20px] flex items-center justify-center">
                <button
                  className={`flex h-[20px] w-[20px] items-center justify-center rounded-full pb-[3px] text-center text-[20px] sm:h-[22px] sm:w-[22px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px] ${
                    form.values.forms.length <= 1
                      ? "border border-gray-400 text-gray-400"
                      : "border border-black"
                  }`}
                  onClick={form.values.forms.length > 1 ? removeForm : null}
                  type="button"
                  disabled={form.values.forms.length <= 1}
                >
                  -
                </button>
                <div className="content-neue-medium flex h-[30px] w-[30px] flex-col items-center justify-center text-[12px] sm:mx-[10px] lg:text-[24px] xl:text-[28px]">
                  {form.values.forms.length}
                </div>
                <button
                  className={`flex h-[20px] w-[20px] items-center justify-center rounded-full pb-[3px] text-center text-[20px] sm:h-[22px] sm:w-[22px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px] ${
                    form.values.forms.length >= 10
                      ? "border border-gray-400 text-gray-400"
                      : "border border-black"
                  }`}
                  onClick={form.values.forms.length < 10 ? addForm : null}
                  type="button"
                  disabled={form.values.forms.length >= 10}
                >
                  +
                </button>
              </div>
              <div className="mt-[10px] sm:mx-[150px] sm:mt-[40px]">
                <div>
                  <p className="content-neue-medium text-center text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[20px]">
                    By clicking on proceed, I agree that I have read and
                    <br />
                    understood the{" "}
                    <a href="/legal" className=" text-blue-700">
                      t&c
                    </a>{" "}
                    and the{" "}
                    <a href="/legal" className=" text-blue-700">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-[10px] sm:mt-[30px]">
                <h1 className="content-neue-medium text-center text-[14px] sm:text-[20px] lg:text-[30px] xl:text-[34px]">
                  Total Amount :{" "}
                  <span className="page-subhead text-[14px] sm:text-[20px] lg:text-[30px] xl:text-[34px]">
                    INR {form.values.forms.length * upcomingData.price}.00
                  </span>
                </h1>
              </div>
              <div className="mb-[30px] items-center justify-center text-center sm:mb-[65px] sm:mt-[10px] sm:flex lg:gap-3 xl:gap-5">
                <Button
                  className={styles.formButton}
                  radius={50}
                  type="submit"
                  mt="sm"
                >
                  PROCEED TO PAY
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default UpcomingHero;
