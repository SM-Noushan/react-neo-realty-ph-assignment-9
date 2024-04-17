import { Typography } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Properties", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

const FooTer = () => {
  return (
    <footer className="px-8 py-28 bg-blue-gray-50">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                >
                  {link}
                </Typography>
              </li>
            </ul>
          ))}
        </div>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Neo Realty
        </Typography>
      </div>
    </footer>
  );
};

export default FooTer;
