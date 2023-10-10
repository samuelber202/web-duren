// DashboardLayout.js
import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" overflowY="auto">
        <Flex justifyContent="center" alignItems="center" height="100%">
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
