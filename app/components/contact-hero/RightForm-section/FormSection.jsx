'use client'
import React, { useState } from "react";
import { useForm, isEmail, hasLength, matches } from "@mantine/form";
import { Button, TextInput, NumberInput } from "@mantine/core";
import { Textarea } from "@mantine/core";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Name must be 2-10 characters long"),
      email: isEmail("Invalid email"),
      phoneNumber: matches(
        /^(\+\d{1,3}[-\.\s]??)?\d{10}$/,
        "Enter a valid phone number",
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
    <div className="col-span-2 mb-5 w-[75%]">
      <form className={styles.formWrap} onSubmit={form.onSubmit(() => {})}>
        <TextInput
          label="Name"
          placeholder="Your name here"
          classNames={{
            input: styles.transparentInput,
            label: styles.inputLabel
          }}
          withAsterisk
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <br />
        <TextInput
          label="Phone Number"
          placeholder="Your phone number here"
          classNames={{
            input: styles.transparentInput,
            label: styles.inputLabel
          }}
          withAsterisk
          key={form.key("phoneNumber")}
          {...form.getInputProps("phoneNumber")}
          inputMode="numeric"
        />
        <br />
        <TextInput
          label="Email"
          placeholder="Your email here"
          classNames={{
            input: styles.transparentInput,
            label: styles.inputLabel
          }}
          withAsterisk
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <br />
        <Textarea
          label="Message"
          resize="vertical"
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          classNames={{
            input: styles.transparentInput,
            label: styles.inputLabel
          }}
          placeholder="Your message here"
          rows={messageRows}
        />
        <br />
        <Button
          className={styles.formButton}
          color="black.0"
          type="submit"
          mt="sm"
          fz={16}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
