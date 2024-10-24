import express from "express";
import morgan from "morgan";
import tareasRoutes from "./router/tareas.routes.js";
import authRoutes from "./router/auth.routes.js";
const app = express();

//middlewares
app.use[morgan("dev")]; //Para ver errores en consola
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tareas", tareasRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});
app.get("/test", (req, res) => {
  throw new Error("This is a test error");
  res.send("Hello, test!");
});

//manejando errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
