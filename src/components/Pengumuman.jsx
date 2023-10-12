import React, { useEffect, useState } from 'react';
import PengumumanCard from './PengumumanCard';
import { Divider, Flex, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function Pengumuman() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://651635c709e3260018c9876d.mockapi.io/pengumuman")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Flex flexDirection={'column'} flexGrow={12}>
      <Text fontSize={'2xl'}>Pengumuman <ChevronRightIcon/></Text>
      <Divider orientation="horizontal" borderWidth="1px" borderColor={'blue.500'} />
      <Flex mt={3} flexDir={'column'} gap={5}>
        {data.map((item) => (
         
          <PengumumanCard
            key={item.id}
            title={item.title}
            content={item.content.length > 250 ? <Link to={`/pengumuman/${item.id}`}>  {item.content.slice(0, 150) + '... \nBaca Selanjutnya' }  </Link> : <Link to={`/pengumuman/${item.id}`}>  {item.content + ' ...' }  </Link>}
            date={format(new Date(item.createdAt * 1000), "dd/MM/yyyy")}
          />
         
        ))}
      </Flex>
    </Flex>
  );
}

export default Pengumuman;
