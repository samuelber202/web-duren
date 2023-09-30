import React from "react";
import Carousel from "../components/Carousel";
import PageLayout from "../components/layouts/PageLayout";
import Card from "../components/Card";
import { Flex } from "@chakra-ui/react";
import MenuCard from "../components/MenuCard";
import GoogleMap from "../components/Maps";
import KegiatanWarga from "../components/KegiatanWarga";
import GaleriSlider from "../components/GaleriSlider";

function Home() {
  return (
    <section>
      <PageLayout>
        <Carousel />
        <MenuCard />
        <KegiatanWarga />
        <GaleriSlider />
      </PageLayout>
    </section>
  );
}

export default Home;
