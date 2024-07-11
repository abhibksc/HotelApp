import React from "react";
import { Link } from "react-router-dom";

const MobileCategoryHeader = () => {
  return (
    <header className="bg-white text-black py-4 px-7 font-roboto md:hidden">
      <div className="container mx-auto">
        <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Staples */}
          <div className="relative group">
            <div className="text-center">
              <img
                className="w-16 h-16 mx-auto"
                src="https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100"
                alt=""
              />
              <span className="font-semibold">Staples</span>
            </div>
            {/* <div className="absolute top-20 hidden left-0 bg-gray-300 shadow-lg rounded-lg mt-2 w-[300px] p-3 group-hover:flex z-10">
              <div className="container mx-auto flex flex-col">
                <div className="relative">
                  <h3 className="font-bold text-gray-800 mb-2">Manage Users</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/admin/orders">Orders</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          {/* Snacks & Beverages */}
          <div className="relative group">
            <div className="text-center">
              <img
                className="w-16 h-16 mx-auto"
                src="https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100"
                alt=""
              />
              <span className="font-semibold">Snacks & Beverages</span>
            </div>
            {/* <div className="absolute top-20 hidden left-0 bg-gray-300 shadow-lg rounded-lg mt-2 w-[300px] p-3 group-hover:flex z-10">
              <div className="container mx-auto flex flex-col">
                <div className="relative">
                  <h3 className="font-bold text-gray-800 mb-2">Manage Users</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/admin/orders">Orders</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          {/* Personal & Baby Care */}
          <div className="relative group">
            <div className="text-center">
              <img
                className="w-16 h-16 mx-auto"
                src="https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100"
                alt=""
              />
              <span className="font-semibold">Personal & Baby Care</span>
            </div>
            {/* <div className="absolute top-20 hidden left-0 bg-gray-300 shadow-lg rounded-lg mt-2 w-[300px] p-3 group-hover:flex z-10">
              <div className="container mx-auto flex flex-col">
                <div className="relative">
                  <h3 className="font-bold text-gray-800 mb-2">Manage Users</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/admin/orders">Orders</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          {/* Dairy & Eggs */}
          <div className="relative group">
            <div className="text-center">
              <img
                className="w-16 h-16 mx-auto"
                src="https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100"
                alt=""
              />
              <span className="font-semibold">Dairy & Eggs</span>
            </div>
            {/* <div className="absolute top-20 hidden left-0 bg-gray-300 shadow-lg rounded-lg mt-2 w-[300px] p-3 group-hover:flex z-10">
              <div className="container mx-auto flex flex-col">
                <div className="relative">
                  <h3 className="font-bold text-gray-800 mb-2">Manage Users</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/admin/orders">Orders</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>

          {/* Packages & Food */}
          <div className="relative group">
            <div className="text-center">
              <img
                className="w-16 h-16 mx-auto"
                src="https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100"
                alt=""
              />
              <span className="font-semibold">Packages & Food</span>
            </div>
            {/* <div className="absolute top-20 hidden left-0 bg-gray-300 shadow-lg rounded-lg mt-2 w-[300px] p-3 group-hover:flex z-10">
              <div className="container mx-auto flex flex-col">
                <div className="relative">
                  <h3 className="font-bold text-gray-800 mb-2">Manage Users</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                      <Link to="/admin/orders">Orders</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileCategoryHeader;
