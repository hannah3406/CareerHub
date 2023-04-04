import HomeLayout from "components/common/@Layout/layouts/HomeLayout";
import "./app.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import StatisticsPage from "./pages/Statistics";
import { useEffect, useMemo } from "react";
import { getToken } from "utils/sessionStorage/token";
import SignUpPage from "pages/SignUp";

function App() {
  const token = getToken();
  const navigete = useNavigate();
  const { pathname } = useLocation();
  const exceptPath = useMemo(() => ["/login", "/signup"], []);

  useEffect(() => {
    if (!token && !exceptPath.includes(pathname)) {
      navigete("/login");
    }
  }, [exceptPath, navigete, pathname, token]);

  return (
    <Routes>
      <Route path="/" element={<HomeLayout content={<StatisticsPage />} />} />
      <Route path="/login" element={<HomeLayout content={<LoginPage />} />} />
      <Route path="/signup" element={<HomeLayout content={<SignUpPage />} />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default App;
