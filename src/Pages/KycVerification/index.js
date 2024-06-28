import React, { useState } from "react";
import Layout from "../../routes/Layout";
import { UploadIcon } from "../../assets/Icons";

const KycVerification = () => {
  const [selectedFirstFile, setSelectedFistFile] = useState();
  const [selectedSecondFile, setSelectedSecondFile] = useState();
  return (
    <Layout>
      <div className="kyc-verification flex min-h-screen bg-[#0E0F14] sm:py-[200px] py-[100px]">
        <div className="wrap flex flex-col gap-14 w-full sm:p-14 p-8 max-w-[1200px]">
          <div className="flex flex-col rounded-lg border border-dotted border-themeColor sm:p-8 p-5 sm:gap-10 gap-5">
            <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
              <input
                type="text"
                className="p-3 bg-[#595B61]/30 border border-white/50 font-pop text-sm rounded-lg focus:border-themeColor"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="p-3 bg-[#595B61]/30 border border-white/50 font-pop text-sm rounded-lg focus:border-themeColor"
                placeholder="Enter Email"
              />
              <input
                type="text"
                className="p-3 bg-[#595B61]/30 border border-white/50 font-pop text-sm rounded-lg focus:border-themeColor"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="p-3 bg-[#595B61]/30 border border-white/50 font-pop text-sm rounded-lg focus:border-themeColor"
                placeholder="Country"
              />
            </div>
            <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
              <div className="flex items-center gap-10 sm:flex-row flex-col">
                <div
                  className="border border-themeColor rounded-lg p-3 text-center cursor-pointer sm:w-[280px] w-full"
                  onClick={() =>
                    document.getElementById("upload_first_file").click()
                  }
                >
                  <div className="flex items-center justify-center mb-3">
                    <UploadIcon />
                  </div>
                  <h1 className="text-white font-pop font-semibold text-xs">
                    Choose file to upload
                  </h1>
                  <h3 className="text-white font-pop font-normal text-xs">
                    Or drag it here
                  </h3>
                  <input
                    type="file"
                    accept="*"
                    title=""
                    name="image"
                    id="upload_first_file"
                    className="hidden cleanbtn"
                    onChange={(e) => {
                      setSelectedFistFile(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="flex items-center w-full">
                  {selectedFirstFile ? (
                    <img
                      src={URL.createObjectURL(selectedFirstFile)}
                      className=" h-[150px] w-full"
                    />
                  ) : (
                    <img src="/images/img1.png" className=" h-[150px] w-full" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-10 sm:flex-row flex-col">
                <div
                  className="border border-themeColor rounded-lg p-3 text-center cursor-pointer sm:w-[280px] w-full"
                  onClick={() =>
                    document.getElementById("upload_second_file").click()
                  }
                >
                  <div className="flex items-center justify-center mb-3">
                    <UploadIcon />
                  </div>
                  <h1 className="text-white font-pop font-semibold text-xs">
                    Choose file to upload
                  </h1>
                  <h3 className="text-white font-pop font-normal text-xs">
                    Or drag it here
                  </h3>
                  <input
                    type="file"
                    accept="*"
                    title=""
                    name="image"
                    id="upload_second_file"
                    className="hidden cleanbtn"
                    onChange={(e) => {
                      setSelectedSecondFile(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="flex items-center w-full">
                  {selectedSecondFile ? (
                    <img
                      src={URL.createObjectURL(selectedSecondFile)}
                      className=" h-[150px] w-full"
                    />
                  ) : (
                    <img
                      src="/images/img2.png"
                      className="h-[150px] w-[150px]"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:flex-row flex-col">
            <button className="btn-submit flex items-center justify-center gap-3 px-4 py-3">
              <label className="text-white text-xs">Cancel</label>
            </button>
            <button className="btn-submit-w flex items-center justify-center gap-3 px-4 py-3">
              <label className="text-white text-xs">Submit</label>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KycVerification;
