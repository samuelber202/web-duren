import React from "react";
import { Box, Text, Image, Button, Flex, Stack } from "@chakra-ui/react";

function Card({ title, description, icon }) {
  return (
    <Box
      width={{ base: "100%", md: "300px" }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      mx={2} 
      mb={4} 
    >
      <Box
        p="3" 
        bg="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          {icon}
          <Text ml="2" fontWeight="bold" fontSize={{ base: "sm", md: "lg" }}>
            {title}
          </Text>
        </Flex>
      </Box>

      <Box p={{ base: "2", md: "3" }}>
        <Text mt="2" fontSize="sm">
          {description}
        </Text>
      </Box>

      <Stack
        p="3"
        justifyContent={"center"}
        borderTopWidth="1px"
        borderTopColor="gray.300"
      >
        <Button
          borderRadius="full"
          backgroundColor="#2C285C"
          size="sm"
          color="white"
          fontSize="sm"
          paddingX="4" 
        >
          Lihat Selengkapnya
        </Button>
      </Stack>
    </Box>
  );
}

export default Card;
