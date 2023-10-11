import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, Text, Flex, Button, Divider } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const GaleriSlider = () => {
  const sliderRef = useRef(null);
  const images = [
    { url: '/images/galeri/g-1.png', title: 'Image 1' },
    { url: '/images/galeri/g-2.png', title: 'Image 2' },
    { url: '/images/galeri/g-3.png', title: 'Image 3' },
    { url: '/images/galeri/g-4.png', title: 'Image 4' },
    { url: '/images/galeri/g-5.png', title: 'Image 5' },
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
    <section>
      <Divider mt="100px" orientation="horizontal" borderWidth="1px" borderColor={'blue.500'} />

      <Box overflow="hidden" maxWidth="800px" margin="0 auto">
        <Text fontWeight="bold" textAlign="center" fontSize="2xl" mt={10} mb={5}>
          GALERI
        </Text>
        <Slider ref={sliderRef} {...settings} initialSlide={currentSlide}>
          {images.map((image, index) => (
            <Box
              key={index}
              p={2}
              style={{
                width: '300px',
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Image
                src={image.url}
                alt={`Image ${index}`}
                opacity={index === currentSlide ? 1 : 0.5}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Slider>
        <Flex justifyContent="center" mt={4}>
          <Button onClick={goToPrevSlide} mr={2}>
            <ChevronLeftIcon />
          </Button>
          <Button onClick={goToNextSlide}>
            <ChevronRightIcon />
          </Button>
        </Flex>
      </Box>
    </section>
  );
};

export default GaleriSlider;
