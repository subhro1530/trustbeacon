import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const useCases = [
  "Protect social media platforms from hate speech.",
  "Monitor online forums and prevent cyberbullying.",
  "Enhance content moderation for e-commerce reviews.",
  "Ensure safe discussions in online communities.",
  "Filter harmful content in live-streaming platforms."
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const UseCasesSection = () => {
  return (
    <Box py={20} px={6} bgGradient="linear(to-br, purple, pink)"  color="white" textAlign="center" position="relative">
      {/* Background Gradient Overlay */}
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

      <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={12} textTransform="uppercase">
        Where Can TrustBeacon AI Be Used?
      </Heading>

      <VStack spacing={6} align="center">
        {useCases.map((useCase, index) => (
          <motion.div key={index} variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Text
              fontSize="lg"
              px={6}
              py={4}
              bg="rgba(255, 255, 255, 0.08)"
              backdropFilter="blur(12px)"
              borderRadius="lg"
              boxShadow="lg"
              maxW="600px"
              fontWeight="medium"
              border="2px solid"
              borderColor="transparent"
              transition="0.3s"
              _hover={{ bg: "red.600", borderColor: "red.400", transform: "scale(1.05)", boxShadow: "xl" }}
            >
              {useCase}
            </Text>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default UseCasesSection;
