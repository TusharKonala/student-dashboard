import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FiBell } from "react-icons/fi";

const notifications = [
  {
    message: "Assignment 12 has been evaluated",
    time: "2h ago",
  },
  {
    message: "New mock test available",
    time: "5h ago",
  },
  {
    message: "Rank updated after Test 3",
    time: "1d ago",
  },
];

const Notifications = () => {
  const [hasUnread, setHasUnread] = useState(true);
  return (
    <Box
      bg="white"
      p={5}
      borderRadius="lg"
      boxShadow="sm"
      w={{ base: "100%", sm: "320px" }}
    >
      <VStack align="start" gap={4}>
        <HStack justify="space-between" w="100%">
          <Text fontWeight="semibold">Notifications</Text>

          <Box position="relative">
            <FiBell size={18} />

            {hasUnread && (
              <Box
                position="absolute"
                top="-2px"
                right="-2px"
                w="8px"
                h="8px"
                borderRadius="full"
                bg="red.400"
              />
            )}
          </Box>
        </HStack>

        <VStack align="start" gap={3} w="100%">
          {notifications.map((item, index) => (
            <HStack key={index} align="start">
              {/* Dot Indicator */}
              <Box w="8px" h="8px" borderRadius="full" bg="#5D5FEF" mt="6px" />

              {/* Text Block */}
              <VStack align="start" gap={0}>
                <Text fontSize="sm">{item.message}</Text>
                <Text fontSize="xs" color="gray.500">
                  {item.time}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Notifications;
