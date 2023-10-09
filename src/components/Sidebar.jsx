// Sidebar.js
import React from 'react';
import { Box, IconButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, List, ListItem, Link, Flex, Heading, Stack, Button, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons'; // Import the hamburger icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // const handleLogout = () =>{
 
  // try {
   
  //   const res = localStorage.removeItem("zxc9238[0]-2Token");

  //   if (res) {
  //     navigate('/login');
  //   } else {
  //     console.log('Login failed');
  //   }
  // } catch (error) {
  //   console.log('Login error:', error.message);
  // }
  // }

  return (
    <>
   
      <Box display={['none', 'block']} position={'absolute'}>
        <Box
          w="250px"
          h="100vh"
          bg="#F3D34A"
          p="4"
          color="#0a0a0a"
        >
           <Flex mb={10} alignItems="center">
            <img src="/images/logo.png" width="30px" alt="" />
            <Heading color={'black'} fontWeight="bold" size="sm" ml={2}>
              <span style={{ display: "block" }}>Desa Duren</span>
              <span style={{ display: "block", fontWeight: "normal" }}>
                Kabupaten Karawang
              </span>
            </Heading>
          </Flex>
          <Stack mt={4} spacing={4}>
          <Button color={'black'} colorScheme="whiteAlpha">Dashboard</Button>
          <Button color={'black'} colorScheme="whiteAlpha">Pengumuman</Button>
          <Button color={'black'} colorScheme="whiteAlpha">Kegiatan</Button>
        </Stack>
        <Box
  position="absolute"
  bottom="0"
  left="0"
  right="0"
  p="4"
  borderTop="1px solid #0a0a0a"
  bg="#F3D34A"
  color="black"
>
  {/* <Button onClick={handleLogout()} colorScheme="orange" w="100%">
    Logout
  </Button> */}
</Box>

        </Box>
      </Box>
      <Box m={5} display={['block', 'none']}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={toggleSidebar}
        />

        <Drawer isOpen={isOpen} placement="left" onClose={toggleSidebar}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <List spacing={2}>
                  <ListItem>
                    <Link as={RouterLink} to="/dashboard">
                      Dashboard
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink} to="/users">
                      Users
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link as={RouterLink} to="/products">
                      Products
                    </Link>
                  </ListItem>
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
