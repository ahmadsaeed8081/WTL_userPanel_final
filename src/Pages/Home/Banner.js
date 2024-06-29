import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useGetBannersQuery } from "../../store/services/bannerService";

const Banner = () => {
  const { data: bannerList, isLoading } = useGetBannersQuery();
  console.log("bannerList...", bannerList);
  // const bannerList = [{}, {}, {}, {}, {}];
  // Helper function to convert array buffer to Base64
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  return (
    <div className="banner-section flex py-20">
      <div className="wrap wrapWidth flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-white md:text-2xl text-xl md:text-start text-center">
            ANNOUNCEMENT
          </h1>
          <img src="./images/separator.svg" alt="separator" className="w-20" />
        </div>
        <div className="bg-[#1B1B1B] flex items-center min-h-24">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Prevents autoplay from being disabled after user interactions
            }}
            pagination={{
              clickable: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {bannerList?.data?.map((item, index) => (
              <SwiperSlide key={index}>
                {item.img &&
                item.img.contentType &&
                item.img.data &&
                item.img.data.data ? (
                  <div
                    className="banner-image flex items-center gap-1"
                    // style={{ backgroundImage: `url(/images/b1.webp)` }}
                    style={{
                      backgroundImage: `url(data:${
                        item.img.contentType
                      };base64,${arrayBufferToBase64(item.img.data.data)})`,
                    }}
                  />
                ) : (
                  <div>No Image</div>
                )}
                <div className="row-item flex flex-1 items-center font-pop text-xs text-white font-normal">
                  {/* <img
                      src={`data:${
                        item.img.contentType
                      };base64,${arrayBufferToBase64(item.img.data.data)}`}
                      alt="Banner"
                      className="h-20 w-32 object-contain"
                    /> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
