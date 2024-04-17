import { Typography, Card } from "@material-tailwind/react";
import PropTypes from "prop-types";

function StatsCardInfo({ count, title, description }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="text-4xl font-bold" color="blue-gray">
        {count}
      </Typography>
      <hr className="mt-2 mb-4 max-w-sm" />
      <Typography variant="h5" color="blue-gray" className="mt-1 font-bold">
        {title}
      </Typography>
      <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
        {description}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "1,200",
    title: "Property Listings",
    description:
      "The count of residential properties (houses, apartments, condos) available for sale or rent on your platform",
  },
  {
    count: "45 days",
    title: "Average Days on Market (DOM)",
    description:
      "The average time it takes for a property to sell after being listed.",
  },
  {
    count: "4.5/5",
    title: "Customer Satisfaction Ratings",
    description: "Our commitment to health is inspiring and the stats show it.",
  },
  {
    count: "Dhaka",
    title: "Featured Neighborhoods",
    description:
      "The most sought-after residential areas where we have listings.",
  },
];

export function StatsCard() {
  return (
    <section className="mb-12 px-8 container mx-auto">
      <div className="lg:mb-24 mb-10">
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Looking for a house?
        </Typography>
        <Typography variant="lead" className="w-w-full !text-gray-500 max-w-xl">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to explore
        </Typography>
      </div>
      <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
        <Card className="bg-gray-100/50 py-24 text-center" shadow={false}>
          <Typography
            variant="h1"
            className="!text-green-500 !leading-snug text-5xl"
          >
            57,000
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mt-2 font-bold">
            Monthly Visitors
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-10 font-bold"
          >
            Website Traffic
          </Typography>
          <Typography
            variant="lead"
            className="mt-1 text-base mx-auto !text-gray-500 lg:w-8/12"
          >
            The number of unique visitors who explore our website each month
          </Typography>
        </Card>
        <div>
          <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
            {stats.map((props, key) => (
              <StatsCardInfo key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
StatsCardInfo.propTypes = {
  count: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default StatsCard;
