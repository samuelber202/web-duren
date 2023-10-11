import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const KegiatanCard = ({ title, description, imageUrl, date, tag, id }) => {
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };

  const truncatedDescription = description.slice(0, 250);
  const shouldShowReadMore = description.length > 250 && !isDescriptionExpanded;

  return (
    <Link to={`/berita-warga/${id}`}>
      <Card
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        filter="drop-shadow(4px 6px 4px rgba(0, 0, 0, 0.25))"
      >
        <Box
          height="200px"
          overflow="hidden"
        >
          <Image
            alt="kegiatan-warga"
            src={imageUrl}
            objectFit="cover"
            width={"100%"}
            height="100%"
            top={0}
            left={0}
          />
        </Box>
        <CardHeader>
          <Flex justifyContent="space-between">
            <Text
              fontSize="0.75rem"
              fontWeight={600}
              color="gray.600"
              textTransform={"uppercase"}
              mb={2}
              maxH="1.2rem" // Truncate the tag
              overflow="hidden"
            >
              {tag}
            </Text>
            <Text fontSize="0.75rem" fontWeight={600} color="gray.600">
              {date}
            </Text>
          </Flex>
          <Box
            height={isDescriptionExpanded ? "auto" : "3.6rem"}
            overflow="hidden"
          >
            <Heading fontSize="1.125rem">{title}</Heading>
          </Box>
        </CardHeader>
        <CardBody pt={0}>
          <Box
            textAlign="justify"
            fontSize="0.875rem"
          >
            {isDescriptionExpanded ? description : truncatedDescription}
          </Box>
          {shouldShowReadMore && (
            <Button variant="link" size="sm" onClick={toggleDescription}>
              Read {isDescriptionExpanded ? "Less" : "More"}
            </Button>
          )}
        </CardBody>
      </Card>
    </Link>
  );
};

export default KegiatanCard;
