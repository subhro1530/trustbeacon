import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Box, Text, Button, Textarea, VStack, HStack, Flex, Spinner, useToast } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
  const [text, setText] = useState('');
  const [flaggedItems, setFlaggedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/detect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: text }),
      });
      const data = await res.json();
      
      toast({
        title: data.flagged ? 'Content Flagged' : 'Content is Safe',
        description: data.flagged ? 'Potential risks detected!' : 'No issues found.',
        status: data.flagged ? 'error' : 'success',
        duration: 3000,
        isClosable: true,
      });

      if (data.flagged) fetchFlaggedItems();
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to analyze text.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  const fetchFlaggedItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/detect');
      const data = await res.json();
      setFlaggedItems(data.results);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFlaggedItems();
  }, []);

  return (
    <>
    <Navbar />
    <Box minH="100vh" bgGradient="linear(to-b, red.800, purple.900)" color="white" p={20}>

      {/* Dashboard Content */}
      <Box maxW="3xl" mx="auto" mt={10} p={6} bg="whiteAlpha.400" borderRadius="lg">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Dashboard</Text>
        
        <VStack spacing={4} align="stretch">
          <Textarea
            placeholder="Enter text to analyze..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            bg="white"
            color="black"
            borderRadius="md"
            size="md"
          />
          <Button colorScheme="red" onClick={handleAnalyze} isLoading={loading}>Analyze</Button>
        </VStack>

        {/* Flagged Content Section */}
        <Box mt={8}>
          <Text fontSize="xl" fontWeight="semibold" mb={2}>Flagged Content</Text>
          {loading ? (
            <Flex justify="center" mt={4}><Spinner size="lg" /></Flex>
          ) : flaggedItems.length === 0 ? (
            <Text color="gray.200">No flagged content yet.</Text>
          ) : (
            <VStack spacing={2} align="stretch">
              {flaggedItems.map((item, idx) => (
                <Box key={idx} p={3} bg="whiteAlpha.500" borderRadius="md">
                  <Text fontWeight="medium">Text: {item.text}</Text>
                  <Text fontSize="sm">Risk Level: {item.riskLevel}</Text>
                  <Text fontSize="sm">Label: {item.label}</Text>
                </Box>
              ))}
            </VStack>
          )}
        </Box>
      </Box>
    </Box>
    </>
  );
}
