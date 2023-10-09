import React from "react";
import KegiatanCard from "./KegiatanCard";
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

function KegiatanWarga() {
  return (
    <Flex flexDirection={'column'} flexGrow={6}>
      <Text
     fontSize={'2xl'}
    >
      Kegiatan <ChevronRightIcon/>
    </Text>
    <Divider orientation="horizontal"  borderWidth="1px" borderColor={'blue.500'}/>
 

      <Box>
        <Flex mt={5} gap={5} flexDirection={"row"} flexWrap="wrap">
          <KegiatanCard
            title="Minggon"
            description="Kegiatan rapat desa mingguan."
            date="23/09/2023"
            imageUrl="/images/minggon.jpg"
          />
          <KegiatanCard
            title="Pembukaan Posyandu Cempaka"
            description="Selasa, 3 Oktober 2023 diresmikan pembukaan posyandu cempaka"
            date="03/10/2023"
            imageUrl="/images/posyandu.png"
          />
        </Flex>
        <Flex mt={5} gap={5} flexDirection={"row"} flexWrap="wrap">
          <KegiatanCard
            title="Card 1"
            description="This is the first card description."
            date="23/09/2023"
            imageUrl="https://via.placeholder.com/150"
          />
          <KegiatanCard
            title="Card 2"
            description="This is the second card description."
            date="23/09/2023"
            imageUrl="https://via.placeholder.com/150"
          />
        </Flex>
        <Flex justifyContent={"center"} mt={5}>
          <Link to={'/kegiatan-warga'}>
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
