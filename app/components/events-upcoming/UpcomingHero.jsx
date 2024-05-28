"use client";
import React, { useState,useRef } from "react";
import {
  useForm,
  isEmail,
  hasLength,
  matches,
  isNotEmpty,
} from "@mantine/form";
import { Button, TextInput } from "@mantine/core";
import styles from "./UpcomingHero.module.css";

const UpcomingHero = ({upcomingData}) => {
  
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      phoneNumber: "",
      senderEmail: "",
      message: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Please write your name"),
      phoneNumber: matches(
        /^(\+\d{1,3}[-.\s]??)?\d{10}$/,
        "Please enter a valid phone number",
      ),
      senderEmail: isEmail("Please enter a valid email"),
      message: isNotEmpty("Please write your message"),
    },
  });

  const [forms, setForms] = useState([
    {
      form,
    },
  ]);

  const addForm = () => {
    setForms([...forms, { form }]);
  };

  const removeForm = () => {
    if (forms.length > 1) {
      setForms(forms.slice(0, -1));
    }
  };

  const handleFormChange = (index, field, value) => {
    const newForms = forms.map((form, i) =>
      i === index ? { ...form, [field]: value } : form,
    );
    setForms(newForms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Submitted forms:", forms);
  };
  const targetRef = useRef(null);

  const scrollToDiv = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const isDataAvailable = upcomingData && 
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
            <h1 className="page-subhead text-[22px] leading-[24px] sm:text-[44px] lg:text-[54px] lg:leading-[55px] xl:text-[64px]">
              {upcomingData.heading}
            </h1>
            <div className="my-[10px] flex sm:mb-[20px] sm:mt-[20px]">
              <div className="content-neue mr-3 h-[14px] w-[46px] rounded-[24px] border border-black pb-[16px] text-center text-[10px] lg:h-[28px] lg:w-[80px] lg:text-[18px] xl:h-[34px] xl:w-[112px] xl:text-[24px] ">
                {upcomingData.sessionType}
              </div>
              <div className="content-neue mr-3 h-[14px] w-[36px] rounded-[24px] border border-black pb-[16px] text-center text-[10px] lg:h-[28px] lg:w-[60px] lg:text-[18px] xl:h-[34px] xl:w-[87px] xl:text-[24px] ">
                {upcomingData.duration}
              </div>
              <div className="content-neue mr-3 h-[14px] w-[110px] rounded-[24px] border border-black pb-[16px] text-center text-[10px] lg:h-[28px] lg:w-[200px] lg:text-[18px] xl:h-[34px] xl:w-[264px] xl:text-[24px]">
                Speaker: {upcomingData.speakerName}
              </div>
            </div>
            <img
              className="h-[148px] w-[320px] lg:h-[350px] lg:w-[980px] xl:h-[398px] xl:w-[1064px]"
              src={upcomingData.coverImg}
              alt="main-img"
            />
            <div className="content-neue-medium mt-[10px] flex items-center justify-between text-[13px] sm:mt-[18px] sm:text-[20px] lg:text-[22px] xl:text-[30px]">
              <div className="border-r border-black pr-[10px] sm:pr-[40px]">
                {upcomingData.date}
              </div>
              <div className="border-r border-black pr-[10px] sm:pr-[40px]">
                {upcomingData.location}
              </div>
              <div className="border-black pr-[10px] sm:border-r sm:pr-[40px]">
                {upcomingData.price}
              </div>
              <div onClick={scrollToDiv} className=" cursor-pointer upcoming-btn hidden h-[24.52px] w-[128.12px] rounded-[40px] pt-[5px] text-center text-[13px] sm:block sm:h-[38px] sm:w-[241px] sm:text-[20px] lg:h-[48px] lg:w-[261px] lg:rounded-[80px] lg:text-[22px] xl:h-[54px] xl:w-[281px] xl:text-[30px]">
                Book Now
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div onClick={scrollToDiv} className=" cursor-pointer upcoming-btn mt-[20px] flex h-[24.52px] w-[128.12px] items-center justify-center rounded-[40px] pb-[6px] pt-[5px] text-center text-[13px] sm:hidden sm:h-[38px] sm:w-[241px] sm:text-[20px] lg:h-[48px] lg:w-[261px] lg:rounded-[80px] lg:text-[22px] xl:h-[54px] xl:w-[281px] xl:text-[30px]">
                Book Now
              </div>
            </div>
          </div>
          <div className="mx-[20px] mt-[25px] sm:mt-[60px] lg:mx-[126px] xl:mx-[166px]">
            <h3 className="content-neue-medium text-[16px] sm:text-[24px] lg:text-[26px] xl:text-[34px]">
              About
            </h3>
            <br />
            <div className="content-neue text-[14px] leading-[20px] sm:text-[18px] lg:text-[24px] lg:leading-[28px] xl:text-[28px] xl:leading-[33px]">
              <p>
                {upcomingData.description}
              </p>
            </div>
          </div>
          <div className="mt-[30px] sm:mt-[50px]">
            <div className="flex items-center justify-center">
              <h1 className="content-neue-medium mr-[20px] text-[16px] sm:text-[20px] lg:text-[28px] xl:text-[34px]">
                Explore our past events
              </h1>
              <img
                className="h-[24px] w-[24px] sm:h-[36px] sm:w-[36px] lg:h-[42px] lg:w-[42px] xl:h-[51px] xl:w-[51px]"
                src="/assets/images/events_page/arrow.svg"
                alt="arrow img"
              />
            </div>
            <div className="mt-[20px] flex items-center justify-center sm:mt-[40px]">
              {upcomingData.images.map((item,index)=>(
                <img
                key={index}
                className="mr-1 h-[106px] w-[106px] sm:mr-4 lg:h-[310px] lg:w-[310px] xl:h-[354px] xl:w-[354px]"
                src={item}
                alt="events img"
              />
              ))}
            </div>
          </div>
          <div ref={targetRef} id="target-section" className="mt-[30px] sm:mt-[50px]">
            <h1 className="page-subhead text-center text-[16px] sm:text-[22px] lg:text-[26px] xl:text-[34px]">
              Fill in the details
            </h1>
            <div className="mt-[10px] sm:mt-[20px]">
              {forms.map((form, index) => (
                <div key={index}>
                  <p className="page-subhead mt-[30px] text-[10px] sm:mt-[50px] sm:text-[16px] lg:text-[20px] xl:text-[24px]">
                    Person {index + 1}
                  </p>
                  <form className={`${styles.formWrap} w-full`}>
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
                      value={form.name}
                      onChange={(event) =>
                        handleFormChange(
                          index,
                          "name",
                          event.currentTarget.value,
                        )
                      }
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
                      value={form.phoneNumber}
                      onChange={(event) =>
                        handleFormChange(
                          index,
                          "phoneNumber",
                          event.currentTarget.value,
                        )
                      }
                      inputMode="numeric"
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
                      value={form.senderEmail}
                      onChange={(event) =>
                        handleFormChange(
                          index,
                          "senderEmail",
                          event.currentTarget.value,
                        )
                      }
                    />
                  </form>
                </div>
              ))}
              <div className="mt-[20px]  flex items-center justify-center">
                <button
                  className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-black pb-[4px] text-center sm:pb-0 sm:pt-[2px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px]"
                  onClick={removeForm}
                >
                  -
                </button>
                <h1 className="content-neue-medium mx-[10px] text-[12px] lg:text-[24px] xl:text-[28px]">
                  {forms.length}
                </h1>
                <button
                  className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-black pb-[4px] text-center sm:pb-0 sm:pt-[2px] lg:h-[28px] lg:w-[28px] xl:h-[32px] xl:w-[32px]"
                  onClick={addForm}
                >
                  +
                </button>
              </div>
              <div className="mt-[10px]  sm:mx-[150px] sm:mt-[40px] ">
                <div>
                  <p className="content-neue-medium text-center text-[8px] sm:text-[12px] lg:text-[18px] xl:text-[20px]">
                    By clicking on proceed, I agree that I have read and
                    <br />
                    understood the{" "}
                    <a href="#" className=" text-blue-700">
                      TnC
                    </a>{" "}
                    and the{" "}
                    <a href="#" className=" text-blue-700">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-[10px] sm:mt-[30px]">
                <h1 className="content-neue-medium text-center text-[14px] sm:text-[26px] lg:text-[30px] xl:text-[34px]">
                  Total Amount :{" "}
                  <span className="page-subhead text-[14px] sm:text-[26px] lg:text-[30px] xl:text-[34px]">
                    INR {forms.length * 1499}.00
                  </span>
                </h1>
              </div>
              <div className="mb-[30px] items-center justify-center text-center sm:mb-[65px] sm:mt-[10px]  sm:flex lg:gap-3  xl:gap-5">
                <Button
                  className={styles.formButton}
                  radius={50}
                  onClick={handleSubmit}
                  mt="sm"
                >
                  PROCEED TO PAY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingHero;
