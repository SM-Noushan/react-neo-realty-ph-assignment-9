import { Button, Typography, Input } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const BannerHome = () => {
  const swiperCSS =
    "flex justify-center *:object-cover *:w-2/3 *:rounded-lg h-[620px] md:h-[480px]";
  return (
    <>
      <header className="bg-white md:mb-12  relative h-[650px] md:h-[480px]">
        <div className="grid mt-16 w-full place-items-stretch">
          <div className="container mx-auto py-16 px-12 text-center z-10">
            <Typography className="inline-flex text-sm rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Discover the Future of Real Estate: Cutting-Edge Trends for 2024
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug !text-base lg:max-w-3xl lg:!text-2xl"
            >
              Welcome to our state-of-the-art real estate platform! As the
              digital landscape evolves, we are committed to{" "}
              <span className="text-green-500 leading-snug ">reshaping</span>{" "}
              the way you experience property buying and selling. Explore these
              exciting{" "}
              <span className="leading-snug text-green-500">innovations</span>{" "}
              that redefine the real estate journey.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Join us on this exciting journey as we redefine real estate. Your
              dream home awaits!
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Input
                  color="gray"
                  className="bg-white"
                  label="Enter your email"
                  size="lg"
                />
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-30">
            <Swiper
              loop={true}
              pagination={true}
              autoplay={{ delay: 2000 }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                <div className={swiperCSS}>
                  <img src="https://images.unsplash.com/photo-1628116904346-44a605db3b6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={swiperCSS}>
                  <img src="https://images.unsplash.com/photo-1628624747295-ea5e7fc3d76f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={swiperCSS}>
                  <img src="https://images.unsplash.com/photo-1594540992254-0e2239661647?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </header>
    </>
  );
};

export default BannerHome;
