import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { JournallRoutes } from "../journall/routes/JournallRoutes";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useCheckStatus } from "../hooks/useCheckStatus";

export const AppRouter = () => {

  const  status  = useCheckStatus()

  if (status === "checking") return <CheckingAuth />;

  return (
    <>
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournallRoutes />} />
        ) : (
          <Route path="auth/*" element={ <AuthRouter/> } />
          )}
          <Route path="/*" element={<Navigate to='auth/login' />} />
    </Routes>
    {/* <Routes>
          <Route path="/*" element={ <Navigate to='auth/register' /> }  />
    </Routes> */}
          </>
  );
};
