import { Stack, Box, Flex, Link, Image } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav>
      <Stack py="4" px="20">
        <Flex align="center">
          <Flex flex={{ base: 1 }} justify="start">
            <Box>
              <Flex align="center">
                <Link href="/">
                  <Image
                    boxSize="80px"
                    objectFit="contain"
                    src="/assets/images/logo.png"
                    alt="Logo Karawang"
                    mr="2"
                  />
                </Link>
                <p className="logo-text">Desa Duren</p>
              </Flex>
            </Box>
          </Flex>
          <Flex flex={{ base: 2 }} justify="end">
            <Flex>
              <Box className="btn-link" p="4">
                <Link href="/">Home</Link>
              </Box>
              <Box className="btn-link" p="4">
                <Link href="/">Lorem</Link>
              </Box>
              <Box className="btn-link" p="4">
                <Link href="/">Lorem</Link>
              </Box>
              <Box className="btn-link" p="4">
                <Link href="/">Lorem</Link>
              </Box>
              <Box className="btn-link" p="4">
                <Link href="/">Tentang Desa</Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </nav>
  );
}

export default Navbar;
