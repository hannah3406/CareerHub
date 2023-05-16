import HomeLayout from "components/common/@Layout/layouts/HomeLayout";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "moment/locale/ko";
import { useEffect, useMemo } from "react";
import { getToken } from "utils/sessionStorage/token";
import { useGetProfileQuery } from "apis/user/query";
import { ROUTES } from "constants/routes";

function App() {
  const token = getToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const exceptPath = useMemo(
    () => [
      "/login",
      "/signup",
      "/",
      "/position",
      "/community",
      "/community/[:id]",
    ],
    []
  );
  const { data: userProfile } = useGetProfileQuery({
    variables: token,
    options: {
      enabled: token !== null && token !== undefined,
    },
  });
  useEffect(() => {
    if (userProfile === undefined && !token && !exceptPath.includes(pathname)) {
      navigate("/login");
    }
  }, [exceptPath, navigate, pathname, token, userProfile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {Object.values(ROUTES).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <HomeLayout
              isHideHeader={
                route.path === "/community/create" ||
                route.path === "/community/:id/edit"
              }
              content={<route.element />}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default App;
