import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import TareasFormPage from "./pages/TareasFormPage";
import TareasPage from "./pages/TareasPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar/Navbar";
import { TareasProvider } from "./context/TareasContext";
import { Layout } from "./components/ui";
import { Guard } from "./components/Guard/Guard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route element={<Guard isAllowed={!isAuth} redirectTo="/tareas" />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<Guard isAllowed={isAuth} redirectTo="/login" />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              element={
                <TareasProvider>
                  <Outlet />
                </TareasProvider>
              }
            >
              <Route path="/tareas" element={<TareasPage />} />
              <Route path="/tareas/new" element={<TareasFormPage />} />
              <Route path="/tareas/editar/:id" element={<TareasFormPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
