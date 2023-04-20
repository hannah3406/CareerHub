import HomeLayout from "components/common/@Layout/layouts/HomeLayout";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useMemo } from "react";
import { getToken } from "utils/sessionStorage/token";
import { useGetProfileQuery } from "apis/user/query";
import { ROUTES } from "constants/routes";

function App() {
  const token = getToken();
  const navigete = useNavigate();
  const { pathname } = useLocation();

  const exceptPath = useMemo(() => ["/login", "/signup", "/", "/position"], []);
  const { data: userProfile } = useGetProfileQuery({
    variables: token,
    options: {
      enabled: token !== null && token !== undefined,
    },
  });
  useEffect(() => {
    if (userProfile === undefined && !token && !exceptPath.includes(pathname)) {
      navigete("/login");
    }
  }, [exceptPath, navigete, pathname, token, userProfile]);

  return (
    <Routes>
      {Object.values(ROUTES).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <HomeLayout
              isHideHeader={route.path === "/community/create"}
              content={<route.element />}
            />
          }
        />
      ))}
    </Routes>
  );
}

export default App;
