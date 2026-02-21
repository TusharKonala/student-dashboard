import {
  Dialog,
  Portal,
  Box,
  Button,
  VStack,
  Input,
  Text,
  IconButton,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const years = createListCollection({
  items: [
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
  ],
});

const StudentDetailsPopup = () => {
  const [open, setOpen] = useState(
    sessionStorage.getItem("studentPopupSeen") !== "true",
  );

  const [name, setName] = useState("");
  const [year, setYear] = useState("");

  const handleContinue = () => {
    sessionStorage.setItem("studentPopupSeen", "true");
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />

        <Dialog.Positioner>
          <Dialog.Content
            bg="white"
            borderRadius="lg"
            boxShadow="lg"
            p={5}
            w="90%"
            maxW="400px"
          >
            {/* Header */}
            <Dialog.Header>
              <Box
                w="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text fontWeight="semibold">Enter Your Details</Text>

                <Dialog.CloseTrigger asChild>
                  <IconButton aria-label="Close" size="xs" variant="ghost">
                    <FiX size={14} />
                  </IconButton>
                </Dialog.CloseTrigger>
              </Box>
            </Dialog.Header>

            {/* Body */}
            <Dialog.Body>
              <VStack gap={3} mt={3} align="stretch">
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                {/* Styled Select */}
                <Select.Root
                  collection={years}
                  value={year ? [year] : []}
                  onValueChange={(e) => setYear(e.value[0])}
                >
                  <Select.Trigger>
                    <Box
                      px={3}
                      py={2}
                      borderWidth="1px"
                      borderRadius="md"
                      cursor="pointer"
                      w="100%"
                    >
                      <Select.ValueText
                        placeholder="JEE Exam Year"
                        color="gray.200"
                      />
                    </Box>
                  </Select.Trigger>

                  <Select.Content>
                    {years.items.map((year) => (
                      <Select.Item
                        color="gray.200"
                        item={year}
                        key={year.value}
                      >
                        {year.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>

                <Input placeholder="School / Coaching (Optional)" />
              </VStack>
            </Dialog.Body>

            {/* Footer */}
            <Dialog.Footer mt={4}>
              <Button
                bg="#5D5FEF"
                color="white"
                w="100%"
                _hover={{ bg: "#4c4fdc" }}
                onClick={handleContinue}
                disabled={!name.trim() || !year}
              >
                Continue
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default StudentDetailsPopup;
