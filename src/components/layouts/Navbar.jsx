import { Box, Flex, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <div>
      <Box>
        <Flex>
          <Flex flex={{ base: 1 }} justify="start">
            <Link href="/">
              <p>Nav Kiri</p>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;

