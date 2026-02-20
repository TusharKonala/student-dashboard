import { Box, Grid, HStack, VStack, Text } from "@chakra-ui/react";

const user = {
  name: "Tushar Konala",

  daysActive: Array.from({ length: 365 }, () => Math.random() > 0.7),
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const StreakCalendar = () => {
  return (
    <VStack align="start" spacing={2}>
      {/* Month Labels */}
      <HStack spacing={6} pl="42px">
        {months.map((month) => (
          <Text key={month} fontSize="xs">
            {month}
          </Text>
        ))}
      </HStack>
      <HStack align="start" spacing={2}>
        {/* Day Labels */}
        <VStack spacing={1.5}>
          {days.map((day) => (
            <Text key={day} fontSize="xs" h="14px">
              {day}
            </Text>
          ))}
        </VStack>
        <Grid
          templateRows="repeat(7, 1fr)"
          templateColumns="repeat(52, 1fr)"
          gap={1.5}
        >
          {user.daysActive.map((active, index) => (
            <Box
              key={index}
              w="14px"
              h="14px"
              borderRadius="sm"
              bg={active ? "#5D5FEF" : "#EDF2F7"}
            />
          ))}
        </Grid>
      </HStack>
    </VStack>
  );
};

export default StreakCalendar;
