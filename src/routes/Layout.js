import React, { useState } from "react";
import UserHeader from "../components/UserHeader";
import Sidebar from "../components/Sidebar";
import SidebarDashboard from "../components/SidebarDashboard";

const Layout = ({ children, pageTitle }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [openDashboardSidebar, setOpenDashboardSidebar] = useState(false);

  return (
    <div
      className={`dashboard-page flex flex-col relative ${
        openSidebar ? "full-open" : ""
      }`}
    >
      <Sidebar />
      <SidebarDashboard
        openSidebar={openDashboardSidebar}
        setOpenSidebar={setOpenDashboardSidebar}
      />
      <div className="pages-block flex flex-col relative h-full">
        <UserHeader
          pageTitle={pageTitle}
          openSidebar={openDashboardSidebar}
          setOpenSidebar={setOpenDashboardSidebar}
        />
        <section>{children}</section>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Layout;
