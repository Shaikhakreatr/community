import { Paper, Text, Title, Button } from "@mantine/core";
import Image from "next/image";
import React from "react";
import styles from "./TestimonialCard.module.css";
import Star from '../../../public/assets/images/events_page/star-img.svg'
import Commas from '../../../public/assets/images/events_page/inverted-commas.svg'

const TestimonialCard = ({ peoples, description, isActive }) => {
  return (
    <div
    className={`${
      isActive ? `${styles.card} ${styles.cardCenter}` : styles.card
    } shadow-md pt-12 rounded-md bg-white`}
    >
      <Image src={Star} alt="star image" />
      <p>{description}</p>
      <p>{peoples}</p>
      <div>
        <Image src={Commas} alt="inverted commas images" />
      </div>
    </div>
  );
};

export default TestimonialCard;
