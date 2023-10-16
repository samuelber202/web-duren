import { Box, Button, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function CardWithLinks() {
  return (
    <Flex gap={10} justifyContent={'space-around'}>
      <Box
        borderWidth="1px"
        borderRadius="md"
        p="4"
        maxWidth="320px"
        width="100%"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold">Berita</Text>
        </Flex>
        <Link as={RouterLink} to="/dashboard/berita">
          <Button bg={'green.300'} mt="2" fontSize="1rem" w="100%"> {/* Added w="100%" */}
            Tambah Berita
          </Button>
          </Link>
          <Link as={RouterLink} to="/dashboard/hapus-berita">
          <Button bg={'red.500'} mt="2" fontSize="1rem" w="100%"> {/* Added w="100%" */}
            Hapus Berita
          </Button>
          </Link>
      
      </Box>

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
        <Link as={RouterLink} to="/dashboard/pengumuman">
          <Button bg={'green.300'} mt="2" fontSize="1rem" w="100%"> {/* Added w="100%" */}
            Tambah Pengumuman
          </Button>
          </Link>

          <Link as={RouterLink} to="/dashboard/hapus-pengumuman">
          <Button bg={'red.500'} mt="2" fontSize="1rem" w="100%"> {/* Added w="100%" */}
            Hapus Pengumuman
          </Button>
          </Link>
      </Box>
    </Flex>
  );
}

export default CardWithLinks;
