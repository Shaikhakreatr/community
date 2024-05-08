"use client";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { Button, Group, TextInput, NumberInput } from "@mantine/core";
import styles from "./FormSection.module.css";

const FormSection = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      job: "",
      email: "",
      favoriteColor: "",
      age: 18,
      phoneNumber: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      favoriteColor: matches(
        /^#([0-9a-f]{3}){1,2}$/,
        "Enter a valid hex color",
      ),
      age: isInRange(
        { min: 18, max: 99 },
        "You must be 18-99 years old to register",
      ),
      phoneNumber: matches(
        /^(\+\d{1,3}[-\.\s]??)?\d{10}$/,
        "Enter a valid phone number",
      ),
    },
  });

  return (
    <div className="col-span-2 w-[75%]">
      <form className={styles.formWrap} onSubmit={form.onSubmit(() => {})}>
        <TextInput
          label="Name"
          placeholder="Name"
          withAsterisk
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Your job"
          placeholder="Your job"
          withAsterisk
          mt="md"
          key={form.key("job")}
          {...form.getInputProps("job")}
        />
        <TextInput
          label="Your email"
          placeholder="Your email"
          withAsterisk
          mt="md"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Your favorite color"
          placeholder="Your favorite color"
          withAsterisk
          mt="md"
          key={form.key("favoriteColor")}
          {...form.getInputProps("favoriteColor")}
        />
        <NumberInput
          label="Your age"
          placeholder="Your age"
          withAsterisk
          mt="md"
          key={form.key("age")}
          {...form.getInputProps("age")}
        />
        <TextInput
          label="Your phone number"
          placeholder="Your phone number"
          withAsterisk
          mt="md"
          key={form.key("phoneNumber")}
          {...form.getInputProps("phoneNumber")}
          inputMode="numeric"
        />
        <Button
          className={styles.formButton}
          color="black.0"
          type="submit"
          mt="sm"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
