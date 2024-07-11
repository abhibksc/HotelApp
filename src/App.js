import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserAuth from "./Components/UserAuth/UserAuth";
import UserProfile from "./Components/UserProfile/UserProfile";
import ProductManagement from "./Components/ProductManagement/ProductManagement";
import DeliveryBoyApp from "./Components/DeliveryBoyApp/DeliveryBoyApp";
import HomePage from "./Components/Home/HomePage";
import Login from "./Components/UserAuth/Login";
import Register from "./Components/UserAuth/Register";
import Header from "./Components/Header&SideBar/Header";
import MobileSideBar from "./Components/Header&SideBar/MobileSideBar";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/Errors/NotFound";
import {
  logout,
  signIn,
  signup,
  updateToken,
} from "./Components/ReduxStore/Slices/auth";
import MegaMenu from "./Components/Header&SideBar/MegaMenu";
import { GetUserData } from "./Components/CrudOperations/GetOperation";

const App = () => {
  const loginPageActive = useSelector((state) => state.auth.loginpageActive);
  const signupPageActive = useSelector((state) => state.auth.signupPageActive);
  const registered = useSelector((state) => state.auth.registered);
  console.log(registered);

  const dispatch = useDispatch();



  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-200">
      <Router>
        <Routes>
          {/* Admin routes */}
          {/* <Route path="/admin/*" element={<AdminPanel />} /> */}

          {/* Main app routes */}
          <Route
            path="/*"
            element={
              <>
                <Header />

                <MobileSideBar />

                <div className="md:hidden mx-auto w-72 mt-3 rounded-md border">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    className="rounded-lg px-3 py-1"
                  />
                </div>
                <MegaMenu />
                {/* <MegaHeaderMenu /> */}

                <div className="flex-1 p-4">
                  <Routes>
                    <Route path="/auth" element={<UserAuth />} />
                    <Route path="/profile/*" element={<UserProfile />} />
                    <Route path="/products" element={<ProductManagement />} />
                    <Route path="/delivery" element={<DeliveryBoyApp />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>

                {loginPageActive && <Login />}
                {signupPageActive && <Register />}

                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
