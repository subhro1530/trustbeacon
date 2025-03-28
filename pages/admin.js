import { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Container,
  Spinner,
  useToast,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // Ensure Navbar is using Chakra UI

export default function Admin() {
  const [flaggedItems, setFlaggedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchFlaggedItems = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin");
      const data = await res.json();
      setFlaggedItems(data.results);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error fetching flagged items",
        description: "Something went wrong. Try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (index) => {
    try {
      await fetch(`/api/admin?index=${index}`, { method: "DELETE" });
      fetchFlaggedItems();
      toast({
        title: "Item removed",
        description: "The flagged item has been successfully removed.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Could not remove the item.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchFlaggedItems();
  }, []);

  return (
    <>
      <Box minH="100vh" bgGradient="linear(to-b, red.800, purple.900)" color="white">
      <Navbar />
        <Container maxW="3xl" position="relative" top={20} p={20} bg="whiteAlpha.200" borderRadius="lg">
          <Heading as="h1" fontSize="2xl" mb={4} textAlign="center">
            Admin Panel
          </Heading>

          {loading ? (
            <VStack mt={5}>
              <Spinner size="lg" color="red.400" />
            </VStack>
          ) : flaggedItems.length === 0 ? (
            <Text fontSize="lg" textAlign="center">
              No flagged items found.
            </Text>
          ) : (
            <VStack spacing={4}>
              {flaggedItems.map((item, index) => (
                <Box
                  key={index}
                  p={4}
                  bg="whiteAlpha.300"
                  borderRadius="md"
                  w="full"
                  transition="0.3s"
                  _hover={{ transform: "scale(1.02)" }}
                >
                  <Text fontWeight="bold">Text: {item.text}</Text>
                  <Text>Risk Level: {item.riskLevel}</Text>
                  <Text>Label: {item.label}</Text>
                  <HStack mt={3} justify="flex-end">
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleRemove(index)}
                      _hover={{ bg: "red.700" }}
                    >
                      Remove
                    </Button>
                  </HStack>
                </Box>
              ))}
            </VStack>
          )}
        </Container>
      </Box>
    </>
  );
}
