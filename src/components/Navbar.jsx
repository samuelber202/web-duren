import { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box p={6} bgColor={'white'} color="black">
      <Flex alignItems="center">
        <Link as="a" to="/" _hover={{ textDecoration: "none" }}>
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
        <Flex gap={10} display={{ base: "none", md: "flex" }}>
          <Link
            to="/"
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
            to="/kegiatan-warga"
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Kegiatan
          </Link>
          <Link
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
            to={"/umkm"}
          >
            UMKM
          </Link>
          <Link
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
            to={"/informasi"}
          >
            Informasi
          </Link>
          <Link
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
            to={"/tentang-desa"}
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
