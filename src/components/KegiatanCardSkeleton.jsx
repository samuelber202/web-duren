import React from "react";
import {
  Box,
  Text,
  Image,
  Link as ChakraLink,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function KegiatanCardSkeleton() {
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
        <Skeleton startColor="gray.700" endColor="gray.900" height="150px" width="150px" />
      </Box>
      <Box flex={{ base: 1, md: 2 }}>
        <Flex float={'right'} alignItems="center">
          <Skeleton startColor="gray.700" endColor="gray.900" height="16px" width="16px" />
          <Skeleton startColor="gray.700" endColor="gray.900" height="16px" width="60px" />
        </Flex>
        <Skeleton startColor="gray.700" endColor="gray.900" height="24px" width="80%" />
        <Skeleton startColor="gray.700" endColor="gray.900" height="20px" width="60%" />
        <Skeleton startColor="gray.700" endColor="gray.900" height="16px" width="80px" />
      </Box>
    </Box>
  );
}

export default KegiatanCardSkeleton;
