import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import PageLayout from '../components/layouts/pageLayout';
import Card from '../components/Card';
import { Flex } from '@chakra-ui/react';
import MenuCard from '../components/MenuCard';
import Footer from '../components/Footer';
import GoogleMap from '../components/Maps';
import KegiatanWarga from '../components/KegiatanWarga';
import GaleriSlider from '../components/GaleriSlider';

function Home() {
  return (
    <>
      <PageLayout>
        
        <Navbar />
        <Carousel />
        <MenuCard/> 
        <KegiatanWarga/> 
        <GaleriSlider/>
      </PageLayout>
      <Footer/>
    </>
  );
}

export default Home;
