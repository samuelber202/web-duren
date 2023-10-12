import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Flex, Heading, Box, Text, Img, Spinner, SimpleGrid, Button, Divider } from '@chakra-ui/react';
import SinglePageLayout from '../components/layouts/SinglePageLayout';
import KegiatanWarga from '../components/KegiatanWarga';
import KegiatanCard from '../components/KegiatanCard';
import { format } from 'date-fns';
import { CalendarIcon, ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';

function PengumumanSinglePage() {
  const { id } = useParams();
  const [kegiatanData, setKegiatanData] = useState(null);
  const [beritaSuggestions, setBeritaSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch the current berita
    axios
      .get(`https://651635c709e3260018c9876d.mockapi.io/pengumuman/${+id}`)
      .then((response) => {
        setKegiatanData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false); // Turn off loading state when done
      });

      axios
      .get(`https://651635c709e3260018c9876d.mockapi.io/pengumuman`)
      .then((response) => {
        // Sort the beritas by date in descending order
        const sortedBeritas = response.data.sort(
          (a, b) => b.createdAt - a.createdAt
        );
        // Get the latest 5 beritas
        const latestBeritas = sortedBeritas.slice(0, 5);
        // Filter out the current berita (if it exists) and set the suggestions
        const filteredBeritas = latestBeritas.filter((berita) => berita.id !== +id);
        setBeritaSuggestions(filteredBeritas);
      })
      .catch((error) => {
        console.error('Error fetching berita suggestions:', error);
      });
    })    

 

  if (isLoading) {
    return (
      <Flex alignItems="center" justifyContent="center" h="100vh">
        <Spinner size="xl" color="teal" />
      </Flex>
    );
  }

  return (
    <SinglePageLayout>
      <Flex alignItems="center" justifyContent="center">
    <Text mt={10} mb={10} fontWeight="bold" textAlign="center" fontSize="4xl">
      {kegiatanData.title}
    </Text>
  </Flex>

  <Flex gap={10} mt={10} direction={["column", "column", "row"]} alignItems="flex-start"> {/* Change to "flex-start" */}
    <Box flex={["1", "1", "2"]} mb={[5, 5, 0]}>
        <Text color={'blue.500'} mb={5}><CalendarIcon/>{" "}{format(new Date(kegiatanData.createdAt * 1000), "dd/MM/yyyy HH:mm")} | <InfoIcon/>{" "}{kegiatanData.author}</Text>
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
  );
}

export default PengumumanSinglePage;
