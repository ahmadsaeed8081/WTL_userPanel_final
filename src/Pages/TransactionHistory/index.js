import React from "react";
import Layout from "../../routes/Layout";

const TransactionHistory = () => {
  const tblData = [
    {
      id: "01",
      status: "withdraw",
      amount: "$59.00",
      time: "12.60 am",
      active: "Approved",
    },
    {
      id: "02",
      status: "withdraw",
      amount: "$59.00",
      time: "12.60 am",
      active: "Approved",
    },
    {
      id: "03",
      status: "withdraw",
      amount: "$59.00",
      time: "12.60 am",
      active: "Approved",
    },
    {
      id: "04",
      status: "withdraw",
      amount: "$59.00",
      time: "12.60 am",
      active: "Approved",
    },
    {
      id: "05",
      status: "withdraw",
      amount: "$59.00",
      time: "12.60 am",
      active: "Approved",
    },
    {
      id: "06",
      status: "withdraw",
      amount: "$59.00",
      time: "12.60 am",
      active: "Approved",
    },
  ];
  return (
    <Layout pageTitle="History">
      <div className="history-page flex min-h-screen bg-[#0E0F14] py-[200px]">
        <div className="wrap flex flex-col items-center gap-14 w-full p-6">
          <div className="flex flex-col w-full gap-6">
            <div className="tbl flex flex-col items-center w-full border border-white/30">
              <div className="row flex items-center gap-3 bg-themeColor p-3 w-full">
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium">
                  ID
                </div>
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium text-center">
                  Status
                </div>
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium text-center">
                  Amount
                </div>
                <div className="row-item flex flex-1 items-center uppercase font-pop text-sm text-black font-medium text-center">
                  Time
                </div>

                <div className="row-item flex flex-[0.5] items-center uppercase font-pop text-sm text-black font-medium text-center">
                  Active
                </div>
              </div>
              {tblData.map((item, index) => (
                <div
                  key={index}
                  className="row flex items-center gap-3 p-3 w-full"
                >
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.id}
                  </div>
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.status}
                  </div>
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.amount}
                  </div>
                  <div className="row-item flex flex-1 items-center uppercase font-pop text-xs text-white font-normal">
                    {item.time}
                  </div>

                  <div className="row-item flex flex-[0.5] items-center uppercase font-pop text-xs text-white font-normal">
                    {item.active}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransactionHistory;
