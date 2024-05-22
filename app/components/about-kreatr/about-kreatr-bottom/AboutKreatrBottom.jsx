'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KreatrAbout from "../../../../public/assets/images/about-kreatr/Kreatr_About.svg";
import YouImage from "../../../../public/assets/images/about-kreatr/you-img.svg";
import { peopleAtKreatr } from "@/constants/constants";
import styles from "./AboutKreatrBottom.module.css"; 

const AboutKreatrBottom = () => {
  const [flippedIndices, setFlippedIndices] = useState({});
  const [isYouImageFlipped, setIsYouImageFlipped] = useState(false);

  const handleFlip = (index) => {
    setFlippedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleYouImageFlip = () => {
    setIsYouImageFlipped((prev) => !prev);
  };

  return (
    <div className="mb-[40px] mt-[40px]">
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
        <p className="text-center">
          {`PS: Can't figure out what their descriptions mean?`}<br /> {`Here's a link to
          the`} <Link className="dictonary-link" href="https://www.dictionary.com/">dictionary!</Link>
        </p>
      </div>
      <div className="flex ml-[35px] sm:ml-0 flex-wrap items-center justify-center">
        {peopleAtKreatr.map((item, index) => (
          <div key={index} className={styles.cardContainer} onClick={() => handleFlip(index)}>
            <div className={`${styles.card} ${flippedIndices[index] ? styles.flipped : ""}`}>
              <div className={styles.cardFront}>
                <Image width={300} height={250} src={`/assets/images/about-kreatr/${item.imageSrc}`} alt={item.alt} />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="name-people xl:text-[44px] text-[16px] page-heading leading-[30px] lg:text-[38px]">{item.name}</p>
                  <p className="position-people mt-[10px] page-subhead xl:text-[23px] lg:text-[21px]">{item.position}</p>
                  <p className="description-people content-neue xl:text-[22px] lg:text-[20px] leading-[24px]">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cardContainer} onClick={handleYouImageFlip}>
        <div className={`${styles.card} ${isYouImageFlipped ? styles.flipped : ""}`}>
          <div className={styles.cardFront}>
            <Image src={YouImage} width={300} height={300} alt="you img" />
          </div>
          <div className={styles.cardBack}>
            <div className={styles.cardBackContent}>
              <p className="name-people page-subhead text-[23px]">Insert ‘Role’</p>
              <p className="name-people xl:text-[44px] text-[16px] page-heading lg:text-[38px]">THIS COULD BE YOU</p>
              <div className={`${styles.btnPeople} page-subhead text-[18px] h-[44px] w-[192px]`} >Join our team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKreatrBottom;
