// DashboardLayout.js
import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children }) => {
  

  return (
    <Flex>
      <Sidebar />
      <Box flex="1">
      <Text fontWeight={'bold'} fontSize={'3xl'} ml={'300px'}>Dashboard Admin</Text>
        <Flex ml={'100px'} mt={'50px'} justifyContent="center" alignItems="center" height="100%">
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
