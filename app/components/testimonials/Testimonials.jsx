'use client';
import Image from 'next/image';
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

function Card({  title, people }) {
  return (
    <Paper
      shadow='md'
      className={classes.card}
    >  
        <div className='relative flex flex-col justify-center items-center max-h-[80px]'>
        <div className='flex flex-col justify-center items-center xl:mx-[150px] lg:mx-[120px] xl:mt-[-60px] lg:mt-[-60px] sm:mt-[-50px] mt-[-25px]'>
        <Image src="/assets/images/events_page/star-img.svg" height={150} width={150} className='xl:h-[150px] xl:w-[150px] lg:h-[120px] lg:w-[120px] sm:h-[100px] sm:w-[100px] h-[80px] w-[80px]' alt='star image' />
        </div>
        <div className='text-center content-neue xl:mt-[-35px] lg:mt-[-25px] mt-[-20px] px-[10px] text-[14px] leading-[20px] text-[#2A2A2A] sm:text-[16px] lg:leading-[22px] xl:leading-[26px] lg:text-[18px] xl:text-[22px]'>
        {title}
        </div>
        <div className='text-center text-[#2A2A2A] content-neue mt-[10px] px-[10px] text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px]'>
        {people}
        </div>
        <div className='absolute  xl:top-[118px] lg:right-[25px] lg:top-[110px] sm:top-[122px] sm:right-[20px] top-[120px] right-[20px]'>
          <Image src="/assets/images/events_page/inverted-commas.svg" className='xl:h-[110px] xl:w-[70px] lg:h-[70px] lg:w-[60px] sm:h-[50px] sm:w-[50px] h-[40px] w-[35px] ' width={50} height={50}  alt='comma image' />
        </div>
        </div>
    </Paper>
  );
}

const data = [
  {
    title: '"The workshop involved a lot of first-principle thinking and different variations of a concept. I liked that we talked about how even if a solution is given, it\'s not the end solution and still needs to be made execution-ready."',
    people: 'Soham Roy',
    id:1
  },
  {
    title: '"The workshop involved a lot of first-principle thinking and different variations of a concept. I liked that we talked about how even if a solution is given, it\'s not the end solution and still needs to be made execution-ready."',
    people: 'Soham Roy',
    id:1
  },
  {
    title: '"The workshop involved a lot of first-principle thinking and different variations of a concept. I liked that we talked about how even if a solution is given, it\'s not the end solution and still needs to be made execution-ready."',
    people: 'Soham Roy',
    id:1
  },
  {
    title: '"The workshop involved a lot of first-principle thinking and different variations of a concept. I liked that we talked about how even if a solution is given, it\'s not the end solution and still needs to be made execution-ready."',
    people: 'Soham Roy',
    id:1
  },
  {
    title: '"The workshop involved a lot of first-principle thinking and different variations of a concept. I liked that we talked about how even if a solution is given, it\'s not the end solution and still needs to be made execution-ready."',
    people: 'Soham Roy',
    id:1
  },
  {
    title: '"The workshop involved a lot of first-principle thinking and different variations of a concept. I liked that we talked about how even if a solution is given, it\'s not the end solution and still needs to be made execution-ready."',
    people: 'Soham Roy',
    id:1
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
        slideSize='33.3%'
        align='center'
        slidesToScroll={1}
        className='grid col-span-5 xl:h-[400px] lg:h-[300px] sm:h-[290px] h-[270px]'
        onSlideChange={handleSlideChange}
        initialSlide={activeIndex}
      >
        {slides}
      </Carousel>
    </div>
  );
}