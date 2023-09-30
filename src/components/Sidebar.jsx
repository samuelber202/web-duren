// Sidebar.js
import React from 'react';
import { Box, IconButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, List, ListItem, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons'; // Import the hamburger icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box display={['none', 'block']}>
        <Box
          w="250px"
          h="100vh"
          bg="blue.500"
          p="4"
          
          color="white"
        >
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
