"use client";
import React from "react";
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

  return (
    <div className="px-[30px] py-[35px] sm:px-[95px] sm:py-[50px]">
      <div className="">
        <h1 className="content-neue-medium text-center text-[18px] sm:text-[24px] lg:text-[28px] xl:text-[34px]">
          Fill in the details
        </h1>
      </div>
      <div>
        <div className="w-[50%] mt-[20px]">
          <label>
            Collaboration Type<span className={styles.dropDownStar}>*</span>
          </label>
          <Select
            radius={50}
            className={{
              input: styles.dropDown,
              
            }}
            classNames={{ input: styles.selectInput }}
            defaultValue="Speakers"
            data={["Speakers", "Sponsors", "Spaces", "Sellers"]}
            searchable
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
            key={form.key("senderEmail")}
            {...form.getInputProps("senderEmail")}
          />
          <br className="hidden sm:block" />
          <div className="mt-[25px] items-center justify-center text-center sm:flex lg:gap-3  xl:gap-5">
            <Button
              className={styles.formButton}
              radius={50}
              type="submit"
              mt="sm"
              fz={16}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollabrationForm;
