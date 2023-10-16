import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Heading, Box, Text, Img, SimpleGrid, Divider } from '@chakra-ui/react';
import SinglePageLayout from '../components/layouts/SinglePageLayout';
import KegiatanCard from '../components/KegiatanCard';
import { CalendarIcon, ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getPengumuman } from '../config/redux/actions/pengumumanAction';

function PengumumanSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [kegiatanData, setKegiatanData] = useState(null);
  const [beritaSuggestions, setBeritaSuggestions] = useState([]);


  const {getPengumumanResult} = useSelector((state) => state.pengumuman);

  useEffect(() => {
    dispatch(getPengumuman())
   }, [dispatch]); 
 
   useEffect(()=>{
     if(getPengumumanResult){
      const filteredData = getPengumumanResult.filter((item) => item.id === id);
     setKegiatanData(filteredData[0])
     const sortedBeritas = getPengumumanResult ?? getPengumumanResult.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    const latestBeritas = sortedBeritas ?? sortedBeritas.slice(0, 5);
    const filteredBeritas = latestBeritas ?? latestBeritas.filter((berita) => berita.id !== +id);
    setBeritaSuggestions(filteredBeritas)

     }
   },[getPengumumanResult])

  return (
    <>
    {kegiatanData ? 
    <SinglePageLayout>
      <Flex alignItems="center" justifyContent="center">
    <Text mt={10} mb={10} fontWeight="bold" textAlign="center" fontSize="4xl">
      {kegiatanData.title}
    </Text>
  </Flex>

  <Flex gap={10} mt={10} direction={["column", "column", "row"]} alignItems="flex-start"> {/* Change to "flex-start" */}
    <Box flex={["1", "1", "2"]} mb={[5, 5, 0]}>
        <Text color={'blue.500'} mb={5}><CalendarIcon/>{" "}{kegiatanData.createdAt} | <InfoIcon/>{" "}{kegiatanData.author}</Text>
      <Img
        src={kegiatanData.image_url}
        width="full"
        height="500px"
      />
    <Text mt={10} textAlign={'justify'}>
        {kegiatanData.content.split('\n').map((line, index) => (
      <Text key={index}>{line}</Text>
    ))}
      </Text>
      <Text mt={10} textAlign={'justify'}>
      {kegiatanData.content1.split('\n').map((line, index) => (
      <Text key={index}>{line}</Text>
    ))}
      </Text>
      <Text mt={10} textAlign={'justify'}>
      {kegiatanData.content2.split('\n').map((line, index) => (
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
            date={berita.createdAt} 
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