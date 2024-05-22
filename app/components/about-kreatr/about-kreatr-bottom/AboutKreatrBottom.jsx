"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import KreatrAbout from "../../../../public/assets/images/about-kreatr/Kreatr_About.svg";
import YouImage from "../../../../public/assets/images/about-kreatr/you-img.svg";
import Abdul from "../../../../public/assets/images/about-kreatr/abdul.svg";
import Megha from "../../../../public/assets/images/about-kreatr/abdul.svg";
import Jevin from "../../../../public/assets/images/about-kreatr/abdul.svg";
import Nilanka from "../../../../public/assets/images/about-kreatr/abdul.svg";
import Chanchal from "../../../../public/assets/images/about-kreatr/abdul.svg";
import Prithvi from "../../../../public/assets/images/about-kreatr/prithvi.png";
import Aava from "../../../../public/assets/images/about-kreatr/abdul.svg";
import Arnav from "../../../../public/assets/images/about-kreatr/abdul.svg";
import { peopleAtKreatr } from "@/constants/constants";
import styles from "./AboutKreatrBottom.module.css";

const AboutKreatrBottom = () => {


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
      <div className="content-neue flex flex-col items-center justify-center text-[14px] leading-[18px] sm:mt-[40px] lg:text-[26px] lg:leading-[32px] xl:text-[30px] xl:leading-[36px]">
        <p className="text-center">
          {`PS: Can't figure out what their descriptions mean?`}
          <br />{" "}
          {`Here's a link to
          the`}{" "}
          <Link className="dictonary-link" href="https://www.dictionary.com/">
            dictionary!
          </Link>
        </p>
      </div>
      <div  className=" mt-[100px]">
        <div className="flex justify-center items-center ">
          <div className="mr-[50px] image-card  relative bg-red-400 rounded-[10px] lg:h-[239px] lg:w-[291px] xl:h-[289px] xl:w-[321px]">
            <Image className="absolute h-[360px] top-[-36%] left-[5%] w-[300px]" src={Abdul} alt="abdul image" />
          </div>
          <div className="mr-[50px] image-card relative bg-red-400 rounded-[10px] lg:h-[239px] lg:w-[291px] xl:h-[289px] xl:w-[321px]">
            <Image className="absolute h-[360px] top-[-36%] left-[5%] w-[300px]" src={Prithvi} alt="abdul image" />
          </div>
          <div className="mr-[50px] image-card relative bg-red-400 rounded-[10px] lg:h-[239px] lg:w-[291px] xl:h-[289px] xl:w-[321px]">
            <Image className="absolute h-[360px] top-[-36%] left-[5%] w-[300px]" src={Abdul} alt="abdul image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKreatrBottom;
