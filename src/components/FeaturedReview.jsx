import { Card, CardBody, Rating, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function CardReview({ name, feedback, date, title }) {
  return (
    <Card shadow={false}>
      <CardBody className="pt-0">
        <Rating value={4} className="text-amber-500" />
        <Typography
          variant="h6"
          color="blue-gray"
          className="font-bold mb-2 mt-1"
        >
          {title}
        </Typography>
        <Typography className="text-base font-normal !text-gray-500">
          {feedback}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="font-medium mt-3">
          {name}
        </Typography>
        <Typography variant="small" className="font-normal !text-gray-500">
          {date}
        </Typography>
      </CardBody>
    </Card>
  );
}

const CONTENTS = [
  {
    title: "Excellent Service!",
    name: "Alexandra Johnson",
    feedback:
      "I recently purchased my dream home through Neo Realty, and the experience was fantastic. The agents were professional, responsive, and guided me through every step of the process. Highly recommended!",
    date: "15 April 2024",
  },
  {
    title: "Neo Realty Rocks!",
    name: "Samuel Lee",
    feedback:
      "Neo Realty helped me find the perfect apartment in a great neighborhood. Their website is user-friendly, and their team made the whole renting process smooth. Kudos to Neo Realty!",
    date: "28 March 2024",
  },
  {
    title: "Outstanding Listings",
    name: "Emily Carter",
    feedback:
      "Neo Realty's website has an impressive range of property listings. Whether you're looking for a cozy condo or a spacious house, they've got it all. Plus, their agents are friendly and knowledgeable. A top-notch real estate platform!",
    date: "10 May 2024",
  },
];

const FeaturedReview = () => {
  return (
    <section className="py-20 px-8">
      <div className="mx-auto container">
        <div className="text-center">
          <Typography variant="h6" className="mb-3 uppercase">
            Reviews
          </Typography>
          <Typography variant="h3">Our Customer&apos;s Opinion</Typography>
          <Typography className="mt-3 text-center text-[18px] font-normal text-gray-500">
            From general feedback to detailed accounts, find out why our users
            love our services.
          </Typography>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 gap-y-6">
          {CONTENTS.map(({ name, feedback, title, date }, index) => (
            <CardReview
              key={index}
              title={title}
              name={name}
              feedback={feedback}
              date={date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
CardReview.propTypes = {
  name: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default FeaturedReview;
