import { Route, Routes } from "react-router-dom";

import Cart from "../pages/Cart";

export const CartRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Cart />} />
    </Routes>
  );
};
