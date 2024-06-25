"use client";
import React, { useState } from "react";
import {
  useForm,
  isEmail,
  hasLength,
  matches,
  isNotEmpty,
} from "@mantine/form";
import { Select } from "@mantine/core";
import { Button, TextInput } from "@mantine/core";
import styles from "./CollabrationForm.module.css";

const CollabrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      collaborationType: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Please write your name"),
      phoneNumber: matches(
        /^(\+\d{1,3}[-.\s]??)?\d{10}$/,
        "Please enter a valid phone number",
      ),
      email: isEmail("Please enter a valid email"),
      collaborationType: isNotEmpty("Please select any type"),
    },
  });

  const BACKEND_COLLABORATION_URI =
    process.env.NEXT_PUBLIC_BACKEND_COLLABORATION_URI;

  const sendFormData = async (data) => {
    console.log(data);
    if (BACKEND_COLLABORATION_URI) {
      try {
        const response = await fetch(BACKEND_COLLABORATION_URI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          console.log("Data sent successfully");
          setSubmitted(true);
          form.reset();
        } else {
          throw new Error("Failed to send data");
        }
      } catch (error) {
        console.error("Error sending data:", error);
      }
    } else {
      console.error("BACKEND_COLLABORATION_URI is not defined");
    }
  };

  return (
    <div className="px-[30px] py-[35px] lg:px-[95px] lg:py-[50px]">
      <div className="lg:mt-[-8px]">
        <h1 className="content-neue-medium text-center text-[18px] sm:text-[24px] lg:text-[28px] xl:text-[34px]">
          Fill in the details
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center sm:block">
        <div className="mt-[20px] w-[100%] lg:mb-[25px] lg:w-[50%]">
          <label className="content-neue text-[16px] sm:text-[18px]">
            Collaboration Type<span className={styles.dropDownStar}>*</span>
          </label>
          <Select
            radius={50}
            mt={5}
            className={{
              input: styles.dropDown,
              error: styles.dropDownError,
            }}
            classNames={{ input: styles.selectInput }}
            placeholder="Choose type"
            data={["Speakers", "Sponsors", "Spaces", "Sellers"]}
            {...form.getInputProps("collaborationType")}
          />
        </div>
      </div>
      <div className="flex items-center justify-center sm:block">
        <form
          className={`${styles.formWrap} w-full`}
          onSubmit={form.onSubmit((values) => {
            sendFormData(values);
          })}
        >
          <TextInput
            label="Name"
            mt={13}
            radius={50}
            placeholder="Your name here"
            classNames={{
              input: styles.transparentInput,
              label: styles.inputLabel,
              error: styles.inputError,
            }}
            withAsterisk
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <br className="hidden lg:block" />
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
            key={form.key("phoneNumber")}
            {...form.getInputProps("phoneNumber")}
            inputMode="numeric"
          />
          <br className="hidden lg:block" />
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
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <br className="hidden lg:block" />
          <div className="mt-[25px] items-center text-center sm:mt-[10px]  sm:flex lg:mt-[25px] lg:gap-3  xl:gap-5">
            <Button
              className={styles.formButton}
              radius={50}
              type="submit"
              mt="sm"
              fz={16}
            >
              Submit
            </Button>
            {submitted && (
              <p className={styles.sentMessage}>
                Sent! We will reach out to you soon.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollabrationForm;
