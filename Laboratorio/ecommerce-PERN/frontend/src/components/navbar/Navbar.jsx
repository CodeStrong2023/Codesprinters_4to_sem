import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";
const navigationLogged = [
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Tareas",
    path: "/tareas",
  },
  {
    name: "New Tarea",
    path: "/tareas/new",
  },
  {
    name: "Edit Tarea",
    path: "/tareas/editar/:id",
  },
];

const navigationNotLogged = [
  {
    name: "About",
    path: "/about",
  },

  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
];
const Navbar = () => {
  const location = useLocation();
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const signOut = async () => {
    console.log("paso");
    await Cookies.remove("token");
    navigate("/login");
  };
  return (
    <nav className="mb-6 cursor-pointer bg-blue-500 w-full flex flex-col items-center justify-center">
      <h1
        onClick={() => navigate("/")}
        className="text-[36px] text-white font-bold my-4 cursor-pointer"
      >
        Proyect PERN
      </h1>
      <ul className="w-full flex items-center justify-end space-x-4 font-bold p-4">
        {isAuth ? (
          <>
            <li onClick={signOut} className="hover:text-blue-600 text-white">
              SignOut
            </li>
            {navigationLogged.map((item, index) => (
              <li
                key={index}
                className={`hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "text-white"
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </>
        ) : (
          navigationNotLogged.map((item, index) => (
            <li
              key={index}
              className={`hover:text-blue-600 ${
                location.pathname === item.path ? "text-blue-600" : "text-white"
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
