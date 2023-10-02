import React from "react";
import KegiatanCard from "./KegiatanCard";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

function KegiatanWarga() {
  return (
    <>
      <Text
        mt={10}
        fontSize={"2xl"}
        fontWeight={"bold"}
        textAlign={"center"}
        mb={5}
      >
        KEGIATAN WARGA
      </Text>

      <Box p={4}>
        <Flex justifyContent={"space-around"} flexWrap="wrap">
          <KegiatanCard
            title="Minggon"
            description="Kegiatan rapat desa mingguan."
            date="23/09/2023"
            imageUrl="https://via.placeholder.com/150"
          />
          <KegiatanCard
            title="Posyandu"
            description="Kegiatan pengecekan kesehatan anak di usia dini"
            date="23/09/2023"
            imageUrl="https://via.placeholder.com/150"
          />
        </Flex>
        <Flex justifyContent={"space-around"} flexWrap="wrap">
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
          <Button borderRadius={"md"}>
            <Text>Lihat Selengkapnya</Text>
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default KegiatanWarga;
