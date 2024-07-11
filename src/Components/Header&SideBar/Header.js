import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { activePages } from "../ReduxStore/Slices/auth";
import { FaRegUserCircle, FaHeart, FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoIosMenu } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { MdCardGiftcard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Mobilemenu } from "../ReduxStore/Slices/toggleSlice";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const loginActive = useSelector((state) => state.auth.loginPageActive);
  const signupPageActive = useSelector((state) => state.auth.signupPageActive);
  const mobilebarToggle = useSelector((state) => state.toggle.mobileMenuToggle);
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const register = useSelector((state) => state.auth.registered);
  const alldata = useSelector((state) => state.auth);
  console.log(alldata);


  



  const getUsernameFromEmail = (email) => {
    if (email) {
      return email.split("@")[0];
    }
    return "";
  };

  const ExtractedMail = getUsernameFromEmail(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginActive && !signupPageActive) {
      dispatch(activePages({ login: true, signup: false }));
    }
  };

  const handleMenu = () => {
    if (mobilebarToggle === false) {
      dispatch(
        Mobilemenu({
          mobileMenuToggle: true,
        })
      );
    } else {
      dispatch(
        Mobilemenu({
          mobileMenuToggle: false,
        })
      );
    }
  };

  return (
    <header className="bg-green-500 text-white py-4 px-10 w-full ">
      <div className="md:container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex w-40 justify-between">
            <IoIosMenu className="w-6 h-6 md:hidden " onClick={handleMenu} />

            <Link to="/" className="md:text-2xl font-bold">
              Grocery App
            </Link>
          </div>
          <div className="ml-10 hidden md:flex items-center relative">
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="rounded-lg w-96 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-4 text-gray-500" />
          </div>
        </div>
        <ul className="flex md:pr-40 gap-4">
          <li className="relative group mt-1">
            <h1
              className="hover:text-blue-700 cursor-pointer"
              onClick={() => navigate("/admin")}
            >
              Admin
            </h1>
          </li>

          <li className="relative z-20 group mt-1 ">
            <h1 className="hover:text-blue-700 cursor-pointer">
              {(email && email) ||
                (name && name) ||
                (!email && !name && "Login")}
            </h1>
            <div className="absolute top-5 p-2 left-0 hidden bg-gray-100 shadow-lg rounded-lg mt-2 w-56 py-4 group-hover:block z-10">
              <ul className="text-black flex flex-col gap-4 cursor-pointer">
                {!register && (
                  <li
                    className="group hover:text-blue-500 border-b-2 py-2 "
                    onClick={handleLogin}
                  >
                    <div className="flex gap-2">
                      <BiLogInCircle className="mt-1" />
                      <span>Login</span>
                    </div>
                  </li>
                )}
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div
                    className="flex gap-2"
                    onClick={() => navigate("/profile")}
                  >
                    <FaRegUserCircle className="mt-1" />
                    <span >My Profile</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div className="flex gap-2">
                    <IoIosNotifications className="mt-1" />
                    <span>Notification</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div className="flex gap-2">
                    <FaHeart className="mt-1" />
                    <span>Wishlist</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div className="flex gap-2">
                    <MdCardGiftcard className="mt-1" />
                    <span>Gift Card</span>
                  </div>
                </li>
                {register && (
                  <li className="group hover:text-blue-500 ">
                    <div className="flex gap-2">
                      <IoMdLogOut className="mt-1" />
                      <span
                        onClick={() => {
                          localStorage.clear();
                          dispatch(
                            activePages({
                              login: true,
                              signup: false,
                            })
                          );
                        }}
                      >
                        Logout
                      </span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </li>

          <li className="relative z-20 group hidden md:block mt-1 cursor-pointer  hover:text-blue-700">
            <h1>More</h1>
            <div className="absolute top-5 p-2  hidden bg-gray-100 shadow-lg  rounded-md mt-2 w-56 group-hover:block z-10">
              <ul className="text-black flex flex-col gap-4 cursor-pointer p-2 ">
                <li className="group hover:text-blue-500 border-b-2 py-2 " onClick={handleLogin}>
                  <div className="flex gap-2">
                    <BiLogInCircle className="mt-1" />
                    <span>Login</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div className="flex gap-2">
                    <FaRegUserCircle className="mt-1" />
                    <span className="font-extralight ">My Profile</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div className="flex gap-2">
                    <IoIosNotifications className="mt-1" />
                    <span>Notification</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div className="flex gap-2">
                    <FaHeart className="mt-1" />
                    <span>Wishlist</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 border-b-2 py-2">
                  <div className="flex gap-2">
                    <MdCardGiftcard className="mt-1" />
                    <span>Gift Card</span>
                  </div>
                </li>
                <li className="group hover:text-blue-500 ">
                  <div className="flex gap-2">
                    <IoMdLogOut className="mt-1" />
                    <span>Logout</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <MdOutlineShoppingCart className="mt-1 w-7 h-7" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
