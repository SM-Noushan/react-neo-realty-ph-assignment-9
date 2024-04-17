import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Spinner from "../../components/shared/Spinner";
import { IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { deleteData, getData, saveData } from "../../utils/localStorage";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

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
  const { user } = useAuth();
  const [bookmarkState, setBookmarkState] = useState(null);
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
  const bookmarkData = getData(user.email);
  useEffect(() => {
    const i = bookmarkData.find((d) => d.id.toLowerCase() == id.toLowerCase());
    if (i) setBookmarkState(true);
    else setBookmarkState(false);
  }, []);
  const handleBookmark = () => {
    saveData(property, user.email);
    setBookmarkState(true);
  };
  const handleRemove = () => {
    deleteData(id, user.email);
    setBookmarkState(false);
  };
  if (navigation.state === "loading") return <Spinner />;
  return (
    <section className="p-8">
      <Helmet>
        <title>Property Details</title>
      </Helmet>
      <div className="mx-auto max-w-screen-md relative">
        <img
          src={image}
          alt="property image"
          className="mb-4 md:h-[28rem] w-full rounded-xl object-cover"
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
          <div className="flex justify-between items-end">
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

            {bookmarkState ? (
              <Tooltip content="Remove">
                <IconButton onClick={handleRemove}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93ZM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 0 1 3.75 21Z" />
                  </svg>
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip content="Bookmark">
                <IconButton onClick={handleBookmark}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm1.5 1.5a.75.75 0 0 0-.75.75V16.5a.75.75 0 0 0 1.085.67L12 15.089l4.165 2.083a.75.75 0 0 0 1.085-.671V5.25a.75.75 0 0 0-.75-.75h-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </IconButton>
              </Tooltip>
            )}

            {/* {bookmarkData.map(data=>data.id)} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
