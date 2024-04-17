import { Navigate, useLocation } from "react-router-dom";
import ProtoTypes from "prop-types";
import Spinner from "../components/shared/Spinner";
import useAuth from "../hooks/useAuth";

const ProtectedRoutes2 = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();
  if (authLoading) return <Spinner />;
  if (!user) return children;
  return <Navigate state={location.pathname} to="/"></Navigate>;
};
ProtectedRoutes2.propTypes = {
  children: ProtoTypes.node.isRequired,
};

export default ProtectedRoutes2;
