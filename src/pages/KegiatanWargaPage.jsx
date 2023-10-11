import React, { useEffect, useState } from "react";
import { Heading, Box, Grid, Spinner, Text } from "@chakra-ui/react";
import KegiatanPageCard from "../components/KegiatanPageCard";
import axios from "axios";
import { format } from "date-fns";
import PageLayout from "../components/layouts/pageLayout";

const KegiatanWargaPage = () => {
  const [kegiatanData, setKegiatanData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("https://651635c709e3260018c9876d.mockapi.io/kegiatan")
      .then((response) => {
        setKegiatanData(response.data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle error and set loading to false
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
        {loading ? ( // Display loader while loading data
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <Spinner size="xl" color="primary.800" />
          </Box>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {kegiatanData.map((kegiatan) => (
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
        )}
      </PageLayout>
    </section>
  );
};

export default KegiatanWargaPage;
