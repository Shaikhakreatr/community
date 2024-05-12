"use client";

import React from "react";
import { Accordion } from "@mantine/core";
import styles from "./AccordianSection.module.css";

import { leftAccordion } from "@/constants/constants";
import { rightAccordion } from "@/constants/constants";

const AccordianSection = () => {
  console.log(leftAccordion);

  const leftItems = leftAccordion.map((item) => (
    <Accordion.Item 
    className={`${styles.accordionBox} sm:top-0`}
      classNames={{ accordionBox: styles.accordionPanel }}
      p={10}
      m={20}
      key={item.title}
      value={item.title}
    >
      <Accordion.Control className={styles.controlBox}>
        {item.title}
      </Accordion.Control>
      <Accordion.Panel
        className={styles.accordionPanel}
        classNames={{ content: styles.accordionContent }}
      >
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  const rightItems = rightAccordion.map((item) => (
    <Accordion.Item
      className={styles.accordionBox}
      p={10}
      m={20}
      key={item.title}
      value={item.title}
    >
      <Accordion.Control className={styles.controlBox}>
        {item.title}
      </Accordion.Control>
      <Accordion.Panel
        className={styles.accordionPanel}
        classNames={{ content: styles.accordionContent }}
      >
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div className="my-10 justify-center gap-1 lg:gap-32 grid grid-cols-1 sm:grid-cols-2">
      <Accordion
        className={styles.accordionWrap}
        variant="separated"
        radius="xs"
      >
        {leftItems}
      </Accordion>
      <Accordion
        className={styles.accordionWrap}
        variant="separated"
        radius="xs"
      >
        {rightItems}
      </Accordion>
    </div>
  );
};

export default AccordianSection;
