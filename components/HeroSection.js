import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Box
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1614851099511-773084f6911d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')"
      bgSize="cover"
      bgPos="center"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="linear(to-r, rgba(44,5,64,0.7), rgba(142,14,14,0.7))"
        zIndex={0}
      />

      <VStack
        spacing={6}
        bg="rgba(0, 0, 0, 0.08)"
        backdropFilter="blur(10px)"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        maxW="600px"
        textAlign="center"
        position="relative"
        zIndex={1}
      >
        <HStack spacing={3} color="white" justify="center">
          <FaShieldAlt size="40px" />
          <Heading
            size="2xl"
            color="white"
            fontFamily="'Roboto Flex', sans-serif"
          >
            TrustGuard AI
          </Heading>
        </HStack>

        <Text
          fontSize="lg"
          color="whiteAlpha.800"
          fontFamily="'Roboto Flex', sans-serif"
        >
          AI-powered detection and mitigation of online harms, ensuring a safer
          and more trustworthy digital space.
        </Text>

        <Button
          size="lg"
          bgColor={"#5e081b"}
          color="white"
          borderRadius="full"
          _hover={{ transform: "scale(1.05)", bgColor: "#790913" }}
          fontFamily="'Roboto Flex', sans-serif"
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
