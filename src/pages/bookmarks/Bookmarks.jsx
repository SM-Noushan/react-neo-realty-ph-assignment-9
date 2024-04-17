import { Typography } from "@material-tailwind/react";
import PropertiesCard from "../../components/PropertiesCard";
import useData from "../../hooks/useData";
import Spinner from "../../components/shared/Spinner";

const Bookmarks = () => {
  const { data, dataLoading } = useData();
  return (
    <section className="container mx-auto py-16 px-8 text-center space-y-6">
      <Typography variant="h3">Properties</Typography>
      {dataLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 text-start">
          {data.map((property) => (
            <PropertiesCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Bookmarks;
