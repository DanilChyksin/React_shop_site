import React, { useEffect } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AppRoutes from "./components/routes/AppRoutes";
import Sidebar from "./components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./slice/categoriesSlice";
import { fetchProducts, sortPrice } from "./slice/productsSlice";
import UserAuth from "./components/user/UserAuth";
function App() {
  const dispatch = useDispatch();
  const { close, user } = useSelector(({ user }) => user);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="app">
      {close && <UserAuth />}
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
