import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box p={6} color="black">
      <Flex alignItems="center">
        <img src="/images/logo.png" width="30px" alt="" />
        <Heading fontWeight="bold" size="sm" ml={2}>
          <span style={{ display: "block" }}>Desa Duren</span>
          <span style={{ display: "block", fontWeight: "normal" }}>
            Kabupaten Karawang
          </span>
        </Heading>
        <Spacer />
        <Flex display={{ base: "none", md: "flex" }}>
          <Link
            mr={4}
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Home
          </Link>
          <Link
            mr={4}
            color="black"
            _hover={{
              transform: "scale(1.2)", // Scale the text by 1.5 times on hover
              transition: "transform 0.2s ease-in-out", // Add a smooth transition effect
            }}
          >
            About
          </Link>
          <Link
            color="black"
            _hover={{
              transform: "scale(1.2)", // Scale the text by 1.5 times on hover
              transition: "transform 0.2s ease-in-out", // Add a smooth transition effect
            }}
          >
            Contact
          </Link>
        </Flex>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Mobile Menu"
          display={{ base: "flex", md: "none" }}
          onClick={toggleMobileMenu}
        />
      </Flex>

      <Drawer
        placement="right"
        onClose={toggleMobileMenu}
        isOpen={isMobileMenuOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction="column">
              <Link mb={4} color="black" _hover={{ textDecoration: "none" }}>
                Home
              </Link>
              <Link mb={4} color="black" _hover={{ textDecoration: "none" }}>
                About
              </Link>
              <Link color="black" _hover={{ textDecoration: "none" }}>
                Contact
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
