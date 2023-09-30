// DashboardLayout.js
import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <Box
      maxW="100%"
      mx="auto"
    
    >
      {children}
    </Box>
  );
};

export default DashboardLayout;
