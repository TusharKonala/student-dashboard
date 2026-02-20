import { Box, HStack } from "@chakra-ui/react";
import VennDiagram from "./vennDiagram";

const Avatar = () => {
  return (
    <HStack>
      <Box> Avatar Image</Box>
      <VennDiagram />
    </HStack>
  );
};

export default Avatar;
