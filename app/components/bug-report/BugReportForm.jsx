"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
    useForm,
    isEmail,
    hasLength,
    matches,
    isNotEmpty,
  } from "@mantine/form";
  import { Button, TextInput, Textarea } from "@mantine/core";
//   import styles from "./FormSection.module.css";

const BugReportForm = () => {
  const [formToggle, setFormToggle] = useState(false);

  const handleClick = () => {
    setFormToggle(!formToggle);
  };

  return (
    <div>
      <div className="" onClick={handleClick}>
        <Image
          src="/assets/images/home_page/bug-black.svg"
          width={50}
          height={50}
          className="bug-color-change"
          alt="bug image"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        {formToggle ? (
          <div className="h-[400px] w-[500px] bg-[#FFFDEE] text-[20px]">
            <form
        className={`${styles.formWrap} w-full`}
        onSubmit={form.onSubmit((values) => {
         sendFormData(values)
         
        })}
      >
        <TextInput
          label="Name"
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
        <br />
        <TextInput
          label="Phone Number"
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
        <br />
        <TextInput
          label="Email"
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
        <br />
        <Textarea
          label="Message"
          radius={50}
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          classNames={{
            input: styles.transparentInput,
            label: styles.inputLabel,
            error: styles.inputError,
          }}
          placeholder="Your message here"
          rows={messageRows}
          key={form.key("message")}
          {...form.getInputProps("message")}
        />
        <br />
        <div className="items-center text-center sm:flex lg:gap-3  xl:gap-5">
          <Button
            className={styles.formButton}
            radius={50}
            color="black.0"
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BugReportForm;
