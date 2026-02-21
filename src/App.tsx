import { Grid, GridItem } from "@chakra-ui/react";
import Avatar from "./components/student-dashboard/Avatar";
import ProfileCard from "./components/student-dashboard/ProfileCard";
import StreakCalendar from "./components/student-dashboard/StreakCalendar";
import Notifications from "./components/student-dashboard/Notifications";
import StudentDetailsPopup from "./components/student-dashboard/StudentDetailsPopup";

const App = () => {
  return (
    <>
      <StudentDetailsPopup />
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        templateRows="auto"
        justifyItems="center"
        gap={6}
        p={6}
        bg="#F7FAFC"
        w="100%"
        minH="100vh"
        maxW="100vw"
        overflow="auto"
      >
        {/* Row 1 */}
        <GridItem>
          <Avatar />
        </GridItem>

        <GridItem>
          <ProfileCard />
        </GridItem>

        {/* Row 2 */}
        <GridItem>
          <StreakCalendar />
        </GridItem>

        <GridItem>
          <Notifications />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
