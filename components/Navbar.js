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
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

const MotionBox = motion(Box);  // ✅ Motion Wrapper for Chakra components

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Desktop navigation links
  const NavLinks = (
    <>
      {["Dashboard", "Home", "Admin", "Settings"].map((item) => (
        <Link
          key={item}
          px={4}
          py={2}
          href={`/${item !== "Home" ? item.toLowerCase() : ""}`}
          fontWeight="medium"
          borderRadius="10px"
          color="ThreeDLightShadow"
          transition="all 0.3s ease-in-out"
          _hover={{ textDecoration: "none", bg: "gray.300", transform: "scale(1.05)" }}
        >
          {item}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <MotionBox
        position="fixed"
        top={0}
        width="100%"
        bg="transparent"
        px={4}
        zIndex="100"
        initial={{ opacity: 0, y: -10 }}  // ✅ Fade-in effect
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          p={4}
          bg="whiteAlpha.300"
          borderRadius="md"
          backdropFilter="blur(10px)"
          boxShadow="lg"
        >
          {/* Logo */}
          <HStack spacing={3}>
            <Image src="/logo-bgremove.png" alt="Logo" boxSize="40px" />
            <Text fontSize="xl" fontWeight="bold" color="antiquewhite">
              TrustBeacon AI
            </Text>
          </HStack>

          {/* Desktop links */}
          <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
            {NavLinks}
          </HStack>

          {/* About icon */}
          <Flex alignItems="center">
            <Link
              href="/about"
              px={2}
              py={1}
              rounded="md"
              transition="all 0.3s ease-in-out"
              _hover={{ textDecoration: "none", bg: "gray.800", p: "2", transform: "rotate(10deg) scale(1.1)" }}
            >
              <FaQuestionCircle size="20px" color="white" />
            </Link>
          </Flex>

          {/* Hamburger for mobile */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            transition="all 0.3s ease-in-out"
            _hover={{ transform: "scale(1.2)" }}
          />
        </Flex>
      </MotionBox>

      {/* Mobile Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="rgba(0, 0, 0, 0.7)" backdropFilter="blur(10px)">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">
            <HStack>
              <Image src="/logo-bgremove.png" alt="Logo" boxSize="40px" />
              <Text>Menu</Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Stack as="nav" spacing={4} color="white">
              {NavLinks}
              <Link
                href="/about"
                px={3}
                py={2}
                fontWeight="medium"
                display="flex"
                alignItems="center"
                transition="all 0.3s ease-in-out"
                _hover={{ textDecoration: "none", bg: "gray.800", p: "2", transform: "scale(1.05)" }}
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
