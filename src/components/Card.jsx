import React from "react";
import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Card({ title, description, icon }) {
  return (
    <Box
      width="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      mx={10}
    >
      <Box
        p="4"
        bg="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          {icon}
          <Text ml="3" fontWeight="bold" fontSize="md" lineHeight="short">
            {title}
          </Text>
        </Flex>
      </Box>

      <Box p="4">
        <Text mt="2">{description}</Text>
      </Box>

      <Flex
        p="4"
        justifyContent={"center"}
        borderTopWidth="1px"
        borderTopColor="gray.300"
      >
        <Button
  borderRadius="full"
  backgroundColor="#2C285C"
  size="sm"
  color="white"
>
  Lihat Selengkapnya
</Button>

      </Flex>
    </Box>
  );
}

export default Card;
