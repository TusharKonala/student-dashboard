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
    <Grid
      templateRows="repeat(7, 1fr)"
      templateColumns="repeat(52, 1fr)"
      gap={1.5}
    >
      {days.map((day, rowIndex) => (
        <Text
          key={day}
          gridColumn="1"
          gridRow={rowIndex + 2}
          fontSize="xs"
          lineHeight="14px"
        >
          {day}
        </Text>
      ))}
      {months.map((month, colIndex) => (
        <Text
          key={month}
          gridColumn={colIndex * 4 + 2}
          gridRow="1"
          fontSize="xs"
        >
          {month}
        </Text>
      ))}
      {user.daysActive.map((active, index) => {
        const gridColumn = Math.floor(index / 7) + 2;
        const gridRow = (index % 7) + 2;

        return (
          <Box
            key={index}
            gridColumn={gridColumn}
            gridRow={gridRow}
            w="14px"
            h="14px"
            borderRadius="sm"
            bg={active ? "#5D5FEF" : "#EDF2F7"}
          />
        );
      })}
    </Grid>
  );
};

export default StreakCalendar;
