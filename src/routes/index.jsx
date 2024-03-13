import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import { HomeRoute } from "./HomeRouter";
import { SignInRoute } from "./SignInRouter";
import { ProductRoute } from "./ProductRouter";
import { CartRoute } from "./CartRouter";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomeRoute />} />
      <Route path="/signin/*" element={<SignInRoute />} />
      <Route
        path="/products/*"
        element={<PrivateRoute element={<ProductRoute />} />}
      />
      <Route
        path="/cart/*"
        element={<PrivateRoute element={<CartRoute />} />}
      />
    </Routes>
  );
};
