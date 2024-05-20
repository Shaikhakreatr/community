import { Paper, Text, Title, Button } from "@mantine/core";
import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ title, description, isActive }) => {
  return (
    <div
    className={`${
      isActive ? `${styles.card} ${styles.cardRed}` : styles.card
    } shadow-md pt-12 rounded-md bg-white`}
    >
      <p>{title}</p>
    </div>
  );
};

export default TestimonialCard;
