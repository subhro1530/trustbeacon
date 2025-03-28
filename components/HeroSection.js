import { Box, VStack, Heading, Text, HStack, Fade, SlideFade } from "@chakra-ui/react";
import { FaShieldAlt } from "react-icons/fa";
import Logo from "./Logo";
import CallToAction from "./CallToAction";

const HeroSection = () => {
  return (
    <Box
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1614851099511-773084f6911d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhZGllbnQlMjB8fDB8fDB8fHww')"
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
        bg="rgba(0, 0, 0, 0.15)"
        backdropFilter="blur(10px)"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        maxW="600px"
        textAlign="center"
        position="relative"
        zIndex={1}
        animation="fadeIn 1.5s ease-in-out"
      >
        <Fade in={true} delay={0.5}>
          <Logo />
        </Fade>

        <SlideFade in={true} offsetY="-20px">
          <HStack spacing={3} color="white" justify="center">
            <FaShieldAlt size="40px" />
            <Heading size="2xl" color="white">
              TrustBeacon AI
            </Heading>
          </HStack>
        </SlideFade>

        <SlideFade in={true} offsetY="20px" delay={0.3}>
          <Text fontSize="lg" color="whiteAlpha.800">
            AI-powered detection and mitigation of online harms, ensuring a safer and more trustworthy digital space.
          </Text>
        </SlideFade>

        <Fade in={true} delay={0.8}>
          <CallToAction />
        </Fade>
      </VStack>
    </Box>
  );
};

export default HeroSection;
