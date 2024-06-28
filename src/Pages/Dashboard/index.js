import React from "react";
import Layout from "../../routes/Layout";
import { CopyIcon } from "../../assets/Icons";

const Dashboard = () => {
  const list = [
    { label: "total stake", value: 2.108 },
    { label: "Burn amount", value: 2105 },
    { label: "total earnings", value: 2105 },
    { label: "total referrals", value: 2105 },
    { label: "withdraw Earning", value: 2105 },
    { label: "Referral Link", value: 2105 },
  ];
  return (
    <Layout>
      <div className="user-dashboard flex min-h-screen bg-[#0E0F14] py-[100px] justify-center">
        <div className="wrap flex flex-col gap-14 w-full p-6 max-w-[1200px]">
          <div className="dashboard-grid w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {list.map((item, index) => (
              <div
                key={index}
                className="grid-item flex flex-col items-center justify-center gap-3"
              >
                <h1 className="text-white text-xl capitalize">{item.label}</h1>
                <h3 className="text-white text-base">{item.value}</h3>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="ref-link-box flex items-center gap-4 py-3 px-8">
              <h1 className="text-white text-sm">
                Referral Link: JQiwougLM2309A5
              </h1>
              <div className="flex items-center justify-center h-4 w-4 cursor-pointer">
                <CopyIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
