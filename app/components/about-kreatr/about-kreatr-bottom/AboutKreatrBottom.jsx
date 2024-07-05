"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutKreatrBottom.module.css";

const AboutKreatrBottom = () => {
  const [flippedIndices, setFlippedIndices] = useState({});

  const handleFlip = (index) => {
    setFlippedIndices((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setTimeout(() => {
      setFlippedIndices((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 1500);
  };

  return (
    <div className="mb-[40px] mt-[40px] lg:mt-0 xl:mt-[72px]  sm:mb-[50px] ">
      <div className="xl:mb-[42px]">
        <h1 className="page-heading text-center text-[#2A2A2A] text-[40px] lg:text-[86px] xl:text-[96px]">
          Meet the Humans of
        </h1>
        <div className="relative h-[50px]">
          <Image
            className="absolute right-[36%] top-[-32%] h-[37px] w-[114px] rotate-[-4deg] sm:left-[44%] lg:left-[41%] lg:top-[-65%] lg:h-[70px] lg:w-[238px] xl:left-[41%] xl:h-[80px] xl:w-[248px]"
            src={"/assets/images/about-kreatr/Kreatr_About.svg"}
            alt="about kreatr image"
            width={238}
            height={70}
          />
        </div>
      </div>
      <div className=" hidden flex-col mt-[44px] items-center justify-center sm:flex sm:w-[100%]">
        <div className="grid grid-cols-4 items-center justify-center sm:mt-[30px] sm:gap-[5px] lg:mt-[64px] lg:gap-[25px] xl:mt-[60px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(0)}>
            <div
              className={`${styles.card} ${flippedIndices[0] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront1}>
                <Image
                  className="absolute left-[2%] top-[-26%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[4%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Abdul.svg"}
                  alt="abdul image"
                  height={290}
                  width={250}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    Abdul RahIman
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    CO-FOUNDER
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Traveller | Change Visualiser | Astrophile | Free Spirited
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(1)}>
            <div
              className={`${styles.card} ${flippedIndices[1] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront2}>
                <Image
                  className="absolute left-[2%] top-[-26%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[4%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Megha.svg"}
                  alt="Megha image"
                  width={250}
                  height={290}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    Megha SatIsh
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    CO-FOUNDER
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Conceptualiser | Detail Freak | Leader | Gym Rat
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(2)}>
            <div
              className={`${styles.card} ${flippedIndices[2] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront3}>
                <Image
                  className="absolute left-[2%] top-[-26%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[4%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Jevin.svg"}
                  alt="Jevin image"
                  height={290}
                  width={250}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    JevIn Mary
                  </p>
                  <p className="page-subhead  position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    PROJECT MANAGER
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Colours | Cats | Quills | Cine
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(3)}>
            <div
              className={`${styles.card} ${flippedIndices[3] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront4}>
                <Image
                  className="absolute left-[2%] top-[-38%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[4%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Nilanka.svg"}
                  alt="Nilanka image"
                  height={290}
                  width={250}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] sm:leading-[20px] lg:text-[34px] lg:leading-[28px] xl:text-[40px] xl:leading-[34px]">
                    NIlanka Anna ChrIsty
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[5px] lg:text-[18px] xl:text-[22px]">
                    CONTENT EDITOR
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Cryptid | Artsy | Nerdy | Chronically Online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-center sm:mt-[30px] sm:gap-[5px] lg:mt-[60px] lg:gap-[25px] xl:mt-[60px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(4)}>
            <div
              className={`${styles.card} ${flippedIndices[4] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront5}>
                <Image
                  className="absolute left-[2%] top-[-38%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[0%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Chanchal.svg"}
                  alt="Chanchal image"
                  height={290}
                  width={250}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    Chanchal Verma
                  </p>
                  <p className="page-subhead  position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    GRAPHIC DESIGNER
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Maximalist | Fashion Enthusiast | Coffee Expert | Sanrio
                    Curator
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(5)}>
            <div
              className={`${styles.card} ${flippedIndices[5] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront6}>
                <Image
                  className="absolute left-[2%] top-[-38%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[4%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Prithvi.svg"}
                  alt="prithvi image"
                  height={290}
                  width={250}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    PrIthvI Charan R
                  </p>
                  <p className="page-subhead  position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    GRAPHIC DESIGNER
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Gym Rat | Sports Junkie | Biophilic | Kind
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(6)}>
            <div
              className={`${styles.card} ${flippedIndices[6] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront7}>
                <Image
                  className="absolute left-[2%] top-[-38%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[4%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Aava.svg"}
                  alt="aava image"
                  height={290}
                  width={250}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    Aava Anna WIlson
                  </p>
                  <p className="page-subhead  position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    GRAPHIC DESIGNER
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Dogs | Books | Cakes | Creative
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(7)}>
            <div
              className={`${styles.card} ${flippedIndices[7] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront8}>
                <Image
                  className="absolute left-[2%] top-[-38%] sm:top-[-26%] sm:h-[150px] sm:w-[200px] lg:left-[4%] lg:top-[-32%] lg:h-[220px] lg:w-[250px] xl:left-[1%] xl:top-[-20%] xl:h-[228px] xl:w-[300px]"
                  src={"/assets/images/about-kreatr/Arnav.svg"}
                  alt="arnav image"
                  height={290}
                  width={250}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] sm:leading-[20px] lg:text-[34px] lg:leading-[28px] xl:text-[40px] xl:leading-[34px]">
                    Arnav Kulshrestha
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[5px] lg:text-[18px] xl:text-[22px]">
                    DEVELOPER
                  </p>
                  <p className="content-neue text-[8px] leading-[10px] sm:text-[14px] sm:leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[22px] xl:leading-[28px]">
                    Scintillating | Quick-Witted | Coder | Driven
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4  sm:mt-[30px] sm:gap-[5px] lg:mt-[60px] lg:gap-[25px] xl:mt-[60px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(8)}>
            <div
              className={`${styles.card} ${flippedIndices[8] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront9}>
                <Image
                  className="absolute left-[2%] top-[-38%] h-[103px] w-[103px] sm:left-[0%] sm:top-[-12%] sm:h-[130px] sm:w-[160px] lg:left-[6%] lg:top-[-10%] lg:h-[180px] lg:w-[200px] xl:left-[0%] xl:top-[-12%] xl:h-[200px] xl:w-[264px]"
                  src={"/assets/images/about-kreatr/you-img.svg"}
                  alt="you image"
                  height={200}
                  width={200}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className=" page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px] ">
                    THIS COULD BE YOU
                  </p>
                  <div className="flex items-center justify-center">
                    <Link href="/careers">
                      <div className="page-subhead join-team-btn mt-[10px] flex h-[30px] w-[132px] items-center justify-center rounded-[30px] text-[8px] sm:h-[30px] sm:w-[132px] sm:text-[14px] lg:h-[38px] lg:w-[162px] lg:text-[16px]  xl:h-[44px]  xl:w-[192px]  xl:text-[18px] ">
                        Join our team
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex w-[100%] flex-col items-center justify-center sm:hidden ">
        <div className="mt-[28px] flex items-center justify-center gap-[4px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(0)}>
            <div
              className={`${styles.card} ${flippedIndices[0] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront1}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[145px] w-[120px]"
                  src={"/assets/images/about-kreatr/Abdul.svg"}
                  alt="abdul image"
                  height={145}
                  width={120}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px]">Abdul RahIman</p>
                  <p className="page-subhead position-people text-[8px] ">
                    CO-FOUNDER
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(1)}>
            <div
              className={`${styles.card} ${flippedIndices[1] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront2}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[144px] w-[120px] "
                  src={"/assets/images/about-kreatr/Megha.svg"}
                  alt="Megha image"
                  height={145}
                  width={120}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] ">Megha SatIsh</p>
                  <p className="page-subhead position-people text-[8px] ">
                    CO-FOUNDER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[28px] flex items-center justify-center gap-[4px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(2)}>
            <div
              className={`${styles.card} ${flippedIndices[2] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront3}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[136px] w-[109px] "
                  src={"/assets/images/about-kreatr/Jevin.svg"}
                  alt="Jevin image"
                  height={136}
                  width={109}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    JevIn Mary
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    PROJECT MANAGER
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(3)}>
            <div
              className={`${styles.card} ${flippedIndices[3] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront4}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[136px] w-[109px]"
                  src={"/assets/images/about-kreatr/Nilanka.svg"}
                  alt="Nilanka image"
                  height={136}
                  width={109}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] leading-[17px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    NIlanka Anna ChrIsty
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[5px] lg:text-[18px] xl:text-[22px]">
                    CONTENT EDITOR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[28px] flex items-center justify-center gap-[4px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(4)}>
            <div
              className={`${styles.card} ${flippedIndices[4] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront5}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[142px] w-[112px]"
                  src={"/assets/images/about-kreatr/Chanchal.svg"}
                  alt="Chanchal image"
                  height={142}
                  width={112}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] leading-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    Chanchal Verma
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    GRAPHIC DESIGNER
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(5)}>
            <div
              className={`${styles.card} ${flippedIndices[5] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront6}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[136px] w-[112px] "
                  src={"/assets/images/about-kreatr/Prithvi.svg"}
                  alt="prithvi image"
                  height={136}
                  width={112}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] leading-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    PrIthvI Charan R
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    GRAPHIC DESIGNER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[28px] flex items-center justify-center gap-[4px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(6)}>
            <div
              className={`${styles.card} ${flippedIndices[6] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront7}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[136px] w-[112px]"
                  src={"/assets/images/about-kreatr/Aava.svg"}
                  alt="aava image"
                  height={136}
                  width={112}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] leading-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    Aava Anna WIlson
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[-6px] lg:text-[18px] xl:text-[22px]">
                    GRAPHIC DESIGNER
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer} onClick={() => handleFlip(7)}>
            <div
              className={`${styles.card} ${flippedIndices[7] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront8}>
                <Image
                  className="absolute left-[12%] top-[-26%] h-[142px] w-[112px]"
                  src={"/assets/images/about-kreatr/Arnav.svg"}
                  alt="arnav image"
                  height={142}
                  width={112}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className="page-heading text-[16px] leading-[17px] sm:text-[20px] lg:text-[34px] xl:text-[40px]">
                    Arnav Kulshrestha
                  </p>
                  <p className="page-subhead position-people text-[8px] sm:text-[14px] lg:mt-[5px] lg:text-[18px] xl:text-[22px]">
                    DEVELOPER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[28px] grid grid-cols-2 gap-[4px]">
          <div className={styles.cardContainer} onClick={() => handleFlip(8)}>
            <div
              className={`${styles.card} ${flippedIndices[8] ? styles.flipped : ""}`}
            >
              <div className={styles.cardFront9}>
                <Image
                  className="absolute left-[10%] top-[-28%] h-[150px] w-[120px]"
                  src={"/assets/images/about-kreatr/you-img.svg"}
                  alt="you image"
                  height={100}
                  width={100}
                />
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardBackContent}>
                  <p className=" page-heading text-[16px] leading-[16px] sm:text-[20px] lg:text-[34px] xl:text-[40px] ">
                    THIS COULD BE YOU
                  </p>
                  <div className="flex items-center justify-center">
                    <Link href="/careers">
                      <div className="page-subhead join-team-btn pointer-events-auto mt-[8px] h-[20px] w-[70px] rounded-[30px]  pt-[4px] text-[8px]  sm:text-[14px]  lg:text-[16px]  xl:text-[18px] ">
                        Join our team
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-neue hidden flex-col xl:mt-[72px] xl:mb-[72px] lg:my-[64px] sm:my-[40px] items-center justify-center text-[#2A2A2A] text-[14px] leading-[18px] sm:flex lg:mt-[64px] lg:text-[18px] lg:leading-[22px] xl:text-[22px] xl:leading-[26px]">
        <p className="text-center">
          {`PS: Can't figure out what their descriptions mean?`}
          <br /> {`Here's a link to the`}{" "}
          <Link
            className="underline text-blue-800"
            href="https://www.dictionary.com/"
            target="_blank"
            rel="noreferrer"
          >
            dictionary!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AboutKreatrBottom;
