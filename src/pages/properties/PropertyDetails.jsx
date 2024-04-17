import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Spinner from "../../components/shared/Spinner";
import { Typography } from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const PropertyDetails = () => {
  const navigation = useNavigation();
  const data = useLoaderData();
  const { id } = useParams();
  const property = data.find((item) => item.id.toLowerCase() === id);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = property;
  if (navigation.state === "loading") return <Spinner />;
  return (
    <section className="p-8">
      <div className="mx-auto max-w-screen-md relative">
        <img
          src={image}
          alt="property image"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
        <Typography
          variant="lead"
          className="font-medium !bg-blue-500 px-4 py-2 text-white absolute top-10 -right-5 rounded-sm"
        >
          {price}
        </Typography>
        <Typography variant="small" className="font-medium !text-blue-500">
          #{segment_name.toUpperCase()} #{status.toUpperCase()}
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="my-4 font-black text-2xl md:text-4xl !leading-snug"
        >
          {estate_title}
        </Typography>
        <Typography className="font-normal !text-gray-500">
          {description}
        </Typography>
        <Typography
          as="div"
          className="mt-4 md:mt-0 flex justify-end items-center gap-2 md:gap-6 *:font-normal *:border *:border-black *:px-2 md:*:px-4 *:py-1 *:rounded-md *:text-sm md:*:text-base"
        >
          <Typography>{area}</Typography>
          <Typography>{location}</Typography>
        </Typography>
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="my-4 font-black text-xl md:text-2xl !leading-snug"
          >
            Facilities
          </Typography>
          <div>
            {facilities.map((facility, key) => (
              <div key={key} className="flex items-center gap-2">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">{facility}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
