// RegisterPage.js
import { Button, Card, Input } from "../components/ui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const RegisterPage = () => {
  const navigate = useNavigate();
  const { setUser, setErrorsAuth, errorsAuth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        data,
        {
          withCredentials: true,
        }
      );
      setUser(response.data.user);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        setErrorsAuth(error.response.data);
      }
      setErrorsAuth([error.response.data.message]);
    }
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full">
      <Card>
        {JSON.stringify(errorsAuth) !== "null" && (
          <div className="bg-red-500 text-white p-4 my-4">
            {errorsAuth.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <h3 className="text-2xl font-bold text-blue-600 my-6 mx-4">Registro</h3>
        <form className="space-y-4 w-[50vw]" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            type="text"
            placeholder="Nombre"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
          <Input
            label="Email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
          <Input
            label="Password"
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Este campo es requerido</span>
          )}
          <Button>Registrarse</Button>
        </form>
        <div>
          <p className="text-center text-white font-bold mt-4">
            ¿Ya tienes cuenta? <Link to={"/login"}>Iniciar Sesión</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
