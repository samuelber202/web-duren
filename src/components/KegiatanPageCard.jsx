import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  StackDivider,
  Stack,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
const KegiatanCard = () => {
  return (
    <Card
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      filter="drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25))"
    >
      <CardHeader>
        <Image
          src="/images/kegiatan-warga.png"
          position={"absolute"}
          width={"100%"}
          top={0}
          left={0}
        />
        <Heading size="md">Client Report</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default KegiatanCard;
