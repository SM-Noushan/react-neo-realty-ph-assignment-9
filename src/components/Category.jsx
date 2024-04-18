import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/bundle";
// import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

function ContentCard({ img, title, count }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />
      <CardBody className="relative bottom-8 flex flex-col justify-end">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        <Button variant="gradient" className="w-fit">
          {count} Properties
        </Button>
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: "https://images.unsplash.com/photo-1524061511843-fd43443e3cb2?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Single-Family Homes",
    count: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1576375801517-45814f908aa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Townhouses",
    count: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Apartments",
    count: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1536259562313-91d037ca8c8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Student Housing",
    count: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1587040273238-9ba47c714796?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Senior Living Communities",
    count: 0,
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683917068755-c2890e4824e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "vacation Rentals",
    count: 1,
  },
];

const Category = () => {
  return (
    <>
      <section className="container mx-auto px-8 mb-20">
        <Typography
          variant="h2"
          color="blue-gray"
          className="!text-2xl !leading-snug lg:!text-3xl text-center mb-12"
        >
          Categories
        </Typography>
        <div className="">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            slidesPerView={1}
            loop={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            autoplay={{ delay: 2000 }}
            modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
          >
            {contents.map(({ img, title, count }, key) => (
              <SwiperSlide key={key}>
                <ContentCard img={img} title={title} count={count} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="">
        {/* <Swiper
          loop={false}
          pagination={true}
          autoplay={{ delay: 2000 }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="size-96">
              <img src="https://images.unsplash.com/photo-1628116904346-44a605db3b6e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          <SwiperSlide>
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
        </Swiper> */}
      </div>
    </>
  );
};
ContentCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
export default Category;
