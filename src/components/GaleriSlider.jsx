import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, Text, Flex, Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const GaleriSlider = () => {
  const sliderRef = useRef(null);
  const images = [
    { url: '/images/ebeh.png', title: 'Image 1' },
    { url: '/images/ebeh.png', title: 'Image 2' },
    { url: '/images/ebeh.png', title: 'Image 3' },
    { url: '/images/ebeh.png', title: 'Image 4' },
    { url: '/images/ebeh.png', title: 'Image 5' },
  ];
  const [currentSlide, setCurrentSlide] = useState(Math.floor(images.length / 2)); 

  
  useEffect(() => {
    sliderRef.current.slickGoTo(currentSlide);
  }, [currentSlide]);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 >= 0 ? prevSlide - 1 : images.length - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1 < images.length ? prevSlide + 1 : 0));
  };

  return (
    <Box>
    <Text fontWeight={'bold'} textAlign={'center'} fontSize={'2xl'} mt={10} mb={5}>GALERI</Text>
      <Slider ref={sliderRef} {...settings} initialSlide={currentSlide}>
        {images.map((image, index) => (
          <Box key={index} p={2}>
            <Image
              src={image.url}
              alt={`Image ${index}`}
              opacity={index === currentSlide ? 1 : 0.5}
              boxShadow={index === currentSlide ? 'lg' : 'none'}
            />
          </Box>
        ))}
      </Slider>
      <Flex justifyContent="center" mt={4}>
        <Button onClick={goToPrevSlide} mr={2}>
          <ChevronLeftIcon/>
        </Button>
        <Button onClick={goToNextSlide}>
          <ChevronRightIcon/>
        </Button>
      </Flex>
    </Box>
  );
};

export default GaleriSlider;
