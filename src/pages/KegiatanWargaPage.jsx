import { Heading, Box, Grid } from "@chakra-ui/react";
import KegiatanPageCard from "../components/KegiatanPageCard";
import PageLayout from "../components/layouts/PageLayout";

const KegiatanWargaPage = () => {
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
            kegiatan warga
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          justifyItems={"center"}
        >
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <KegiatanPageCard
                key={i}
                title="Pokoknya ini judul dari kegiatan warga kek mananya"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ablaudantium illum porro similique molestiae dolorum possimus nobis id voluptates ex aliquid! Minus aliquam tempore vero assumenda numquam similique animi reprehenderit, perspiciatis perferendis veritatis a accusantium aperiam sint eos voluptas."
                imageUrl="/images/kegiatan-warga.png"
                tag="warga"
                date="12 September 2023"
              />
            ))}
        </Grid>
      </PageLayout>
    </section>
  );
};

export default KegiatanWargaPage;
