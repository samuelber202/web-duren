import React from "react";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { Box, Flex } from "@chakra-ui/react";
import KegiatanForm from "../components/KegiatanForm";
function KegiatanAdmin() {
 
  return (
    <Box
    >
      <DashboardLayout>
        <Flex ml={"250px"} justifyContent={"center"}>
          <KegiatanForm />
        </Flex>
      </DashboardLayout>
    </Box>
  );
}

export default KegiatanAdmin;
