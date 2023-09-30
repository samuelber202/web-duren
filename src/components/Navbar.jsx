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
        <Link as="a" href="/home" _hover={{ textDecoration: "none" }}>
          <Flex alignItems="center">
            <img src="/images/logo.png" width="30px" alt="" />
            <Heading fontWeight="bold" size="sm" ml={2}>
              <span style={{ display: "block" }}>Desa Duren</span>
              <span style={{ display: "block", fontWeight: "normal" }}>
                Kabupaten Karawang
              </span>
            </Heading>
          </Flex>
        </Link>
        <Spacer />
        <Flex display={{ base: "none", md: "flex" }}>
          <Link
            href="/home"
            mr={6}
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Home
          </Link>
          <Link
            mr={6}
            href="/kegiatan-warga"
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Kegiatan
          </Link>
          <Link
            mr={6}
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            UMKM
          </Link>
          <Link
            mr={6}
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Informasi
          </Link>
          <Link
            href="/tentang-desa"
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Tentang Desa
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
        placement="top"
        onClose={toggleMobileMenu}
        isOpen={isMobileMenuOpen}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              direction="column"
              gap={8}
              align="center"
              justify="center"
              h="100%"
            >
              <Link
                href="/home"
                mb={4}
                fontWeight={"bold"}
                color="black"
                _hover={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                href="/kegiatan-warga"
                mb={4}
                fontWeight={"bold"}
                color="black"
                _hover={{ textDecoration: "none" }}
              >
                Kegiatan
              </Link>
              <Link
                color="black"
                fontWeight={"bold"}
                _hover={{ textDecoration: "none" }}
              >
                UMKM
              </Link>
              <Link
                color="black"
                fontWeight={"bold"}
                _hover={{ textDecoration: "none" }}
              >
                Informasi
              </Link>
              <Link
                href="/tentang-desa"
                color="black"
                fontWeight={"bold"}
                _hover={{ textDecoration: "none" }}
              >
                Tentang Desa
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
