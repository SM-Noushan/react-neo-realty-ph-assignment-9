import BannerHome from "../../components/BannerHome";
import Properties from "../properties/Properties";

const Home = () => {
  return (
    <div>
      <BannerHome />
      <Properties title="Neo Realty" item={3} />
    </div>
  );
};

export default Home;
