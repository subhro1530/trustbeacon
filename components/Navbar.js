import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Desktop navigation links
  const NavLinks = (
    <>
      <Link
        px={3}
        py={2}
        href="/tools"
        fontWeight="medium"
        _hover={{ textDecoration: "none", bg: "gray.700" }}
      >
        Tools
      </Link>
      <Link
        px={3}
        py={2}
        href="/"
        fontWeight="medium"
        _hover={{ textDecoration: "none", bg: "gray.700" }}
      >
        Home
      </Link>
      <Link
        px={3}
        py={2}
        href="/contacts"
        fontWeight="medium"
        _hover={{ textDecoration: "none", bg: "gray.700" }}
      >
        Contacts
      </Link>
    </>
  );

  return (
    <>
      <Box
        position="fixed"
        top={0}
        width="100%"
        bg="transparent"
        px={4}
        zIndex="100"
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Hamburger for mobile */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          {/* Desktop links */}
          <HStack spacing={8} alignItems="center">
            <Box fontWeight="bold" color="white">
              Brand
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="white"
            >
              {NavLinks}
            </HStack>
          </HStack>

          {/* About icon */}
          <Flex alignItems="center">
            <Link
              href="/about"
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "gray.700" }}
            >
              <FaQuestionCircle size="20px" color="white" />
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="transparent" backdropFilter="blur(10px)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">Menu</DrawerHeader>
          <DrawerBody>
            <Stack as="nav" spacing={4} color="white">
              {NavLinks}
              <Link
                href="/about"
                px={3}
                py={2}
                fontWeight="medium"
                _hover={{ textDecoration: "none", bg: "gray.700" }}
                display="flex"
                alignItems="center"
              >
                <Text mr={2}>About</Text>
                <FaQuestionCircle size="20px" />
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
