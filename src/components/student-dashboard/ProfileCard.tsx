import {
  Box,
  VStack,
  Text,
  Avatar,
  IconButton,
  HStack,
  Stat,
  Input,
} from "@chakra-ui/react";
import { FiEdit2 } from "react-icons/fi";
import { useRef, useState } from "react";

const ProfileCard = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  return (
    <Box
      bg="white"
      p={5}
      borderRadius="lg"
      boxShadow="sm"
      w="100%"
      maxW="260px"
    >
      <VStack gap={4} align="center">
        {/* Avatar + Edit */}
        <Box position="relative">
          <Avatar.Root size="xl">
            <Avatar.Image src={image ?? undefined} />
            <Avatar.Fallback name="Tushar Konala" />
          </Avatar.Root>

          <IconButton
            aria-label="Upload Image"
            size="2xs"
            position="absolute"
            bottom="0"
            right="0"
            borderRadius="full"
            bg="#D1E4F8"
            _hover={{ bg: "#A5C9ED" }}
            onClick={() => fileInputRef.current?.click()}
          >
            <FiEdit2 size={12} />
          </IconButton>

          <Input
            type="file"
            accept="image/*"
            display="none"
            ref={fileInputRef}
            onChange={handleImageUpload}
          />
        </Box>

        {/* Name */}
        <VStack gap={0}>
          <Text fontWeight="semibold">Tushar Konala</Text>
          <Text fontSize="sm" color="gray.500">
            JEE Aspirant
          </Text>
        </VStack>

        {/* Stats */}
        <HStack w="100%" justify="space-between">
          <Stat.Root display="flex" flexDirection="column" alignItems="center">
            <Stat.Label>Accuracy</Stat.Label>
            <Stat.ValueText>78%</Stat.ValueText>
          </Stat.Root>

          <Stat.Root display="flex" flexDirection="column" alignItems="center">
            <Stat.Label>Study Hours</Stat.Label>
            <Stat.ValueText>124</Stat.ValueText>
          </Stat.Root>

          <Stat.Root display="flex" flexDirection="column" alignItems="center">
            <Stat.Label>Rank</Stat.Label>
            <Stat.ValueText>AIR 7</Stat.ValueText>
          </Stat.Root>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
