import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooTer from "../components/FooTer";

const Root = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100dvh-389px)]">
        <Outlet />
      </div>
      <FooTer />
    </>
  );
};

export default Root;
