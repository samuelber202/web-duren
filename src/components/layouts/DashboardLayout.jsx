import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children, heading }) => {
  return (
    <Flex flexWrap="wrap">
      <Sidebar />

      <Flex flexDir={'column'} flex="1" p="4" ml={{ base: '0', md: '250px' }}>
        <Heading size="lg" mb={10}>{heading}</Heading>
        {children}
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
