import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Slider {...settings}>
        <Box>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Image src="/images/ebeh.png" alt="Image 1" />
          </div>
        </Box>
        <Box>
          <Image src="image2.jpg" alt="Image 2" />
        </Box>
        <Box>
          <Image src="image3.jpg" alt="Image 3" />
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
