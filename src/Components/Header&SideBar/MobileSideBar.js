import React, { useEffect, useState } from "react";
import { RiExportFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { TbUserScreen } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Mobilemenu } from "../ReduxStore/Slices/toggleSlice";

const MobileSideBar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const mobilebarToggle = useSelector((state) => state.toggle.mobileMenuToggle);
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    // Add 'modal-open' class to body when mobilebarToggle is true
    if (mobilebarToggle) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Clean up: Remove 'modal-open' class when component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [mobilebarToggle]); // Run this effect whenever mobilebarToggle changes

  return (
    mobilebarToggle && (
      <div className="w-full md:hidden flex flex-col gap-3 bg-gray-200 h-screen overflow-y-hidden">
        {/* Profile Section */}
        <div className="border p-3 flex justify-around bg-white text-black">
          <img
            className="w-10 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1imiVM8S3xrhemabq6IZYCUfJTLWABjE_1Q&s"
            alt="Profile"
          />
           <span className="font-bold ">Abhishek Kumar</span>
           <img src="" alt="logo" />
         
        </div>

        {/* Navigation Links */}
        <div className="border p-3 flex flex-col gap-6 bg-white">
          {/* My Orders */}
          <Link
            to="/profile/orders"
            className={`flex items-center gap-6 border-b p-5 cursor-pointer hover:text-blue-500 ${
              activeItem === "/profile/orders" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleItemClick("/profile/orders")}
          >
            <RiExportFill className="text-xl" />
            <span className="font-medium">MY ORDERS</span>
          </Link>

          {/* all categories */}

          <Link
            to="/profile/mobileCategoryHeader"
            className={`flex items-center gap-6 border-b p-5 cursor-pointer  `}
            onClick={() => {handleItemClick("/profile/mobileCategoryHeader")
                dispatch(Mobilemenu({
                    mobileMenuToggle : false
                  }))
            }}
          >
            <RiExportFill className="text-xl" />
            <span className="font-medium">All Categories</span>

          </Link>


          {/* Coupons */}

          <Link
            to="/profile/mobileCategoryHeader"
            className={`flex items-center gap-6 border-b p-5 cursor-pointer hover:text-blue-500 `}
            onClick={() => {handleItemClick("/profile/mobileCategoryHeader")
                dispatch(Mobilemenu({
                    mobileMenuToggle : false
                  }))
            }}
          >
            <RiExportFill className="text-xl" />
            <span className="font-medium">Coupons</span>

          </Link>


          {/* My Cart */}

          <Link
            to="/profile/mobileCategoryHeader"
            className={`flex items-center gap-6 border-b p-5 cursor-pointer hover:text-blue-500 `}
            onClick={() => {handleItemClick("/profile/mobileCategoryHeader")
                dispatch(Mobilemenu({
                    mobileMenuToggle : false
                  }))
            }}
          >
            <RiExportFill className="text-xl" />
            <span className="font-medium">My Cart</span>

          </Link>

          {/* My Whishlist */}

          <Link
            to="/profile/mobileCategoryHeader"
            className={`flex items-center gap-6 border-b p-5 cursor-pointer hover:text-blue-500 `}
            onClick={() => {handleItemClick("/profile/mobileCategoryHeader")
                dispatch(Mobilemenu({
                    mobileMenuToggle : false
                  }))
            }}
          >
            <RiExportFill className="text-xl" />
            <span className="font-medium">All Categories</span>

          </Link>

          {/* My Account */}

          <Link
            to="/profile/mobileCategoryHeader"
            className={`flex items-center gap-6 border-b p-5 cursor-pointer hover:text-blue-500 `}
            onClick={() => {handleItemClick("/profile/mobileCategoryHeader")
                dispatch(Mobilemenu({
                    mobileMenuToggle : false
                  }))
            }}
          >
            <RiExportFill className="text-xl" />
            <span className="font-medium"> My Account</span>

          </Link>

          {/* My Notification */}

          <Link
            to="/profile/mobileCategoryHeader"
            className={`flex items-center gap-6 border-b p-5 cursor-pointer hover:text-blue-500 `}
            onClick={() => {handleItemClick("/profile/mobileCategoryHeader")
                dispatch(Mobilemenu({
                    mobileMenuToggle : false
                  }))
            }}
          >
            <RiExportFill className="text-xl" />
            <span className="font-medium"> My Notification</span>

          </Link>

         


        </div>

        
      </div>
    )
  );
};

export default MobileSideBar;
