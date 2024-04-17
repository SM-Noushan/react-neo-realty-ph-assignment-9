import { Alert, Typography } from "@material-tailwind/react";
import PropertiesCard from "../../components/PropertiesCard";
import { getData } from "../../utils/localStorage";
const Bookmark = () => {
  const data = getData();
  return (
    <section className="container mx-auto py-16 px-8 text-center space-y-6">
      <Typography variant="h3">Bookmark</Typography>
      {data.length == 0 ? (
        <Alert className="justify-center py-12 text-lg">
          You have not added anything to wishlist yet.
        </Alert>
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

export default Bookmark;
