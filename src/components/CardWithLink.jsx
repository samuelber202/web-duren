import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function CardWithLinks() {
  return (
    <Flex gap={10} justifyContent={'space-around'}>
    <Link as={RouterLink} to="/dashboard/kegiatan">
    <Box
      borderWidth="1px"
      borderRadius="md"
      p="4"
      maxWidth="320px"
      width="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold">Kegiatan</Text>

      </Flex>
      <Text mt="2" fontSize="1rem">
       Tambah & Hapus Kegiatan
      </Text>
    </Box>
    </Link>
     <Link as={RouterLink} to="/dashboard/pengumuman">
     <Box
       borderWidth="1px"
       borderRadius="md"
       p="4"
       maxWidth="320px"
       width="100%"
     >
       <Flex justifyContent="space-between" alignItems="center">
         <Text fontWeight="bold">Pengumuman</Text>
 
       </Flex>
       <Text mt="2" fontSize="1rem">
        Tambah & Hapus Pengumuman
       </Text>
     </Box>
     </Link>
     </Flex>
  );
}

export default CardWithLinks;