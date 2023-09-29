import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import PageLayout from "../components/layouts/PageLayout";
import Card from "../components/Card";
import { Flex } from "@chakra-ui/react";
import MenuCard from "../components/MenuCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <PageLayout>
        <Navbar />
        <Carousel />
        <MenuCard />
      </PageLayout>
      <Footer />
    </>
  );
}

export default Home;
