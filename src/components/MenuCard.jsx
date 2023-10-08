import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function MenuCard() {
  return (
    <>
      <Flex
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 5, md: 20 }}
        align={{ base: "center", md: "flex-start" }}
        mb={20}
        mt={"-8px"}
        p={5}
        color={"#1B98E0"}
        backgroundColor={"gray.100"}
      >
        <Link to={"/umkm"} className="menu__link">
          <Flex flexDirection={"column"} textAlign="center">
            <Img
              mx="auto"
              src="/images/pengumuman.png"
              width={70}
              height={50}
            />
            <Text mt={2} fontWeight="600">
              Pengumuman
            </Text>
          </Flex>
        </Link>
        <Link to={"/informasi"} className="menu__link">
          <Flex flexDirection={"column"} textAlign="center">
            <Img
              mx={"auto"}
              src="/images/information.png"
              width={70}
              height={50}
            />
            <Text mt={2} fontWeight="600">
              Informasi & Lokasi
            </Text>
          </Flex>
        </Link>
        <Link to={"/kegiatan-warga"} className="menu__link">
          <Flex flexDirection={"column"} textAlign="center">
            <Img src="/images/services.svg" width={90} height={50} />
            <Text mt={2} fontWeight="600">
              Kegiatan
            </Text>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}

export default MenuCard;
