import { Box, Text, Link, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box
        width="100%"
        position="relative"
        bg="#282455"
        py={10}
        mt={10}
        color="white"
      >
           <Flex
        width={['100%', '100%', '100%', '80%']}
        mx="auto"
        justifyContent={"space-between"}
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
      >
        <Box
          width={['100%', '100%', '100%', '33.33%']}
          mb={[6, 6, 6, 0]}
        >
          <Text
            fontSize={32}
            fontFamily="Poppins"
            fontWeight="400"
            whiteSpace="break-word"
          >
            Profil
          </Text>
          <Text fontSize={14} textAlign={'justify'}>
 <span style={{ fontWeight:'bold' }}> Desa Duren - Klari </span> <br />
 <span style={{ fontWeight:'bold' }}>  Kabupaten Karawang - Jawa Barat </span>  <br />
 <span style={{ textAlign:'justify' }}> Website desa dibangun sebagai bagian dari SISTEM INFORMASI DESA yang berfungsi sebagai portal informasi, transparansi, dan sosialisasi pemerintah terkait tata kelola pembangunan kawasan perdesaan (pembangunan, pembinaan, dan pemberdayaan) yang dirasakan langsung oleh masyarakat sebagai penerima manfaat.</span>
</Text>

          <Link
            fontSize={14}
          
          >
            Selengkapnya...
          </Link>
        </Box>
        <Box
          width={['100%', '100%', '100%', '33.33%']}
          mb={[6, 6, 6, 0]}
        >
          <Text
            fontSize={32}
           
          >
            Kontak Kami
          </Text>
          <Text
            fontSize={14}
           
          >
           Jl. Raya Kosambi No.17, RT.1/RW.8, Duren, Kec. Klari, Karawang, Jawa Barat 41371
          </Text>
          
        </Box>
      </Flex>
      </Box>

      <Flex
        direction="column"
        width="100%"
        bg="#201D44"
        justifyContent={['center', 'center', 'center', 'space-between']} // Adjust justifyContent for responsiveness
        px={4} // Adjust padding for smaller screens
        py={5}
        color="white"
        fontSize="sm"
      >
        <Text textAlign="center" fontWeight={'bold'} mb={3}>
         DESA DUREN KARAWANG
        </Text>
        <Text textAlign="center" fontWeight={'bold'}>
          2023 © KKN UNSIKA 2023.
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
