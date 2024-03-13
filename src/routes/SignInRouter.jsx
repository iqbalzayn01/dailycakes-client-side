import { Route, Routes } from "react-router-dom";

import SignIn from "../pages/Signin";

export const SignInRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
};
