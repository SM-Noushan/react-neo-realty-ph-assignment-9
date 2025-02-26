import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Spinner from "../../components/shared/Spinner";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    createUserWithGoogle,
    createUserWithFacebook,
    logIn,
    user,
    authLoading,
    setAuthLoading,
  } = useAuth();
  const [credentialError, setCredentialError] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = (data) => {
    const { email, password } = data;
    logIn(email, password)
      .then(() => {
        setCredentialError(false);
        toast.success("Login successful");
        if (location.state) console.log(location?.state);
        navigate(location.state ? location.state : "/profile");
      })
      .catch(() => {
        setAuthLoading(false);
        setCredentialError(true);
        // toast.error("Something went wrong, please try again");
      });
  };
  const handleSignUp = (provider) => {
    provider()
      .then(() => {
        toast.success("Login successful");
        setCredentialError(false);
        navigate(location?.state ? location.state : "/profile");
      })
      .catch(() => {
        toast.error("Something went wrong, please try again");
      });
  };
  if (authLoading) return <Spinner />;
  if (user)
    return <Navigate to={location.state ? location.state : "/profile"} />;
  return (
    <section className="grid text-center items-center p-8">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Log In
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Enter your email and password to login
        </Typography>
        <form className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
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
              className="w-full placeholder:opacity-100 focus:!border-t-gray-900 !border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
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
              className="w-full placeholder:opacity-100 focus:!border-t-gray-900 !border-t-blue-gray-200"
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
                  message: "Password required",
                },
                maxLength: {
                  value: 20,
                  message: "Max password length 20",
                },
              })}
            />
          </div>
          <Button
            onClick={handleSubmit(onSubmit)}
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            Login
          </Button>
          {(Object.entries(errors).length > 0 || credentialError) && (
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
              {((errors?.emailAddress?.message || errors?.password?.message) &&
                !credentialError &&
                "Email and Password Required") ||
                (credentialError && "Invalid Credentials")}
            </Typography>
          )}
          {/* <div className="mt-4 flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password
            </Typography>
          </div> */}
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
            login with google
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
            login with facebook
          </Button>
          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <Link
              to="/register"
              className="font-medium text-gray-900 hover:underline"
            >
              Create account
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default Login;
