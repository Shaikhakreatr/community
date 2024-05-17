"use client";
import React, { useState } from "react";
import {
  useForm,
  isEmail,
  hasLength,
  matches,
  isNotEmpty,
} from "@mantine/form";
import { Button, TextInput } from "@mantine/core";
import styles from "./UpcomingHero.module.css";

const UpcomingHero = () => {
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
      form
    },
  ]);

  const addForm = () => {
    setForms([
      ...forms,
      { form },
    ]);
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

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[70px]">
            <h1 className="page-subhead text-[22px] leading-[55px] sm:text-[44px] lg:text-[54px] xl:text-[64px]">
              Design Thinking Workshop-
              <br /> Extended Version
            </h1>
            <div className="mb-[20px] mt-[20px] flex">
              <div className="content-neue mr-3 rounded-[24px] border border-black text-center lg:h-[28px] lg:w-[80px] lg:text-[18px] xl:h-[34px] xl:w-[112px] xl:text-[24px] ">
                Design
              </div>
              <div className="content-neue mr-3 rounded-[24px] border border-black text-center lg:h-[28px] lg:w-[60px] lg:text-[18px] xl:h-[34px] xl:w-[87px] xl:text-[24px] ">
                3 hrs
              </div>
              <div className="content-neue mr-3 rounded-[24px] border border-black text-center lg:h-[28px] lg:w-[200px] lg:text-[18px] xl:h-[34px] xl:w-[264px] xl:text-[24px]">
                Speaker: Megha Satish
              </div>
            </div>
            <img
              className="h-[148px] w-[320px] lg:h-[350px] lg:w-[980px] xl:h-[398px] xl:w-[1064px]"
              src="/assets/images/events_page/events-main-page.jpg"
              alt="main-img"
            />
            <div className="content-neue-medium mt-[18px] flex items-center justify-between text-[13px] sm:text-[20px] lg:text-[22px] xl:text-[30px]">
              <div className="border-r border-black pr-[40px]">
                Sat 12 Jan, 2024
              </div>
              <div className="border-r border-black pr-[40px]">
                Slay Coffee, Koramangala
              </div>
              <div className="border-r border-black pr-[40px]">₹1499</div>
              <div className="upcoming-btn h-[24.52px] w-[128.12px] rounded-[40px] pt-[5px] text-center text-[13px] sm:h-[38px] sm:w-[241px] sm:text-[20px] lg:h-[48px] lg:w-[261px] lg:rounded-[80px] lg:text-[22px] xl:h-[54px] xl:w-[281px] xl:text-[30px]">
                Book Now
              </div>
            </div>
          </div>
          <div className="mx-[166px] mt-[60px]">
            <h3 className="content-neue-medium text-[16px] sm:text-[24px] lg:text-[26px] xl:text-[34px]">
              About
            </h3>
            <br />
            <div className="content-neue text-[14px] leading-[20px] sm:text-[18px] lg:text-[24px] lg:leading-[28px] xl:text-[28px] xl:leading-[33px]">
              <p>
                Explore the practice of upcycling materials in architecture and
                its profound impact on the environment, society, and economics.
                By repurposing and reusing materials, construction, and
                demolition can be transformed into a sustainable process.
              </p>
              <br />
              <p>
                This Refund and Cancellation Policy (this "policy") is a binding
                policy between you, as an individual or entity ("End User" or
                "you"), and Kreatrminds Private Limited, its subsidiaries and
                affiliates (collectively, the “Company," “we" or “our").
                <br />
                <br />
                To ensure compliance with our refund and cancellation policy,
                individuals under the age of 18 must use our app with explicit
                consent from a legal parent or guardian. By accessing and
                purchasing our services through the app, you confirm that you
                are either 18 years of age or older, or you have obtained the
                necessary legal parental or guardian consent. You also affirm
                that you possess the full capacity and competence to abide by
                the terms, conditions, representations, and warranties outlined
                in this policy related to the purchase of our services.
              </p>
            </div>
          </div>
          <div className="mt-[50px]">
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
            <div className="mt-[40px] flex items-center justify-center">
              <img
                className="mr-4 h-[354px] w-[354px]"
                src="/assets/images/events_page/events1.jpg"
                alt="events img"
              />
              <img
                className="mr-4 h-[354px] w-[354px]"
                src="/assets/images/events_page/events2.jpg"
                alt="events img"
              />
              <img
                className="h-[354px] w-[354px]"
                src="/assets/images/events_page/events3.jpg"
                alt="events img"
              />
            </div>
          </div>
          <div className="mt-[50px]">
            <h1 className="page-subhead text-center text-[13px] sm:text-[22px] lg:text-[26px] xl:text-[34px]">
              Fill in the details
            </h1>
            <div className="mt-[20px]">
              {forms.map((form, index) => (
                <div key={index}>
                  <p className="page-subhead text-[24px] mt-[50px]">Person {index + 1}</p>
                  <form className={`${styles.formWrap} w-full`}>
                    <TextInput
                      label="Name"
                      mt={15}
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
                    <br />
                    <TextInput
                      label="Phone Number"
                      mt={15}
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
                    <br />
                    <TextInput
                      label="Email"
                      mt={15}
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
              <div className="mt-[20px] flex items-center justify-center">
                <button
                  className="h-[32px] w-[32px] rounded-full border border-black pt-[2px] text-center"
                  onClick={removeForm}
                >
                  -
                </button>
                <h1 className="mx-[10px] text-[28px]">{forms.length}</h1>
                <button
                  className="h-[32px] w-[32px] rounded-full border border-black pt-[2px] text-center"
                  onClick={addForm}
                >
                  +
                </button>
              </div>
              <div className="mx-[150px] mt-[40px] ">
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
              <div className="mt-[30px]">
                <h1 className="content-neue-medium text-center text-[34px]">
                  Total Amount :{" "}
                  <span className="page-subhead text-[34px]">
                    INR {forms.length * 1499}.00
                  </span>
                </h1>
              </div>
              <div className="mb-[65px] mt-[10px] items-center justify-center text-center  sm:flex lg:gap-3  xl:gap-5">
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
