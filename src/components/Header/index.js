import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/authReducer";
import { UserIcon, MenuIcon } from "../../assets/Icons";

const Header = ({ openSidebar, setOpenSidebar }) => {
  const dispatch = useDispatch();
  const menuList = [
    { label: "Home", link: "#home" },
    { label: "About us", link: "#aboutus" },
    { label: "Tokenomics", link: "#tokenomics" },
    { label: "Road Map", link: "#roadmap" },
    { label: "Team", link: "#team" },
    { label: "Faq", link: "#faq" },
  ];

  const userLogout = () => {
    dispatch(logout("admin-token"));
  };

  return (
    <div className="header-camp flex top-0 left-0 right-0 w-full z-20 min-h-[90px] py-3 px-0 absolute">
      <div className="wrapWidth wrap flex items-center gap-3">
        <div className="left flex items-center">
          <Link to={"/"} className="logo-img flex items-center justify-center">
            <img src="../images/logo.svg" className="logo" />
          </Link>
        </div>
        <div className="right flex items-center justify-end gap-24">
          <div className="menu-list md:flex hidden items-center gap-8">
            {menuList.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="menu-item text-white font-pop font-normal text-base hover:text-themeColor"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:flex hidden items-center justify-center">
            <button className="btn-connect flex items-center justify-center gap-3 px-4 py-3">
              <div className="flex items-center justify-center h-3 w-3">
                <UserIcon />
              </div>
              <label className="text-white text-xs">Connect Wallet</label>
            </button>
          </div>
          <button
            className="md:hidden flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              setOpenSidebar(true);
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
