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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getBerita());
  }, [dispatch]);

  useEffect(() => {
    if (getBeritaResult) {
      setBeritaData(getBeritaResult);
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
        }
  }, [getBeritaResult]);


  const cardWidth = "300px";

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
        <Flex mt={5} justifyContent={'space-between'} flexDirection="row" flexWrap="wrap">
          {isLoading
            ? 
              [1, 2, 3, 4].map((key) => (
                <KegiatanCardSkeleton key={key} width={cardWidth} />
              ))
            : 
              slicedKegiatanData.map((kegiatan) => (
                <KegiatanCard
                  key={kegiatan.id}
                  title={kegiatan.title}
                  description={kegiatan.description}
                  date={kegiatan.createdAt}
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
