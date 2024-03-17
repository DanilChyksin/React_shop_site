import React from "react";
import Home from "../home/Home";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import SingleProduct from "../products/SingleProduct";
import Profile from "../user/Profile";
import Cart from "../cart/Cart";
import SingleCategory from "../category/SingleCategory";
export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    </Routes>
  );
}
