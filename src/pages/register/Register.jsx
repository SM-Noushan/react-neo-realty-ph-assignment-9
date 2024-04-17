import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Spinner from "../../components/shared/Spinner";

const catchError = (error) => {
  const errorCode = error.code;
  if (errorCode == "auth/email-already-in-use")
    return toast.error("Account already exists.");
  return toast.error("Something unexpected happened, please try again.");
};

const Register = () => {
  const {
    user,
    authLoading,
    setAuthLoading,
    createUser,
    createUserWithGoogle,
    createUserWithFacebook,
    updateProfileInfo,
  } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { name, email, photoURL, password } = data;
    createUser(email, password)
      .then(() => {
        reset();
        toast.success("Registered successfully.");
        updateProfileInfo(name, photoURL)
          .then(() => {
            setAuthLoading(false);
            navigate("/profile");
          })
          .catch(() => {
            setAuthLoading(false);
            toast.warn("Failed to create profile, please try again.");
          });
      })
      .catch((error) => {
        setAuthLoading(false);
        catchError(error);
      });
  };
  const handleSignUp = (provider) => {
    provider()
      .then(() => {
        toast.success("Registered successfully.");
        navigate("/profile");
      })
      .catch((error) => {
        setAuthLoading(false);
        catchError(error);
      });
  };
  if (authLoading) return <Spinner />;
  if (user) return <Navigate to="/" />;
  return (
    <section className="grid text-center items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Register
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Fill up the form to register account
        </Typography>
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
              className="w-full placeholder:opacity-100 focus:!border-t-gray-900 border-t-blue-gray-200"
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
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Email
              </Typography>
            </label>
            <Input
              autoComplete="email"
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:!border-t-gray-900 border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
            {errors?.email && (
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
                Required | Enter a valid email
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
              className="w-full placeholder:opacity-100 focus:!border-t-gray-900 border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              {...register("photoURL", {
                required: true,
                pattern:
                  /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9.\-=&?_+]*)*$/i,
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
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              autoComplete="password"
              size="lg"
              placeholder="******"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:!border-t-gray-900 border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
              {...register("password", {
                required: {
                  value: true,
                  message: "Required",
                },
                minLength: {
                  value: 6,
                  message: "Minimum password length is 6",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum password length is 20",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                  message: "Requires at least one lowercase and uppercase",
                },
              })}
            />
            {errors?.password?.message && (
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
                {errors?.password?.message}
              </Typography>
            )}
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            Register
          </Button>
          <Button
            onClick={() => handleSignUp(createUserWithGoogle)}
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            register with google
          </Button>
          <div className="flex gap-2 items-center px-2">
            <hr className="my-3 h-0.5 w-1/2 bg-gray-900" />
            <Typography
              variant="small"
              color="gray"
              className="text-center font-semibold"
            >
              Or
            </Typography>
            <hr className="my-3 h-0.5 w-1/2 bg-gray-900" />
          </div>
          <Button
            onClick={() => handleSignUp(createUserWithFacebook)}
            variant="outlined"
            size="lg"
            className="flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-facebook.png`}
              alt="facebook"
              className="h-6 w-6"
            />{" "}
            register with facebook
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-gray-900 hover:underline"
            >
              Login
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default Register;
