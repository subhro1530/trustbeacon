import { Button } from "@chakra-ui/react";

const CallToAction = () => {
  return (
    <Button
      size="lg"
      bgGradient="linear(to-r, #790913, #ff4d4d)"
      color="white"
      borderRadius="full"
      fontWeight="bold"
      _hover={{ transform: "scale(1.05)", boxShadow: "0px 5px 15px rgba(255, 77, 77, 0.5)" }}
      transition="0.3s ease-in-out"
    >
      Get Started
    </Button>
  );
};

export default CallToAction;
