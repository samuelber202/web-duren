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
    <Box p={6} color="blue.500" position={'sticky'} top={0} zIndex={99} backgroundColor={"whiteAlpha.900"}>
      <Flex alignItems="center">
        <Link as="a" to="/" _hover={{ textDecoration: "none" }}>
          <Flex alignItems="center">
            <img src="/images/logo.png" width="30px" alt="" />
            <Heading color={'black'} fontWeight="bold" size="sm" ml={2}>
              <span style={{ display: "block" }}>Desa Duren</span>
              <span style={{ display: "block", fontWeight: "normal" }}>
                Kabupaten Karawang
              </span>
            </Heading>
          </Flex>
        </Link>
        <Spacer />
        <Flex gap={10} fontWeight={'bold'} display={{ base: "none", md: "flex" }}>
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
            to="/berita-warga"
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Berita
          </Link>
          <Link
            mr={6}
            to="/pengumuman-warga"
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            Pengumuman
          </Link>
          <Link
            color="black"
            _hover={{
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            }}
            to={"/statistik"}
          >
            Statistik
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
            to={"/sejarah-desa"}
          >
            Sejarah Desa
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
                to="/"
                mb={4}
                fontWeight={"bold"}
                color="black"
                _hover={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                to="/berita-warga"
                mb={4}
                fontWeight={"bold"}
                color="black"
            
>
                Berita
              </Link>
              <Link
                to="/pengumuman-warga"
                mb={4}
                fontWeight={"bold"}
                color="black"
            
>
                Pengumuman
              </Link>
              <Link
              to={'/statistik'}
                color="black"
                fontWeight={"bold"}
                _hover={{ textDecoration: "none" }}
              >
                Statistik
              </Link>
              <Link
                color="black"
                fontWeight={"bold"}
                _hover={{ textDecoration: "none" }}
                to={'/informasi'}
              >
                Informasi
              </Link>
              <Link
                to="/sejarah-desa"
                color="black"
                fontWeight={"bold"}
                _hover={{ textDecoration: "none" }}
              >
                Sejarah Desa
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
