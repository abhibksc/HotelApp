import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { IoIosArrowForward } from "react-icons/io";

const MegaMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (index) => {
    setDropdownOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleSubmenu = (parentIndex, index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [parentIndex]: {
        ...prev[parentIndex],
        [index]: !prev[parentIndex]?.[index],
      },
    }));
  };

  const menuItems = [
    {
      title: "Staples",
      imgSrc:
        "https://rukminim2.flixcart.com/flap/128/128/image/50474c.jpg?q=100",
      dropdownIndex: 1,
      submenus: [
        {
          title: "Dals & Pulses",
          submenuIndex: 0,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
        {
          title: "Ghee & Oils",
          submenuIndex: 1,
          subItems: [
            { title: "All", link: "#" },
            { title: "Blended Oil", link: "#" },
            { title: "Ghee", link: "#" },
            { title: "Sunflower Oil", link: "#" },
            { title: "Rice Bran", link: "#" },
            { title: "Olive Oil", link: "#" },
            { title: "Groundnut Oil", link: "#" },

          ],
        },
        {
          title: "Atta & Flours",
          submenuIndex: 2,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Masalas & Spices",
          submenuIndex: 3,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Rice and Rice Product",
          submenuIndex: 4,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Dry Fruits and nuts",
          submenuIndex: 5,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
      ],
    },
    {
      title: "Snacks & Beverages",
      imgSrc:
        "https://rukminim2.flixcart.com/flap/128/128/image/9fbd36.jpg?q=100",
      dropdownIndex: 2,
      submenus: [
        {
          title: "Dals & Pulses",
          submenuIndex: 1,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
        {
          title: "Ghee & Oils",
          submenuIndex: 2,
          subItems: [
            { title: "All", link: "#" },
            { title: "Blended Oil", link: "#" },
            { title: "Ghee", link: "#" },
            { title: "Sunflower Oil", link: "#" },
            { title: "Rice Bran", link: "#" },
            { title: "Olive Oil", link: "#" },
            { title: "Groundnut Oil", link: "#" },

          ],
        },
        {
          title: "Atta & Flours",
          submenuIndex: 3,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Masalas & Spices",
          submenuIndex: 4,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Rice and Rice Product",
          submenuIndex: 5,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Dry Fruits and nuts",
          submenuIndex: 6,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
      ],
    },
    {
      title: "Personal & Baby Care",
      imgSrc:
        "https://rukminim2.flixcart.com/flap/128/128/image/7670e2.jpg?q=100",
      dropdownIndex: 3,
      submenus: [
        {
          title: "Dals & Pulses",
          submenuIndex: 1,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
        {
          title: "Ghee & Oils",
          submenuIndex: 2,
          subItems: [
            { title: "All", link: "#" },
            { title: "Blended Oil", link: "#" },
            { title: "Ghee", link: "#" },
            { title: "Sunflower Oil", link: "#" },
            { title: "Rice Bran", link: "#" },
            { title: "Olive Oil", link: "#" },
            { title: "Groundnut Oil", link: "#" },

          ],
        },
        {
          title: "Atta & Flours",
          submenuIndex: 3,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Masalas & Spices",
          submenuIndex: 4,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Rice and Rice Product",
          submenuIndex: 5,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Dry Fruits and nuts",
          submenuIndex: 6,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
      ],
    },
    {
      title: "Packages & Food",
      imgSrc:
        "https://rukminim2.flixcart.com/flap/128/128/image/ac8550.jpg?q=100",
      dropdownIndex: 4,
      submenus: [
        {
          title: "Dals & Pulses",
          submenuIndex: 1,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
        {
          title: "Ghee & Oils",
          submenuIndex: 2,
          subItems: [
            { title: "All", link: "#" },
            { title: "Blended Oil", link: "#" },
            { title: "Ghee", link: "#" },
            { title: "Sunflower Oil", link: "#" },
            { title: "Rice Bran", link: "#" },
            { title: "Olive Oil", link: "#" },
            { title: "Groundnut Oil", link: "#" },

          ],
        },
        {
          title: "Atta & Flours",
          submenuIndex: 3,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Masalas & Spices",
          submenuIndex: 4,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Rice and Rice Product",
          submenuIndex: 5,
          subItems: [
            { title: "All", link: "#" },
            { title: "Wheat Atta", link: "#" },
            { title: "Rice Flour", link: "#" },
            { title: "Maida", link: "#" },
            { title: "Other Flours", link: "#" },
            { title: "Other Grains", link: "#" },
            { title: "Rava and Sooji", link: "#" },

          ],
        },
        {
          title: "Dry Fruits and nuts",
          submenuIndex: 6,
          subItems: [
            { title: "All", link: "#" },
            { title: "Toor Dal", link: "#" },
            { title: "Urad Dal", link: "#" },
            { title: "Moong Dal", link: "#" },
            { title: "Chana Dal", link: "#" },
            { title: "Other Pulses", link: "#" },
            { title: "Soya Chunks", link: "#" },

          ],
        },
      ],
    },
    {
      title: "More",
      imgSrc:
        "https://rukminim2.flixcart.com/flap/128/128/image/ac8550.jpg?q=100",
      dropdownIndex: 5,
      submenus: [
        {
          title: "Dals & Pulses",
          submenuIndex: 1,
         
        },
        {
          title: "Ghee & Oils",
          submenuIndex: 2,
        
        },
        {
          title: "Atta & Flours",
          submenuIndex: 3,
         
        },
        {
          title: "Masalas & Spices",
          submenuIndex: 4,
        
        },
        {
          title: "Rice and Rice Product",
          submenuIndex: 5,
         
        },
        {
          title: "Dry Fruits and nuts",
          submenuIndex: 6,
         
        },
      ],
    },
  ];

  const renderSubmenu = (parentIndex, subItems ) => {
    return subItems.map((subItem, index) => (
      <li
        key={index}
        className="relative group"
        onMouseEnter={() => toggleSubmenu(parentIndex, index)}
        onMouseLeave={() => toggleSubmenu(parentIndex, index)}
      >
        <Link
          className="text-gray-900 hover:text-blue-500 hover:font-semibold py-2 px-4 whitespace-no-wrap flex items-center"
          to={subItem.link}
        >
          <div className="flex justify-between  w-full">
      
          <span>{subItem.title}</span>
          <IoIosArrowForward className={`ml-2 active:`} />

          </div>
   
        
        </Link>
        {subItem.subItems && (
          <ul
            className={`absolute ${
              submenuOpen[parentIndex]?.[index] ? "block" : "hidden"
            } bg-white p-4 lg:left-full lg:top-0 lg:w-64`}
          >
            {renderSubmenu(index, subItem.subItems ,subItem.submenuIndex)}
          </ul>
        )}
      </li>
    ));
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      return (
        <li
          key={index}
          className="nav-item relative z-10 group"
          onMouseEnter={() => {
            toggleDropdown(item.dropdownIndex);
            setHoveredItem(index);
          }}
          onMouseLeave={() => {
            toggleDropdown(item.dropdownIndex);
            setHoveredItem(null);
          }}
        >
          <Link
            className="lg:inline-block lg:mt-0 text-white hover:text-gray-300 flex items-center"
            to="#"
          >
            <div className="text-center">
              <img
                className="w-16 h-16 mx-auto hidden md:block"
                src={item.imgSrc}
                alt={item.title}
              />
              <span className="flex flex-row gap-2 text-black hover:text-blue-600">
                <span>{item.title}</span>
                <FontAwesomeIcon
                  icon={
                    dropdownOpen === item.dropdownIndex
                      ? faChevronUp
                      : faChevronDown
                  }
                  className="ml-1 text-black w-2 mt-1 hover:bg-blue-600"
                />
              </span>
            </div>
          </Link>
          {item.submenus && (
            <ul
              className={`absolute ${
                dropdownOpen === item.dropdownIndex ? "block" : "hidden"
              } text-gray-700 pt-1 group-hover:block bg-white lg:w-52 w-[25rem]`}
            >
              {renderSubmenu(item.dropdownIndex, item.submenus)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between flex-wrap px-40 py-2">
          {/* Nav Toggle Button */}
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
              onClick={() =>
                document.getElementById("main_nav").classList.toggle("hidden")
              }
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* Main Menu */}
          <div
            id="main_nav"
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block"
          >
            <ul className="lg:flex lg:justify-between text-sm lg:items-center lg:flex-grow">
              {renderMenuItems()}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MegaMenu;
