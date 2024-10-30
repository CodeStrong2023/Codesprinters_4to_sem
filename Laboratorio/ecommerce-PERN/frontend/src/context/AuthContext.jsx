/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import Cookie from "js-cookie";
import axios from "axios";
const AuthContext = createContext();
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
  }
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    if (Cookie.get("token")) {
      axios
        .get("http://localhost:3000/api/profile", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
          setIsAuth(true);
        })
        .catch((error) => {
          setUser(null);
          setIsAuth(false);
          console.log(error);
        });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        errorsAuth: errors,
        setErrorsAuth: setErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
