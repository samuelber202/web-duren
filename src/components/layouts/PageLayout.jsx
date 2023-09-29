import React from 'react';
import { Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
function PageLayout({ children }) {
  return (
    <Box
      maxW="100%"
      mx="auto"
      px={{ base: '16px', md: '60px' }} // Adjust the padding for different screen sizes
    >
      {children}
    </Box>
  );
}

export default PageLayout;
