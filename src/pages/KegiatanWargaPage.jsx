import React, { useEffect, useState } from "react";
import { Heading, Box, Grid, Skeleton, Text, Button } from "@chakra-ui/react";
import KegiatanPageCard from "../components/KegiatanPageCard";
import axios from "axios";
import { format, set } from "date-fns";
import PageLayout from "../components/layouts/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { getBerita } from "../config/redux/actions/beritaAction";

const KegiatanWargaPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const dispatch = useDispatch();
  const [beritaData, setBeritaData] = useState(null);

  const { getBeritaResult } = useSelector((state) => state.berita);
  useEffect(() => {
    dispatch(getBerita());
  }, [dispatch]);

  useEffect(() => {
    if (getBeritaResult) {
      setBeritaData(getBeritaResult.slice().reverse());
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [getBeritaResult]);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beritaData ? beritaData.slice(indexOfFirstItem, indexOfLastItem) : [];

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <section>
      <PageLayout>
        <Box py="10">
          <Heading
            fontWeight="bold"
            color="primary.800"
            textAlign="center"
            textTransform={"uppercase"}
            fontSize="4xl"
          >
            berita warga
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {loading
            ? [1, 2, 3, 4, 5, 6].map((index) => (
                <Skeleton key={index} height="500px" borderRadius={"md"} />
              ))
            : currentItems.map((kegiatan) => (
                <KegiatanPageCard
                  key={kegiatan.id}
                  title={kegiatan.title}
                  description={kegiatan.content}
                  imageUrl={kegiatan.image_url}
                  tag={kegiatan.author}
                  date={kegiatan.createdAt}
                  id={kegiatan.id}
                />
              ))
          }
        </Grid>
        {beritaData && beritaData.length > itemsPerPage && (
          <Box textAlign="center" mt={4}>
            {Array(Math.ceil(beritaData.length / itemsPerPage))
              .fill(null)
              .map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "solid" : "outline"}
                  onClick={() => paginate(index + 1)}
                  m={1}
                >
                  {index + 1}
                </Button>
              ))}
          </Box>
        )}
      </PageLayout>
    </section>
  );
};

export default KegiatanWargaPage;
