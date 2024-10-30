import { Link, useLocation } from "react-router-dom";
const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
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
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="mb-6 bg-blue-500 w-full flex flex-col items-center justify-center">
      <h1 className="text-[36px] text-white font-bold my-4">Proyect PERN</h1>
      <ul className="w-full flex items-center justify-around space-x-4 font-bold p-4">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={`text-white py-1 px-4 rounded-md ${
              location.pathname === item.path && "text-black bg-white"
            }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
