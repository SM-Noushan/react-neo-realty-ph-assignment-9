import { Typography } from "@material-tailwind/react";

const SkeletonNavProfile = () => {
  return (
    <div className="max-w-full animate-pulse">
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
};

export default SkeletonNavProfile;
