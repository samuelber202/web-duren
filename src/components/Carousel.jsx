import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Button, useMediaQuery } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box position="relative" overflow="hidden">
      <Slider ref={sliderRef} {...settings}>
      <Box
          position="relative"
          height={isSmallerScreen ? "300px" : "700px" }
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            style={{ filter: "grayscale(30%)", objectFit:'cover'}}
            src="/images/banner.png"
            alt="Image 1"
          />
          <Box
            position="absolute"
            bottom="5"
            left="10"
            color="white"
            fontWeight="bold"
            fontSize="12px"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            padding="10px"
            borderRadius="5px"
          >
            <span style={{ display: "block" }}>Selamat Datang</span>
            <span style={{ display: "block", fontWeight: "normal" }}>
              Website Desa Duren Karawang
            </span>
          </Box>
        </Box>

        <Box
          position="relative"
          height={isSmallerScreen ? "300px" : "700px" }
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            style={{ filter: "grayscale(30%)", objectFit: "cover" }}
            width="100%"
            height="100%"
            src="/images/default-slides.png"
            alt="Image 1"
          />
          <Box
            position="absolute"
            bottom="5"
            left="10"
            color="white"
            fontWeight="bold"
            fontSize="12px"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            padding="10px"
            borderRadius="5px"
          >
            <span style={{ display: "block" }}>Selamat Datang</span>
            <span style={{ display: "block", fontWeight: "normal" }}>
              Website Desa Duren Karawang
            </span>
          </Box>
        </Box>

        <Box
          position="relative"
          height={isSmallerScreen ? "300px" : "700px" }
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            style={{ filter: "grayscale(30%)", objectFit: "cover" }}
            width="100%"
            height="100%"
            src="/images/sosialisasi.webp"
            alt="Image 2"
          />
          <Box
            position="absolute"
            bottom="5"
            left="10"
            color="white"
            fontWeight="bold"
            fontSize="12px"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            padding="10px"
            borderRadius="5px"
          >
            <span style={{ display: "block" }}>Selamat Datang</span>
            <span style={{ display: "block", fontWeight: "normal" }}>
              Website Desa Duren Karawang
            </span>
          </Box>
        </Box>
      </Slider>

      <Button
        onClick={prevSlide}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        onClick={nextSlide}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
      >
        <ChevronRightIcon />
      </Button>
    </Box>
  );
};

export default Carousel;
