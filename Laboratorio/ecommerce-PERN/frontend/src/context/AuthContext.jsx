/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
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
  const baseURL = import.meta.env.VITE_BACKEND || "http://localhost:3000/api";
  useEffect(() => {
    console.log("paso");
    console.log(Cookies.get());
    console.log(Cookies.get("token"));
    if (Cookies.get("token")) {
      console.log("paso");
      axios
        .get(baseURL, {
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
