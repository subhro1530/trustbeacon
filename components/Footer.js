import { 
  Box, Container, SimpleGrid, Text, Link, VStack, HStack, Icon, Input, Button, Divider 
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <hr></hr>
      <Box bg="gray.900" color="white" py={14} position="relative">
        {/* ✨ Background Gradient Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bgGradient="linear(to-br, gray.800, black)"
          opacity={0.3}
          zIndex={-1}
        />

        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} textAlign="center">
            
            {/* 🏆 Column 1 - Brand & Tagline */}
            <VStack align="center">
              <Text fontSize="2xl" fontWeight="bold">TrustBeacon AI</Text>
              <Text fontSize="sm" opacity={0.8}>
                AI-powered detection & moderation ensuring a safer digital space.
              </Text>
            </VStack>

            {/* 🔗 Column 2 - Quick Links */}
            <VStack align="center">
              <Text fontSize="lg" fontWeight="bold">Quick Links</Text>
              <Link href="/" _hover={{ color: "red.400", transform: "scale(1.1)", transition: "0.2s" }}>Home</Link>
              <Link href="/features" _hover={{ color: "red.400", transform: "scale(1.1)", transition: "0.2s" }}>Features</Link>
              <Link href="/about" _hover={{ color: "red.400", transform: "scale(1.1)", transition: "0.2s" }}>About</Link>
              <Link href="/contact" _hover={{ color: "red.400", transform: "scale(1.1)", transition: "0.2s" }}>Contact</Link>
            </VStack>

            {/* 📧 Column 3 - Newsletter Signup */}
            <VStack align="center">
              <Text fontSize="lg" fontWeight="bold">Stay Updated</Text>
              <Text fontSize="sm" opacity={0.8}>Subscribe to our newsletter for AI insights.</Text>
              <HStack>
                <Input 
                  placeholder="Enter your email" 
                  bg="gray.800" 
                  border="none" 
                  color="white"
                  _placeholder={{ color: "gray.500" }}
                />
                <Button bg="red.500" _hover={{ bg: "red.600", transform: "scale(1.05)" }} color="white">
                  Subscribe
                </Button>
              </HStack>
            </VStack>

            {/* 🔗 Column 4 - Social Media */}
            <VStack align="center">
              <Text fontSize="lg" fontWeight="bold">Follow Us</Text>
              <HStack spacing={5}>
                <Link href="https://twitter.com" isExternal>
                  <Icon as={FaTwitter} boxSize={6} _hover={{ color: "red.400", transform: "scale(1.3)", transition: "0.3s" }} />
                </Link>
                <Link href="https://linkedin.com" isExternal>
                  <Icon as={FaLinkedin} boxSize={6} _hover={{ color: "red.400", transform: "scale(1.3)", transition: "0.3s" }} />
                </Link>
                <Link href="https://github.com" isExternal>
                  <Icon as={FaGithub} boxSize={6} _hover={{ color: "red.400", transform: "scale(1.3)", transition: "0.3s" }} />
                </Link>
                <Link href="mailto:support@trustbeacon.ai">
                  <Icon as={FaEnvelope} boxSize={6} _hover={{ color: "red.400", transform: "scale(1.3)", transition: "0.3s" }} />
                </Link>
              </HStack>
            </VStack>
          </SimpleGrid>

          {/* 🏆 Divider */}
          <Divider my={8} borderColor="gray.700" />

          {/* ⚖️ Bottom Section */}
          <Text textAlign="center" fontSize="sm" opacity={0.6}>
            © {new Date().getFullYear()} TrustBeacon AI. All rights reserved.
          </Text>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Footer;
