import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Box
      bgImage="url('/background.png')"
      bgSize="cover"
      bgPos="center"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6} bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="lg">
        <HStack spacing={3} color="white">
          <FaShieldAlt size="40px" />
          <Heading size="2xl" color="teal.300">
            TrustGuard AI
          </Heading>
        </HStack>
        <Text fontSize="lg" color="gray.200" maxW="600px" textAlign="center">
          AI-powered detection and mitigation of online harms, ensuring a safer
          and more trustworthy digital space.
        </Text>
        <Button size="lg" colorScheme="teal" borderRadius="full">
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
