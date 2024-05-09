"use client";
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

  return (
    <div className="col-span-2 w-[75%] mb-5">
      <form className={styles.formWrap} onSubmit={form.onSubmit(() => {})}>
        <label>Name<span className="text-red-500 text-18">*</span></label>
        <TextInput
          placeholder="Your name here"
          className={styles.formInput}
          variant="unstyled"
          withAsterisk
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <br />
        <label>Phone Number<span className="text-red-500  text-18">*</span></label>
        <TextInput
          placeholder="Your phone number here"
          className={styles.formInput}
          variant="unstyled"
          withAsterisk
          key={form.key("phoneNumber")}
          {...form.getInputProps("phoneNumber")}
          inputMode="numeric"
        />
        <br />
        <label>Email<span className="text-red-500  text-18">*</span></label>
        <TextInput
          placeholder="Your email here"
          className={styles.formInput}
          variant="unstyled"
          withAsterisk
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <br />
        <label className=" text-18">Message</label>
        <Textarea
          resize="vertical"
          className={styles.formInput}
          variant="unstyled"
          placeholder="Your message here"
          rows={1} 
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
