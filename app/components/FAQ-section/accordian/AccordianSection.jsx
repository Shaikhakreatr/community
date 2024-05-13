"use client";

import React from "react";
import { Accordion } from "@mantine/core";
import styles from "./AccordianSection.module.css";

import { leftAccordion } from "@/constants/constants";
import { rightAccordion } from "@/constants/constants";

const AccordianSection = () => {
  console.log(leftAccordion);

  const leftItems = leftAccordion.map((item) => (
    <div className="sm:mb-[14px]">
      <Accordion.Item 
    className={`${styles.accordionBox}`}
      classNames={{ accordionBox: styles.accordionPanel }}
      key={item.title}
      value={item.title}
      
    >
      <Accordion.Control className={styles.controlBox1}>
        {item.title}
      </Accordion.Control>
      <Accordion.Panel
        className={styles.accordionPanel}
        classNames={{ content: styles.accordionContent }}
      >
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
    </div>
    
  ));
  const rightItems = rightAccordion.map((item) => (
    <div className="sm:mb-3">
      <Accordion.Item
      className={styles.accordionBox}
      key={item.title}
      value={item.title}
      m={15}
      p={10}
    >
      <Accordion.Control className={styles.controlBox2}>
        {item.title}
      </Accordion.Control>
      <Accordion.Panel
        className={styles.accordionPanel}
        classNames={{ content: styles.accordionContent }}
      >
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
    </div>
  ));
  return (
    <div className="my-10 justify-center xl:mx-16 lg:mx-[3rem] gap-1 xl:gap-[5rem] lg:gap-[2rem] grid grid-cols-1 sm:grid-cols-2">
      <Accordion
        className={styles.accordionWrap}
        variant="separated"
        radius="xs"
      >
        {leftItems}
      </Accordion>
      <Accordion
        className={styles.accordionWrap2}
        variant="separated"
        radius="xs"
      >
        {rightItems}
      </Accordion>
    </div>
  );
};

export default AccordianSection;
