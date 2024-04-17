import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
  Switch,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Profile = () => {
  const { user, setAuthLoading, updateProfileInfo } = useAuth();
  const [editProfile, setEditProfile] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    const { name, photoURL } = data;
    updateProfileInfo(name, photoURL)
      .then(() => {
        toast.success("Successfully updated");
        setAuthLoading(false);
      })
      .catch(() => {
        setAuthLoading(false);
        toast.error("Failed!, please try again.");
      });
  };
  return (
    <section className="my-8 flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-52">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div>
        <Card className="md:w-96">
          <CardHeader
            floated={false}
            className="shadow-none flex justify-center *:rounded-full"
          >
            <img
              src={
                user?.photoURL ||
                "https://th.bing.com/th/id/OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt?rs=1&pid=ImgDetMain"
              }
              alt="profile-picture"
              className="size-64"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 capitalize"
            >
              Name: {user?.displayName || "Unknown"}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              Email: {user?.email || "Unknown"}
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="grid text-center items-center p-8">
        <div>
          <div className="flex items-center gap-6 mb-8">
            <div className="text-left mt-2">
              <Switch
                onClick={() => {
                  setEditProfile(!editProfile);
                  setValue("name", `${user?.displayName}`);
                  setValue("photoURL", `${user?.photoURL}`);
                }}
              />
            </div>
            <Typography variant="h3" color="blue-gray">
              Edit Profile
            </Typography>
          </div>

          <form className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="name">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Name
                </Typography>
              </label>
              <Input
                autoComplete="name"
                id="name"
                color="gray"
                size="lg"
                type="text"
                name="name"
                placeholder="Enter your name"
                defaultValue={user?.displayName || ""}
                disabled={!editProfile}
                className="w-full placeholder:opacity-100 focus:!border-t-gray-900 !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                {...register("name", {
                  required: true,
                  pattern: /(^[a-zA-Z]{2,20}[a-zA-Z\s]{0,20}[a-zA-Z]{0,20}$)/,
                })}
              />
              {errors?.name && (
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center gap-1 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Required | Enter a valid name
                </Typography>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="photoUrl">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Photo URL
                </Typography>
              </label>
              <Input
                autoComplete="photo-url"
                id="photoUrl"
                color="gray"
                size="lg"
                type="text"
                name="photoUrl"
                placeholder="Enter photo url"
                defaultValue={user?.photoURL || ""}
                disabled={!editProfile}
                className="w-full placeholder:opacity-100 focus:!border-t-gray-900 !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                {...register("photoURL", {
                  required: true,
                  pattern:
                    /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9.\-=&?%_+,]*)*$/i,
                })}
              />

              {errors?.photoURL && (
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center gap-1 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Required | Enter a valid URL
                </Typography>
              )}
            </div>
            <Button
              onClick={handleSubmit(onSubmit)}
              color="gray"
              size="lg"
              className="mt-6"
              fullWidth
              disabled={!editProfile}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
