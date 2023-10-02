import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <Box mb={10} position="relative" overflow={"hidden"}>
      <Slider {...settings}>
        <Box position="relative">
          <Image
            style={{ filter: "grayscale(30%)" }}
            height="350px"
            width="100%"
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
        <Box>
          {/* <Image
            style={{ filter: "grayscale(30%)" }}
            height="350px"
            width="100%"
            src="/images/sosialisasi.webp"
            alt="Image 1"
        /> */}
        </Box>
        <Box>
          <Image src="image3.jpg" alt="Image 3" />
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
