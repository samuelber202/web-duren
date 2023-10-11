import { Heading } from "@chakra-ui/react";
import PageLayout from "./PageLayout";
import GrayBox from "../GrayBox";

const AboutLayout = ({ title, children }) => {
  return (
    <>
      <GrayBox />
      <PageLayout>
        <Heading
          my={20}
          transform="translateY(-10px)"
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign="center"
          fontSize="4xl"
        >
          {title}
        </Heading>
        {children}
      </PageLayout>
    </>
  );
};

export default AboutLayout;
