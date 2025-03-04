import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AuthLayout from "./components/ui/auth/layout";
import { Route, Routes } from "react-router-dom";
import AdminDashbord from "./pages/auth/admin-view/dashboard";
import AdminOrders from "./pages/auth/admin-view/orders";
import AdminFeatures from "./pages/auth/admin-view/features";
import AdminProducts from "./pages/auth/admin-view/products";
import AdminLayout from "./components/ui/admin/layout";
import ShoppingLayout from "./components/ui/shopping-view/layout";
import NotFound from "./pages/not-found/not-found";
import ShoppingHome from "./pages/auth/shopping-view/home";
import ShoppingListing from "./pages/auth/shopping-view/listing";
import ShoppingCheckout from "./pages/auth/shopping-view/checkout";
import ShoppingAccount from "./pages/auth/shopping-view/account";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        {/* common components */}
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashbord />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
            <Route path="products" element={<AdminProducts />} />
          </Route>

          <Route path="/shop" element={<ShoppingLayout />}>
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listings" element={<ShoppingListing />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="account" element={<ShoppingAccount />} />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
