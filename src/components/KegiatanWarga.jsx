import React, { useEffect, useState } from "react";
import KegiatanCard from "./KegiatanCard";
import { format } from "date-fns"; // Import the format function
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";

function KegiatanWarga() {
  const [kegiatanData, setKegiatanData] = useState([]);

  useEffect(() => {
    axios.get("https://651635c709e3260018c9876d.mockapi.io/kegiatan")
      .then((response) => {
        setKegiatanData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 
  
  const slicedKegiatanData = kegiatanData
  .slice() 
  .reverse() 
  .slice(0, 4)
  return (
    <Flex flexDirection={'column'} flexGrow={6}>
      <Text fontSize={'2xl'}>
        Berita <ChevronRightIcon/>
      </Text>
      <Divider orientation="horizontal" borderWidth="1px" borderColor={'blue.500'}/>

      <Box>
        <Flex mt={5} gap={5} flexDirection={"row"} flexWrap="wrap">
          {slicedKegiatanData.map((kegiatan) => (
            <KegiatanCard
              key={kegiatan.id}
              title={kegiatan.title}
              description={kegiatan.description}
              date={format(new Date(kegiatan.createdAt * 1000), "dd/MM/yyyy HH:mm")} // Format createdAt
              imageUrl={kegiatan.image_url}
              author={kegiatan.author}
              link={`/berita-warga/${kegiatan.id}`}
            />
          ))}
        </Flex>
        <Flex justifyContent={"center"} mt={5}>
          <Link to={'/berita-warga'}>
            <Button borderRadius={"md"}>
              <Text>Lihat Selengkapnya</Text>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default KegiatanWarga;
