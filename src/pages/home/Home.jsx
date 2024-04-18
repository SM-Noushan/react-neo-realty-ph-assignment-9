import BannerHome from "../../components/BannerHome";
import Category from "../../components/Category";
import FeaturedReview from "../../components/FeaturedReview";
import StatsCard from "../../components/StatsCard";
import Properties from "../properties/Properties";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <Properties title="Neo Realty" item={3} />
      <StatsCard />
      <Category />
      <FeaturedReview />
    </div>
  );
};

export default Home;
