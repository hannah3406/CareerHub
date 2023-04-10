import HomeLayout from "components/common/@Layout/layouts/HomeLayout";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as P from "./pages/index";
import { useEffect, useMemo } from "react";
import { getToken } from "utils/sessionStorage/token";

function App() {
  const token = getToken();
  const navigete = useNavigate();
  const { pathname } = useLocation();
  const exceptPath = useMemo(() => ["/login", "/signup", "/", "/position"], []);

  useEffect(() => {
    if (!token && !exceptPath.includes(pathname)) {
      navigete("/login");
    }
  }, [exceptPath, navigete, pathname, token]);

  return (
    <Routes>
      <Route path="/" element={<HomeLayout content={<P.MainPage />} />} />
      <Route
        path="/statistics"
        element={<HomeLayout content={<P.StatisticsPage />} />}
      />
      <Route
        path="/position"
        element={<HomeLayout content={<P.PositionPage />} />}
      />
      <Route path="/login" element={<HomeLayout content={<P.LoginPage />} />} />
      <Route
        path="/signup"
        element={<HomeLayout content={<P.SignUpPage />} />}
      />
      <Route element={<P.NotFound />} />
    </Routes>
  );
}

export default App;
