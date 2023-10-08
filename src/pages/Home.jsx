import React from "react";
import Carousel from "../components/Carousel";
import PageLayout from "../components/layouts/PageLayout";
import MenuCard from "../components/MenuCard";
import KegiatanWarga from "../components/KegiatanWarga";
import GaleriSlider from "../components/GaleriSlider";
import HomePageLayout from "../components/layouts/HomePageLayout";
import Navbar from "../components/Navbar";
import { Divider, Flex, useBreakpointValue } from "@chakra-ui/react";
import Pengumuman from "../components/Pengumuman";

function Home() {
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <section>
      <Navbar />
      <Carousel />
      <MenuCard />
      <HomePageLayout>
        <Flex
          flexDirection={isMobile ? "column" : "row"}
          gap={5}
          mt={'-60px'}
        >
          <KegiatanWarga />
          <Pengumuman />
        </Flex>

        <GaleriSlider />
      </HomePageLayout>
    </section>
  );
}

export default Home;
