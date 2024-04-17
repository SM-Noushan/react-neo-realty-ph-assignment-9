import BannerHome from "../../components/BannerHome";
import FeaturedReview from "../../components/FeaturedReview";
import StatsCard from "../../components/StatsCard";
import Properties from "../properties/Properties";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <Properties title="Neo Realty" item={3} />
      <StatsCard />
      <FeaturedReview />
    </div>
  );
};

export default Home;
