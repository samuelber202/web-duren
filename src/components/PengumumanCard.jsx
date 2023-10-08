import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CalendarIcon, ChevronDownIcon, ChevronUpIcon, InfoIcon } from "@chakra-ui/icons";

function PengumumanCard({ title, content, date }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm" });

  const maxLines = isDropdownOpen ? content.length : 5; // Adjust the number of lines to display

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="md"
        p={{ base: "2", sm: "4" }}
        width={{ md: "320px", sm: "200px" }}
        bg="blue.500"
        color="white"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">{title}</Text>
          <Button
            variant="link"
            size={buttonSize}
            onClick={toggleDropdown}
            leftIcon={isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            color="white"
          />
        </Flex>
        <Collapse in={isDropdownOpen}>
          <Box
            borderRadius={"md"}
            mt="2"
            bg="white"
            p="5"
            color="black"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            maxHeight={maxLines * 1.2 + "rem"} // Adjust line height as needed
          >
            <Flex alignItems="center">
              <CalendarIcon boxSize={4} color="blue.500" mr="2" />{" "}
              <Text fontSize="sm" color="gray.500">
                {date}
              </Text>{" "}
              <InfoIcon boxSize={4} color="blue.500" ml="2" mr={'2'} />{" "}
              <Text fontSize="sm" color="gray.500">
                Admin Desa
              </Text>
            </Flex>
            <Text textAlign={'justify'} fontSize="sm" whiteSpace="pre-wrap">
              {content}
            </Text>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}

export default PengumumanCard;
