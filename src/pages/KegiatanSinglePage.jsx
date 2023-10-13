import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Flex, Heading, Box, Text, Img, Spinner, SimpleGrid, Button, Divider } from '@chakra-ui/react';
import SinglePageLayout from '../components/layouts/SinglePageLayout';
import KegiatanWarga from '../components/KegiatanWarga';
import KegiatanCard from '../components/KegiatanCard';
import { format } from 'date-fns';
import { CalendarIcon, ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getPengumuman } from '../config/redux/actions/pengumumanAction';
import { getBerita } from '../config/redux/actions/beritaAction';

function PengumumanSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [kegiatanData, setKegiatanData] = useState(null);
  const [beritaSuggestions, setBeritaSuggestions] = useState([]);


  const {getBeritaResult} = useSelector((state) => state.berita);

  useEffect(() => {
    dispatch(getBerita())
   }, [dispatch]); 
 
   useEffect(()=>{
     if(getBeritaResult){
      const filteredData = getBeritaResult.filter((item) => item.id === id);
     setKegiatanData(filteredData)
     const sortedBeritas = getBeritaResult ?? getBeritaResult.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    const latestBeritas = sortedBeritas ?? sortedBeritas.slice(0, 5);
    const filteredBeritas = latestBeritas ?? latestBeritas.filter((berita) => berita.id !== +id);
    setBeritaSuggestions(filteredBeritas)

     }
   },[getBeritaResult])


  

  

  return (
    <>
    {kegiatanData ? 
    <SinglePageLayout>
      <Flex alignItems="center" justifyContent="center">
    <Text mt={10} mb={10} fontWeight="bold" textAlign="center" fontSize="4xl">
      {kegiatanData[0].title}
    </Text>
  </Flex>

  <Flex gap={10} mt={10} direction={["column", "column", "row"]} alignItems="flex-start"> {/* Change to "flex-start" */}
    <Box flex={["1", "1", "2"]} mb={[5, 5, 0]}>
        <Text color={'blue.500'} mb={5}><CalendarIcon/>{" "}{format(new Date(kegiatanData[0].createdAt * 1000), "dd/MM/yyyy HH:mm")} | <InfoIcon/>{" "}{kegiatanData[0].author}</Text>
      <Img
        src={kegiatanData[0].image_url}
        width="full"
        height="500px"
      />
      <Text mt={10} textAlign={'justify'}>
        {kegiatanData[0].content.split('\n').map((line, index) => (
      <Text key={index}>{line}</Text>
    ))}
      </Text>
      <Text mt={10} textAlign={'justify'}>
      {kegiatanData[0].content1.split('\n').map((line, index) => (
      <Text key={index}>{line}</Text>
    ))}
      </Text>
      <Text mt={10} textAlign={'justify'}>
      {kegiatanData[0].content2.split('\n').map((line, index) => (
      <Text key={index}>{line}</Text>
    ))}
      </Text>
    </Box>
    <Box>
      <Heading color={'blue.500'} as="h2" fontSize="2xl" mb={4}>
        Pengumuman Lainnya <ChevronRightIcon/>
      </Heading>
      <Divider orientation="horizontal" borderWidth="1px" borderColor={'blue.500'}/>

      <SimpleGrid mt={5} columns={1} spacing={4}>
        {beritaSuggestions.map((berita) => (
          <KegiatanCard
            key={berita.id}
            title={berita.title}
            description={berita.description}
            date={format(new Date(berita.createdAt * 1000), "dd/MM/yyyy HH:mm")} // Format createdAt
            imageUrl={berita.image_url}
            author={berita.author}
            link={`/berita-warga/${berita.id}`}
          />
        ))}
      </SimpleGrid>
    </Box>
  </Flex>
    </SinglePageLayout>
    :""}
    </>
  );
}

export default PengumumanSinglePage;
