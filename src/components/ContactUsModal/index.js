import React from "react";

const ContactUsModal = ({ open, setOpen }) => {
  return (
    <div className="flex bg-[#060609] sm:w-[800px] w-[350px] h-[550px] overflow-hidden overflow-y-auto p-10">
      <div className="flex w-full gap-10 sm:flex-row flex-col ">
        <div className="sm:flex hidden flex-[0.5] ">
          <img src="./images/contactus.png" className="w-full h-72" />
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-themeColor text-3xl">Get in Touch</h1>
            <div className="border-b-2 border-themeColor w-16"></div>
          </div>
          <p className="text-xs text-white font-pop font-extralight">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
          <div className="w-full grid grid-cols-1 gap-4">
            <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 border border-white/50 rounded-md bg-transparent focus:border-themeColor font-pop text-sm font-light"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 border border-white/50 rounded-md bg-transparent focus:border-themeColor font-pop text-sm font-light"
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="p-2 border border-white/50 rounded-md bg-transparent focus:border-themeColor font-pop text-sm font-light"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-2 border border-white/50 rounded-md bg-transparent focus:border-themeColor font-pop text-sm font-light"
              />
            </div>
            <textarea
              type="text"
              placeholder="Phone Number"
              className="min-h-[120px] p-2 border border-white/50 rounded-md bg-transparent focus:border-themeColor font-pop text-sm font-light"
            />
            <button className="btn-submit flex items-center justify-center gap-3 px-4 py-3">
              <label className="text-white text-xs">Submit</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
