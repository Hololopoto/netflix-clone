import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";

import Mobil from "./Mobil";
import AccountMenu from "./AccountMenu";

const Navbar = () => {
  const [showMobil, setShowMobil] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setShowMobil((toggle) => !toggle);
  }, []);
  const [showAccount, setShowAccount] = useState(false);
  const toggleAccountMenu = useCallback(() => {
    setShowAccount((toggle) => !toggle);
  }, []);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowBar(true);
      } else {
        setShowBar(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const [bar, setBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 150) {
        setBar(true);
      } else if (window.scrollY === 0) {
        setBar(true);
      } else {
        setBar(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <nav className="w-full fixed z-50 ">
      <div
        className={`px-4 md:px-16 py-6 flex  flex-row items-center transition ${
          bar && "bg-zinc-700 bg-opacity-40"
        }  duration-500 ${showBar && "bg-black"} `}>
        <img
          className="h-4 lg:h-7"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="#"
        />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <Mobil visible={showMobil} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="#"
              />
            </div>
            <BsChevronDown className="text-white transition" />
            <AccountMenu visible={showAccount} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
