import { Box, SimpleGrid, Icon, Text, VStack, Heading } from "@chakra-ui/react";
import { FaShieldAlt, FaRobot, FaSearch, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: FaShieldAlt, title: "Real-Time Threat Detection", desc: "Detect harmful content instantly using advanced AI models." },
  { icon: FaRobot, title: "AI-Powered Moderation", desc: "Automate moderation to filter out toxic content efficiently." },
  { icon: FaSearch, title: "Deep Content Analysis", desc: "Analyze text, images, and audio for online safety." },
  { icon: FaChartBar, title: "Insightful Reports", desc: "Get detailed reports on detected threats and trends." }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FeaturesSection = () => {
  return (
    <Box py={16} bg="gray.900" color="white" position="relative">
      {/* Background Gradient */}
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

      <Heading textAlign="center" mb={12} fontSize="4xl" fontWeight="bold" textTransform="uppercase">
        Key Features
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={10}>
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            <VStack 
              p={6} 
              bg="rgba(255, 255, 255, 0.1)" 
              backdropFilter="blur(10px)" 
              borderRadius="lg" 
              boxShadow="lg" 
              transition="0.3s" 
              _hover={{ transform: "scale(1.05)", boxShadow: "xl", bg: "rgba(255, 255, 255, 0.2)" }}
            >
              <Icon as={feature.icon} boxSize={14} color="fuchsia" />
              <Text fontSize="2xl" fontWeight="bold">{feature.title}</Text>
              <Text textAlign="center" opacity={0.8}>{feature.desc}</Text>
            </VStack>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
