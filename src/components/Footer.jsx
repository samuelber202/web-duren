import { Box, Text, Link, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Box
        width="100%"
        position="relative"
        bg="#282455"
        py={10}
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
          <Text
            fontSize={14}
            fontFamily="Poppins"
            fontWeight="300"
            whiteSpace="break-word"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            porro reprehenderit eligendi sint eos rerum facilis enim iusto animi
            dignissimos deserunt consequuntur beatae, placeat quae dolore fugiat,
            minima fuga corporis possimus adi...
          </Text>
          <Link
            fontSize={14}
            fontFamily="Poppins"
            fontWeight="600"
            whiteSpace="break-word"
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
            fontFamily="Poppins"
            fontWeight="400"
            whiteSpace="break-word"
          >
            Kontol Kami
          </Text>
          <Text
            fontSize={14}
            fontFamily="Poppins"
            fontWeight="300"
            whiteSpace="break-word"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            porro reprehenderit eligendi sint eos rerum facilis enim iusto animi
            dignissimos deserunt consequuntur beatae, placeat quae dolore fugiat,
            minima fuga corporis possimus adi...
          </Text>
          <Link
            fontSize={14}
            fontFamily="Poppins"
            fontWeight="600"
            whiteSpace="break-word"
          >
            Selengkapnya...
          </Link>
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
        <Text textAlign="center" mb={3}>
          KKN UNSIKA 2023
        </Text>
        <Text textAlign="center">
          2023-2025 © Kementerian Komunikasi dan Informatika RI.
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
