import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box textAlign="center" p={4}>
      <Heading as="h1" size="2xl" mb={4}>
        404 Not Found
      </Heading>
      <Text fontSize="lg">
        The page you are looking for does not exist.
      </Text>
      <Link to={'/'} fontSize="lg">
        Go Back To Homepage
      </Link>
    </Box>
  );
};

export default NotFound;
