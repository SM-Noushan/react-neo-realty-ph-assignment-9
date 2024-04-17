import { Button, Typography } from "@material-tailwind/react";
import PropertiesCard from "../../components/PropertiesCard";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import Spinner from "../../components/shared/Spinner";
import PropTypes from "prop-types";

const Properties = ({ item = 6 }) => {
  const { data, dataLoading } = useData();
  return (
    <section className="container mx-auto py-16 px-8 text-center space-y-6">
      <Typography variant="h3">Properties</Typography>
      {dataLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start">
          {data.slice(0, item).map((property) => (
            <PropertiesCard key={property.id} property={property} />
          ))}
        </div>
      )}

      {item == 3 && (
        <Link to="/properties">
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
};
export default Properties;
