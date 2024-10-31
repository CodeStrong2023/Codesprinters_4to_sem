import { Link } from "react-router-dom";
import { Card, Input, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser, setErrorsAuth, errorsAuth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signin",
        data,
        {
          withCredentials: true,
        }
      );
      await setUser(response.data.user);
      console.log(response.data);
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    } catch (error) {
      console.log(error);
      if (Array.isArray(error.response.data)) {
        setErrorsAuth(error.response.data);
      }
      setErrorsAuth([error.response.data.message]);
    }
  });
  return (
    <div className="h-full flex items-center justify-center">
      <Card>
        {JSON.stringify(errorsAuth) !== "null" && (
          <div className="bg-red-500 text-white p-4 my-4">
            {errorsAuth.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <h3 className="text-2xl font-bold text-blue-600 my-6 mx-4">Login</h3>
        <form onSubmit={onSubmit} className="space-y-4 w-[50vw]">
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
          <Button>Iniciar Sesión</Button>
        </form>
        <div>
          <p className="text-center text-white font-bold mt-4">
            ¿No tienes cuenta? <Link to={"/register"}>Registrate</Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
