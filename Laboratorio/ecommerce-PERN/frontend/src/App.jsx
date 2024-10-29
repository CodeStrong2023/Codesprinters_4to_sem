import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import TareasFormPage from "./pages/TareasFormPage";
import TareasPage from "./pages/TareasPage";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tareas" element={<TareasPage />} />
      <Route path="/tareas/new" element={<TareasFormPage />} />
      <Route path="/tareas/editar/:id" element={<TareasFormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
