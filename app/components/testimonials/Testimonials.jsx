'use client';
import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from '@mantine/core';
import classes from './Testimonials.module.css';
import '@mantine/carousel/styles.css';



const formFeild = () => {
  <div>
    <Text className={classes.category} size='xs'>
      {category}
    </Text>
    <Title order={3} className={classes.title}>
      {title}
    </Title>
  </div>;
};

function Card({ image, title, category }) {
  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      className={classes.card}
    >
      <Button variant='white' color='dark'>
        {title}
      </Button>
    </Paper>
  );
}

const data = [
  {
    title: '1.Best forests to visit in North America',
    category: 'nature',
  },
  {
    title: '2.Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    title: '3.Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    title: '4.Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    title: '5.Best places to visit this winter',
    category: 'tourism',
  },
  {
    title: '6.Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];
export default function CustomCarousel() {
  const theme = useMantineTheme();
  const xlScreen = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);
  const totalSlides = data.length;
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const handlePrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? totalSlides - 1 : activeIndex - 1);
  };

  const handleNextSlide = () => {
    setActiveIndex(activeIndex === totalSlides - 1 ? 0 : activeIndex + 1);
  };

  const slides = data.map((item, index) => (
    <Carousel.Slide
      key={item.title}
      className={`${
        activeIndex === index ? classes.activeSlide : classes.slide
      }`}
    >
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div className='relative'>
      <Carousel

        height={400}
        slideSize='33.3%'
        slideGap='xl'
        align='center'
        slidesToScroll={1}
        className='grid col-span-5'
        onSlideChange={handleSlideChange}
        initialSlide={activeIndex}
      >
        {slides}
      </Carousel>
    </div>
  );
}