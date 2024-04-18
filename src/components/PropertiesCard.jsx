import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PropertiesCard = ({ property }) => {
  const { id, image, estate_title, description, segment_name } = property;
  return (
    <Card className="max-w-[24rem] overflow-hidden mx-auto">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={image} className="w-96 h-64" alt="property-img" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="h-[68px]">
          <Tooltip content={segment_name}>{estate_title}</Tooltip>
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description.slice(0, 40)} ...
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-center *:w-full">
        <Link to={`/property-details/${id}`.toLocaleLowerCase()}>
          <Button variant="filled" ripple={true} fullWidth>
            view details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
PropertiesCard.propTypes = {
  property: PropTypes.object.isRequired,
};
export default PropertiesCard;
