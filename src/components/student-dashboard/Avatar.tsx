import { Box, HStack } from "@chakra-ui/react";
import VennDiagram from "./VennDiagram";

const Avatar = () => {
  return (
    <HStack>
      <Box
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
      </Box>
      <VennDiagram />
    </HStack>
  );
};

export default Avatar;
