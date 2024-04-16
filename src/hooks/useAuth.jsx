import { useContext } from "react";
import { AuthContext } from "../providers/firebase/FirebaseProvider";

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export default useAuth;
