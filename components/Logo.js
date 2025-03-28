import { Image, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react"; // ✅ Fix: Import from @emotion/react

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const Logo = () => {
  return (
    <Box 
      animation={`${fadeIn} 1.5s ease-in-out`} 
      p={4} 
      borderRadius="full"
      boxShadow="0 0 20px rgba(255,255,255,0.3)"
      bg="whiteAlpha.300"
    >
      <Image src="/logo-bgremove.png" alt="TrustBeacon AI Logo" boxSize="200px" />
    </Box>
  );
};

export default Logo;
