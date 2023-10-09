import { Box, Text, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function KegiatanCard({ title, link, imageUrl, date }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor={"#13293D"}
      overflow="hidden"
      color={"white"}
      boxShadow="md"
      p={4}
      marginBottom={4}
      width={{ base: "100%", md: "400px" }}
      display={{ md: "flex" }}
    >
      <Box
        flex={{ base: 1, md: 1 }}
        pr={{ base: 0, md: 4 }}
        mb={{ base: 4, md: 0 }}
        display={{ base: "flex", md: "block" }}
        justifyContent={{ base: "center", md: "unset" }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={150}
          aspectRatio="1"
          maxW={{ base: "150px", md: "200px" }}
          objectFit="cover"
        />
      </Box>
      <Box flex={{ base: 1, md: 2 }}>
        <Text fontWeight="bold" fontSize={{ base: "md", md: "xl" }} mb={2}>
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {date}
        </Text>
        <ChakraLink as={Link} to={link} fontSize={{ base: "xs", md: "xs" }} color="white">
          Selengkapnya...
        </ChakraLink>
      </Box>
    </Box>
  );
}

export default KegiatanCard;
