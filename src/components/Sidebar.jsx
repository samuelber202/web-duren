// Sidebar.js
import React from "react";
import { Box, Heading, Stack, Button } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      w="250px"
      h="100vh"
      bg="#F3D34A"
      p="4"
      color="#0a0a0a"
      position="fixed"
    >
      <Box mb={10} alignItems="center">
        <img src="/images/logo.png" width="30px" alt="" />
        <Heading color={"black"} fontWeight="bold" size="sm" ml={2}>
          <span style={{ display: "block" }}>Desa Duren</span>
          <span style={{ display: "block", fontWeight: "normal" }}>
            Kabupaten Karawang
          </span>
        </Heading>
      </Box>
      <Stack mt={4} spacing={4}>
        <Button color={"black"} colorScheme="whiteAlpha">
          Dashboard
        </Button>
        <Button color={"black"} colorScheme="whiteAlpha">
          Pengumuman
        </Button>
        <Button color={"black"} colorScheme="whiteAlpha">
          Kegiatan
        </Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;
