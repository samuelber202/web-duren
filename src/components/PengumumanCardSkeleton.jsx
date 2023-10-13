import React from 'react';
import {
  Box,
  Button,
  Collapse,
  Flex,
  Text,
  Skeleton,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  InfoIcon,
} from '@chakra-ui/icons';

function PengumumanCardSkeleton() {
  const buttonSize = useBreakpointValue({ base: 'xs', sm: 'sm' });

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="md"
        p={{ base: '2', sm: '4' }}
        width={{ md: '320px', sm: '200px' }}
        bg="blue.500"
        color="white"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Skeleton width="80%" height="1rem" />
          <Skeleton width="1rem" height="1rem" />
        </Flex>
        <Collapse in={false}>
          <Box
            borderRadius={'md'}
            mt="2"
            bg="white"
            p="5"
            color="black"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            <Flex alignItems="center">
              <Skeleton width="1rem" height="1rem" />
            </Flex>
            <Skeleton height="5rem" />
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

export default PengumumanCardSkeleton;
