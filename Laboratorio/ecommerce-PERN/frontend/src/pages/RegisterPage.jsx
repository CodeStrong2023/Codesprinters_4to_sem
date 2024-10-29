// RegisterPage.js
import { Button, Card, Input } from "../components/ui";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full">
      <Card>
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
      </Card>
    </div>
  );
};

export default RegisterPage;
