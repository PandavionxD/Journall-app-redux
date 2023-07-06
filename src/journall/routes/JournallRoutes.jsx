import { Navigate, Route, Routes } from "react-router-dom";
import { JournallPage } from "../pages/JournallPage";

export const JournallRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JournallPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
