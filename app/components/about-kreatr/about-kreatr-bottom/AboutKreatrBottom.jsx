'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KreatrAbout from "../../../../public/assets/images/about-kreatr/Kreatr_About.svg";
import { peopleAtKreatr } from "@/constants/constants";
import styles from "./AboutKreatrBottom.module.css"; // Make sure to create a corresponding CSS module

const AboutKreatrBottom = () => {
  const [flippedIndices, setFlippedIndices] = useState({});

  const handleFlip = (index) => {
    setFlippedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="mb-[40px]">
      <div>
        <h1 className="page-heading text-center text-[40px] lg:text-[86px] xl:text-[96px]">
          Meet the Humans of
        </h1>
        <div className="relative h-[50px]">
          <Image
            className="absolute right-[36%] top-[-32%] h-[37px] w-[114px] rotate-[-4deg] lg:right-[42%] lg:top-[-78%] lg:h-[70px] lg:w-[238px] xl:h-[80px] xl:w-[248px]"
            src={KreatrAbout}
            alt="about kreatr image"
          />
        </div>
      </div>
      <div className="flex sm:mt-[40px] flex-col justify-center items-center content-neue xl:leading-[36px] lg:leading-[32px] leading-[18px] xl:text-[30px] lg:text-[26px] text-[14px]">
        <p>
          {`PS: Can't figure out what their descriptions mean?`} {`Here's a link to
          the`} <Link className="dictonary-link" href="https://www.dictionary.com/">dictionary!</Link>
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {peopleAtKreatr.map((item, index) => (
          <div key={index} className={styles.cardContainer} onClick={() => handleFlip(index)}>
            <div className={`${styles.card} ${flippedIndices[index] ? styles.flipped : ""}`}>
              <div className={styles.cardFront}>
                <Image width={321} height={385} src={`/assets/images/about-kreatr/${item.imageSrc}`} alt={item.alt} />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutKreatrBottom;
