"use client";
import { useMantineTheme, rem } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { testimonials } from "@/constants/constants";
import { useMediaQuery } from "@mantine/hooks";
import TestimonialCard from "../testimonial-card/TestimonialCard";
import "@mantine/carousel/styles.css";
import styles from "./Testimonials.module.css";
import { useState } from "react";

const Testimonials = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = testimonials.map((item, index) => (
    <Carousel.Slide key={index} className="flex justify-center items-center">
      <TestimonialCard {...item} isActive={index === activeIndex} />
    </Carousel.Slide>
  ));
  

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        withIndicators
        loop
        slideSize={{ base: "33%", sm: "33%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="center"
        slidesToScroll={mobile ? 1 : 1}
        onSlideChange={handleSlideChange}
        classNames={styles}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default Testimonials;
