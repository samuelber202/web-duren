import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box
        width="100%"
        position="relative"
        bg="#282455"
        py={10}
        mt={20}
        color="white"
      >
        <Flex
          width={["100%", "100%", "100%", "80%"]}
          mx="auto"
          justifyContent={"space-between"}
          flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
        >
          <Box width={["100%", "100%", "100%", "33.33%"]} mb={[6, 6, 6, 0]}>
            <Text
              fontSize={32}
              fontFamily="Poppins"
              fontWeight="400"
              whiteSpace="break-word"
            >
              Profil
            </Text>
            <Text fontSize={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              porro reprehenderit eligendi sint eos rerum facilis enim iusto
              animi dignissimos deserunt consequuntur beatae, placeat quae
              dolore fugiat, minima fuga corporis possimus adi...
            </Text>
            <Link fontSize={14}>Selengkapnya...</Link>
          </Box>
          <Box width={["100%", "100%", "100%", "33.33%"]} mb={[6, 6, 6, 0]}>
            <Text fontSize={32}>Kontak Kami</Text>
            <Text fontSize={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              porro reprehenderit eligendi sint eos rerum facilis enim iusto
              animi dignissimos deserunt consequuntur beatae, placeat quae
              dolore fugiat, minima fuga corporis possimus adi...
            </Text>
            <Link fontSize={14}>Selengkapnya...</Link>
          </Box>
        </Flex>
      </Box>

      <Flex
        direction="column"
        width="100%"
        bg="#201D44"
        justifyContent={["center", "center", "center", "space-between"]} // Adjust justifyContent for responsiveness
        px={4} // Adjust padding for smaller screens
        py={5}
        color="white"
        fontSize="sm"
      >
        <Text textAlign="center" fontWeight={"bold"} mb={3}>
          DESA DUREN KARAWANG
        </Text>
        <Text textAlign="center" fontWeight={"bold"}>
          2023 © KKN UNSIKA 2023.
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
