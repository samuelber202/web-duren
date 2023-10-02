import { Box, Text, Image } from "@chakra-ui/react";

function KegiatanCard({ title, description, imageUrl, date }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor={"#2C285C"}
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
          maxW={{ base: "100%", md: "200px" }}
        />{" "}
      </Box>
      <Box flex={{ base: 1, md: 2 }}>
        <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }} mb={2}>
          {title}
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="white">
          {description}
        </Text>
        <Text fontSize="sm" color="gray.600">
          {date}
        </Text>
      </Box>
    </Box>
  );
}

export default KegiatanCard;
