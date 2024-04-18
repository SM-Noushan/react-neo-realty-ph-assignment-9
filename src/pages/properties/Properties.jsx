import { Button, Typography } from "@material-tailwind/react";
import PropertiesCard from "../../components/PropertiesCard";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import Spinner from "../../components/shared/Spinner";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Properties = ({ item = 6, title = "Properties" }) => {
  const { data, dataLoading } = useData();
  return (
    <section className="container mx-auto pb-16 px-8 text-center space-y-6">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Typography variant="h3">
        {title == "Properties" ? "Properties" : "Featured Properties"}
      </Typography>
      {dataLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-start">
          {data.slice(0, item).map((property) => (
            <PropertiesCard key={property.id} property={property} />
          ))}
        </div>
      )}

      {item == 3 && (
        <Link to="/resources/properties">
          <Button
            variant="outlined"
            ripple={true}
            className="hover:bg-black hover:text-white mt-6"
          >
            see all
          </Button>
        </Link>
      )}
    </section>
  );
};
Properties.propTypes = {
  item: PropTypes.number,
  title: PropTypes.string,
};
export default Properties;
