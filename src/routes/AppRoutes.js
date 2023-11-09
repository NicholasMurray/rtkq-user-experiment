import { Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/users/Users";
import { UserPage } from "../pages/user/User";
import { EditUserPage } from "../pages/user/EditUser";
import { EditUserJourneyPart1Page } from "../pages/user/edit-journey/EditUserJourneyPart1";
import { EditUserJourneyPart2Page } from "../pages/user/edit-journey/EditUserJourneyPart2";
import { EditUserJourneySummaryPage } from "../pages/user/edit-journey/EditUserJourneySummary";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<UsersPage />} />
      <Route path="/users/user/:userId" element={<UserPage />} />
      <Route path="/users/user/edit/:userId" element={<EditUserPage />} />
      <Route
        path="/users/user/edit/part1"
        element={<EditUserJourneyPart1Page />}
      />
      <Route
        path="/users/user/edit/part2"
        element={<EditUserJourneyPart2Page />}
      />
      <Route
        path="/users/user/edit/summary"
        element={<EditUserJourneySummaryPage />}
      />
    </Routes>
  );
};
