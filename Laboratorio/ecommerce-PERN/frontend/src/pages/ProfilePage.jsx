import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
        <div className="text-white bg-blue-600 p-4">
          <h1>Perfil</h1>
          <p>Nombre: {user.nombre}</p>
          <p>Email: {user.email}</p>
          <p>Fecha de registro: {user.fecha_registro}</p>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
