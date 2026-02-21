import { Container, Box, VStack, Text } from "@chakra-ui/react";

const VennDiagram = () => {
  return (
    <Container
      position="relative"
      w={{ base: "240px", md: "300px" }}
      h={{ base: "220px", md: "260px" }}
    >
      {/* Physics */}
      <Box
        position="absolute"
        left="0px"
        top="20px"
        w={{ base: "110px", md: "140px" }}
        h={{ base: "110px", md: "140px" }}
        borderRadius="full"
        bg="#7FB3E6"
        opacity={0.85}
        padding="10px"
      >
        <Text>Physics</Text>
        <Text fontWeight="bold">72%</Text>
      </Box>

      {/* Chemistry */}
      <Box
        position="absolute"
        left="93px"
        top="20px"
        w={{ base: "110px", md: "140px" }}
        h={{ base: "110px", md: "140px" }}
        borderRadius="full"
        bg="#7FB3E6"
        opacity={0.75}
        padding="10px"
      >
        <Text>Chemistry</Text>
        <Text fontWeight="bold">68%</Text>
      </Box>

      {/* Math */}
      <Box
        position="absolute"
        left="55px"
        top="95px"
        w={{ base: "110px", md: "140px" }}
        h={{ base: "110px", md: "140px" }}
        borderRadius="full"
        bg="#7FB3E6"
        opacity={0.65}
        padding="10px"
      >
        <VStack h="100%" justify="center" gap={0}>
          <Text>Maths</Text>
          <Text fontWeight="bold">81%</Text>
        </VStack>
      </Box>
      <Box
        position="absolute"
        left="118px"
        top="112px"
        transform="translate(-50%, -50%)"
        zIndex={10}
        textAlign="center"
      >
        <Text fontSize="xs">Numerical</Text>
        <Text fontWeight="bold">75%</Text>
      </Box>
    </Container>
  );
};

export default VennDiagram;
