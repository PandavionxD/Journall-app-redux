import { Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { JournallRoutes } from "../journall/routes/JournallRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas de Login y Auth */}
      <Route  path="auth/*" element={<AuthRouter/>}   />
      {/* Rutas de Journall */}
      <Route  path="/*" element={ <JournallRoutes/> }   />
    </Routes>
  );
};
