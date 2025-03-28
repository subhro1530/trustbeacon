import { Box, VStack, Heading, Text, Avatar, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { name: "John Doe", role: "Content Moderator", text: "TrustBeacon AI has significantly reduced harmful content on our platform!", rating: 5 },
  { name: "Sarah Lee", role: "Community Manager", text: "The AI-powered moderation is seamless and highly efficient.", rating: 4 },
  { name: "Michael Brown", role: "Security Analyst", text: "I love the detailed reports that help us stay ahead of online threats.", rating: 5 }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TestimonialsSection = () => {
  return (
    <Box py={20} px={6} bg="gray.900" color="white" textAlign="center" position="relative">
      {/* Background Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgGradient="linear(to-br, gray.500, gray.800)"
        opacity={0.3}
        zIndex={-1}
      />

      <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={12} textTransform="uppercase">
        What Our Users Say
      </Heading>

      <VStack spacing={8}>
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <HStack
              bg="rgba(255, 255, 255, 0.08)"
              backdropFilter="blur(12px)"
              borderRadius="lg"
              boxShadow="lg"
              p={6}
              spacing={6}
              maxW="600px"
              mx="auto"
              border="2px solid"
              borderColor="transparent"
              transition="0.3s"
              _hover={{ bg: "red.600", borderColor: "red.400", transform: "scale(1.05)", boxShadow: "xl" }}
            >
              <Avatar name={testimonial.name} size="lg" />
              <VStack align="start" spacing={2}>
                <Text fontSize="lg" fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" opacity={0.8}>{testimonial.role}</Text>
                <Text textAlign="left" fontSize="md">{testimonial.text}</Text>
                <HStack>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Icon as={FaStar} key={i} color="yellow.400" />
                  ))}
                </HStack>
              </VStack>
            </HStack>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default TestimonialsSection;
