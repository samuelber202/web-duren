import React from "react";
import { Box, Image, Button, useMediaQuery } from "@chakra-ui/react";

const Carousel = () => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Box position="relative" overflow="hidden">
      <Box
        position="relative"
        height={isSmallerScreen ? "230px" : "700px"}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          style={{ filter: "grayscale(30%)", objectFit: "cover" }}
          src="/images/banner.png"
          alt="Image 1"
        />
        <Box
          position="absolute"
          bottom="5"
          left="5"
          color="white"
          fontWeight="bold"
          fontSize={isSmallerScreen ? "5px" : "12px"}
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

     
    </Box>
  );
};

export default Carousel;
