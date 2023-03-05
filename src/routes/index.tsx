// react router dom package
import { Route, Routes, Navigate } from "react-router-dom";

// import files
import { DisplayProducts } from "../pages/products";
import { DisplayShoppingCart } from "../pages/Cart";

export const RoutesCM = () => {
  return (
    <Routes>
      <Route path="/" element={<DisplayProducts />} />

      <Route path="/cart" element={<DisplayShoppingCart />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
