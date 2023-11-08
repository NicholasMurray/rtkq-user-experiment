import { Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/users/Users";
import { UserPage } from "../pages/user/User";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<UsersPage />} />
      <Route path="/users/:userId" element={<UserPage />} />
    </Routes>
  );
};
