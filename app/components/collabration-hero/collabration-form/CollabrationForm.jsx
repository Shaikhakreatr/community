"use client";
import React,{useState} from "react";
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
    },
  });
  const sendFormData = async (values) => {
    try {
      const response = await fetch(
        "https://l6qi6kuo7c.execute-api.ap-south-1.amazonaws.com/dev/collaboration_request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="px-[30px] py-[35px] lg:px-[95px] lg:py-[50px]">
      <div className="">
        <h1 className="content-neue-medium text-center text-[18px] sm:text-[24px] lg:text-[28px] xl:text-[34px]">
          Fill in the details
        </h1>
      </div>
      <div>
        <div className="mt-[20px] w-[50%]">
          <label>
            Collaboration Type<span className={styles.dropDownStar}>*</span>
          </label>
          <Select
            radius={50}
            className={{
              input: styles.dropDown,
            }}
            classNames={{ input: styles.selectInput }}
            placeholder="Choose type"
            data={["Speakers", "Sponsors", "Spaces", "Sellers"]}

            {...form.getInputProps("collaborationType")}
          />
        </div>
      </div>
      <div className="">
        <form
          className={`${styles.formWrap} w-full`}
          onSubmit={form.onSubmit((values) => {
            sendFormData(values);
          })}
        >
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
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <br className="hidden sm:block" />
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
          <br className="hidden sm:block" />
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
          <br className="hidden sm:block" />
          <div className="mt-[25px] sm:mt-[10px] lg:mt-[25px] items-center  text-center sm:flex lg:gap-3  xl:gap-5">
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
