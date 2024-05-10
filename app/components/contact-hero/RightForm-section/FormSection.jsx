"use client"
import React, { useState } from "react";
import { useForm, isEmail, hasLength, matches, isNotEmpty } from "@mantine/form";
import { Button, TextInput, Textarea } from "@mantine/core";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const [submitted, setSubmitted] = useState(false); // State to track form submission status
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Please write your name"),
      email: isEmail("Please enter a valid email"),
      message: isNotEmpty("Please write your message"),
      phoneNumber: matches(
        /^(\+\d{1,3}[-.\s]??)?\d{10}$/,
        "Please enter a valid phone number",
      ),
    },
  });

  const [messageRows, setMessageRows] = useState(1);

  const handleTextareaFocus = () => {
    setMessageRows(3);
  };

  const handleTextareaBlur = () => {
    setMessageRows(1);
  };

  return (
    <div className=" col-span-2 z-30 mb-5 lg:w-[75%] sm:w-[115%] w-[75%]">
      <form className={styles.formWrap} onSubmit={form.onSubmit(() => {setSubmitted(true)
        console.log("submitted");;})}>
        <TextInput
          label="Name"
          radius={50}
          placeholder="Your name here"
          classNames={{
            input: styles.transparentInput,
            label: styles.inputLabel,
            error: styles.errorText,
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
            error: styles.errorText,
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
            error: styles.errorText,
          }}
          withAsterisk
          key={form.key("email")}
          {...form.getInputProps("email")}
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
            error: styles.errorText,
          }}
          placeholder="Your message here"
          rows={messageRows}
          key={form.key("message")}
          {...form.getInputProps("message")}
        />
        <br />
        <div className="sm:flex xl:gap-5 lg:gap-3 text-center  items-center">
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
            <p className={styles.sentMessage}>Sent! We will reach out to you soon.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSection;
