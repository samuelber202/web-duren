import React, { useEffect, useState } from "react";
import KegiatanCard from "./KegiatanCard";
import { format } from "date-fns"; // Import the format function
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getBerita } from "../config/redux/actions/beritaAction";
import KegiatanCardSkeleton from "./KegiatanCardSkeleton";

function KegiatanWarga() {
  const dispatch = useDispatch();
  const [beritaData, setBeritaData] = useState([]);
  const { getBeritaResult } = useSelector((state) => state.berita);

  useEffect(() => {
    dispatch(getBerita());
  }, [dispatch]);

  useEffect(() => {
    if (getBeritaResult) {
      setBeritaData(getBeritaResult);
    }
  }, [getBeritaResult]);

  const isLoading = !getBeritaResult;
  const cardWidth = "300px"; // Fixed width for each card
  const cardsPerRow = 3; // Number of cards to display in a row

  const slicedKegiatanData = beritaData ? beritaData
  .slice() 
  .reverse() 
  .slice(0, 4) : ""

  return (
    <Flex flexDirection="column" flexGrow={6}>
      <Text fontSize="2xl">
        Berita <ChevronRightIcon />
      </Text>
      <Divider orientation="horizontal" borderWidth="1px" borderColor="blue.500" />

      <Box>
        <Flex mt={5} gap={5} flexDirection="row" flexWrap="wrap">
          {isLoading
            ? // Render KegiatanCardSkeleton while loading
              [1, 2, 3, 4].map((key) => (
                <KegiatanCardSkeleton key={key} width={cardWidth} />
              ))
            : // Render actual KegiatanCard components
              slicedKegiatanData.map((kegiatan) => (
                <KegiatanCard
                  key={kegiatan.id}
                  title={kegiatan.title}
                  description={kegiatan.description}
                  date={format(new Date(kegiatan.createdAt * 1000), "dd/MM/yyyy HH:mm")}
                  imageUrl={kegiatan.image_url}
                  author={kegiatan.author}
                  link={`/berita-warga/${kegiatan.id}`}
                  width={cardWidth} // Set the width of each card
                />
              ))
          }
        </Flex>
        <Flex justifyContent="center" mt={5}>
          <Link to="/berita-warga">
            <Button borderRadius="md">
              <Text>Lihat Selengkapnya</Text>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default KegiatanWarga;
