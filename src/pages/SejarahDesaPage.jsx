import { Box, Heading, Text, Image, Spacer } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";

const SejarahDesaPage = () => {
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
            sejarah desa
          </Heading>
        </Box>
        <Box backgroundColor="white" p={8} borderRadius="10px 10px 0 0">
          <Text textAlign="justify">
            <Image
              float={"left"}
              mr={5}
              mb={{ base: 5, md: 0, sm: 5 }}
              width={"50%"}
              src="/images/sejarah-desa.jpeg"
            />
            Desa Duren Klari terletak di Kabupaten Karawang, Jawa Barat, Indonesia. Lebih tepatnya, desa ini terletak di Kecamatan Klari, Kabupaten Karawang, Jawa Barat.
            Selama bertahun-tahun, desa Duren telah menjadi tempat yang kaya
            akan keindahan dan kelezatan buah durian. Di sinilah sejarah panjang
            dan cerita yang menarik dimulai. Di balik nama "Duren" terkandung
            cerita yang tak terlupakan tentang durian yang manis dan harum.
          </Text>

          <Text
            textAlign={"justify"}
            mt={5}
            mb={5}
            fontWeight={"bold"}
            fontSize={"xl"}
          >
            Asal Usul Nama "Duren"
          </Text>
          <Text textAlign={"justify"}>
            Nama "Duren" berasal dari buah yang kita semua kenal dengan baik,
            yaitu durian. Sejarahnya bermula dari kecintaan penduduk desa Duren
            terhadap buah durian yang begitu lezat. Setiap rumah di sini hampir
            selalu me miliki kebun atau lahan darat, dan hampir semua dari mereka
            menanam pohon durian. Bahkan, ada yang memiliki hingga 10 pohon
            durian di kebun mereka. Embah Kadi B. Ucan(Alm), salah satu tokoh di
            desa ini, memiliki tanah yang sekarang menjadi bagian dari jalan
            tol Jakarta-Cikampek. Tanah ini dulunya merupakan ladang durian yang
            menghasilkan buah dengan rasa manis dan harum yang terkenal. Itulah
            sebabnya, pada tahun 1930, saat seorang Kepala Desa bernama Katar
            memutuskan untuk memberikan nama desa ini, "Duren" menjadi pilihan
            yang sempurna.
            <Image
              float={"right"}
              ml={5}
              mb={{ base: 5, md: 0, sm: 5 }}
              width={"50%"}
              src="/images/pohon-durian.jpeg"
            />
            <Text
              textAlign={"justify"}
              mt={5}
              mb={5}
              fontWeight={"bold"}
              fontSize={"xl"}
            >
              Kesenangan Masyarakat Duren dalam Budidaya Durian
            </Text>
          </Text>
          <Text textAlign={"justify"}>
            desa Duren adalah tempat yang diisi dengan kehidupan masyarakat
            yang selalu bersemangat dalam menanam dan merawat pohon durian
            mereka. Setiap buah durian yang tumbuh di sini adalah buah dari
            cinta dan perawatan yang tulus dari penduduk setempat. Rasanya yang
            manis dan harum adalah bukti dari dedikasi mereka dalam menjaga dan
            memelihara pohon durian.
          </Text>
          <Text
            textAlign={"justify"}
            mt={5}
            mb={5}
            fontWeight={"bold"}
            fontSize={"xl"}
          >
            Ketika Duren Menjadi Nama Desa
          </Text>
          <Text textAlign={"justify"}>
            Pada tahun 1930, saat Kepala Desa Katar memutuskan untuk memberikan
            nama desa ini, pilihan jatuh pada "Duren." Nama ini dengan bangga
            diabadikan sebagai warisan sejarah desa ini. Duren bukan hanya
            tempat yang indah secara alamiah, tetapi juga merupakan rumah bagi
            buah durian yang menggugah selera. Kisah panjang dan sejarah yang
            kaya dari tempat ini terus hidup melalui buah yang manis dan harum
            ini. Semua ini adalah bagian dari pesona unik yang menjadikan desa
            Duren begitu istimewa.
          </Text>
        </Box>
      </PageLayout>
    </section>
  );
};

export default SejarahDesaPage;
