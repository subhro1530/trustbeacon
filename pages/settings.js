import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  Input,
  Button,
  Text,
  Stack,
  useToast,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

export default function Settings() {
  const [threshold, setThreshold] = useState(0.5);
  const toast = useToast();

  const fetchThreshold = async () => {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();
      setThreshold(data.threshold);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ threshold }),
      });
      toast({
        title: "Threshold Updated!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error updating threshold",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchThreshold();
  }, []);

  return (
    <>
      <Navbar />
    <Box minH="100vh" bgGradient="linear(to-b, red.800, purple.900)" color="white">
      {/* NAVBAR */}
      {/* SETTINGS PANEL */}
      <Box maxW="3xl" mx="auto" position="relative" top={20} p={6} bg="whiteAlpha.200" borderRadius="lg" boxShadow="xl">
        <Heading size="lg" mb={4}>Settings</Heading>
        <Text mb={2}>Detection Threshold (0 to 1):</Text>
        <Flex gap={4} align="center">
          <Input
            type="number"
            step="0.01"
            min="0"
            max="1"
            value={threshold}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
            bg="white"
            color="black"
            maxW="100px"
            borderRadius="md"
          />
          <Button colorScheme="red" onClick={handleSave} _hover={{ transform: "scale(1.05)" }} transition="0.2s">
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
    </>
  );
}
