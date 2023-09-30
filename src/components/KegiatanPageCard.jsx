import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
const KegiatanCard = ({ title, description, imageUrl, date, tag }) => {
  return (
    <Card
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      filter="drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25))"
    >
      <Image
        alt="kegiatan-warga"
        src={imageUrl}
        position={"relative"}
        width={"100%"}
        top={0}
        left={0}
      />
      <CardHeader>
        <Flex justifyContent="space-between">
          <Text
            fontSize="0.75rem"
            fontWeight={600}
            color="gray.600"
            textTransform={"uppercase"}
            mb={4}
          >
            {" "}
            {tag}{" "}
          </Text>
          <Text fontSize="0.75rem" fontWeight={600} color="gray.600">
            {" "}
            {date}{" "}
          </Text>
        </Flex>
        <Heading fontSize="1.125rem">{title}</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text fontSize="0.875rem">{description}</Text>
      </CardBody>
    </Card>
  );
};

export default KegiatanCard;
