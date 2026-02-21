import { Box, HStack, Container } from "@chakra-ui/react";
import VennDiagram from "./VennDiagram";

const Avatar = () => {
  return (
    <HStack>
      <Container
        h={{ base: "220px", md: "260px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          as="i"
          className="fa-solid fa-user"
          fontSize={{ base: "100px", md: "140px" }}
          color="#A5C9ED"
        />
      </Container>
      <VennDiagram />
    </HStack>
  );
};

export default Avatar;
