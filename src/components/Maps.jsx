import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import InformationTable from "./InformationTable";

const GoogleMap = () => {
  return (
    <section>
      
      <Text mt={20} fontWeight="bold" textAlign="center" fontSize="2xl">
        INFORMASI & PETA
      </Text>

      <Flex direction={["column", "column", "row"]} mt={20} alignItems="center">
        <Box flex={["1", "1", "2"]} mt={10} mb={[5, 5, 0]}>
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31721.626246978947!2d107.3514653355555!3d-6.36773339062274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69741b596ed13b%3A0x9389ac471604a46c!2sDuren%2C%20Kec.%20Klari%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1696049802670!5m2!1sid!2sid"
            width="100%"
            height="500"
            frameBorder="0"
            borderRadius={"lg"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Flex alignItems={'center'} mt={10} flex="1" p={[2, 5]}>
          <InformationTable />
        </Flex>
      </Flex>
    </section>
  );
};

export default GoogleMap;
