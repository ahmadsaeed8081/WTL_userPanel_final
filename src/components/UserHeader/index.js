import React from "react";
import { MenuIcon } from "../../assets/Icons";

const UserHeader = ({ setOpenSidebar, pageTitle }) => {
  return (
    <div className="user-header-camp w-full flex min-h-[99px] fixed bg-[#0E0F14] border-b border-[#929292] py-2 px-6 z-40">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-base text-white">
          {pageTitle ? pageTitle : "Dashboard"}
        </h1>
        <div
          className="sm:hidden flex  items-center justify-center h-5 w-5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setOpenSidebar(true);
          }}
        >
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
