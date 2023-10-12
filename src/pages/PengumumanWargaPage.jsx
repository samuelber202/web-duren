import React, { useEffect, useState } from "react";
import { Heading, Box, Grid, Skeleton, Text } from "@chakra-ui/react";
import KegiatanPageCard from "../components/KegiatanPageCard";
import axios from "axios";
import { format } from "date-fns";
import PageLayout from "../components/layouts/PageLayout";

const PengumumanWargaPage = () => {
  const [kegiatanData, setKegiatanData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://651635c709e3260018c9876d.mockapi.io/pengumuman")
      .then((response) => {
        setKegiatanData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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
            pengumuman warga
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
                <Skeleton key={index} height="500px" borderRadius={'md'} />
              ))
            : kegiatanData.map((kegiatan) => (
                <KegiatanPageCard
                  key={kegiatan.id}
                  title={kegiatan.title}
                  description={kegiatan.content}
                  imageUrl={kegiatan.image_url}
                  tag={kegiatan.author}
                  date={format(new Date(kegiatan.createdAt * 1000), "dd MMMM yyyy")}
                  id={kegiatan.id}
                />
              ))}
        </Grid>
      </PageLayout>
    </section>
  );
};

export default PengumumanWargaPage;
