import React from 'react';
import { Box, Text, Image, Button, Flex } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
function Card({ title, description, icon }) {
  return (
    <Box
      width="300px" // Adjust the maximum width as needed
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      mx={10}
    >
      {/* Header with Icon and Title */}
      <Box p="4" bg="gray.200" display="flex" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
        {icon}
          <Text ml='3' fontWeight="bold" fontSize="lg">
            {title}
          </Text>
        </Flex>
        {/* Add a button here if needed in the header */}
      </Box>

      {/* Text Content in the Middle */}
      <Box p="4">
        <Text mt="2">{description}</Text>
      </Box>

      {/* Button at the Bottom */}
      <Flex p="4" justifyContent={'center'} borderTopWidth="1px" borderTopColor="gray.300">
        <Button borderRadius={"full"}  colorScheme="blue" size="sm">
         Lihat Selengkapnya
        </Button>
      </Flex>
    </Box>
  );
}

export default Card;
