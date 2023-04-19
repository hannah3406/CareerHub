import HomeLayout from "components/common/@Layout/layouts/HomeLayout";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as Page from "./pages/index";
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
      <Route
        path={ROUTES.HOME}
        element={<HomeLayout content={<Page.MainPage />} />}
      />
      <Route
        path={ROUTES.MYPAGE}
        element={<HomeLayout content={<Page.MyPage />} />}
      />
      <Route
        path={ROUTES.STATISTICSPAGE}
        element={<HomeLayout content={<Page.StatisticsPage />} />}
      />
      <Route
        path={ROUTES.POSITION}
        element={<HomeLayout content={<Page.PositionPage />} />}
      />
      <Route
        path={ROUTES.COMMUNITY.LIST}
        element={<HomeLayout content={<Page.CommunityPage />} />}
      />
      <Route
        path={ROUTES.COMMUNITY.CREATE}
        element={
          <HomeLayout isHideHeader content={<Page.CommunityCreatePage />} />
        }
      />
      <Route
        path={ROUTES.LOGIN}
        element={<HomeLayout content={<Page.LoginPage />} />}
      />
      <Route
        path={ROUTES.SIGNUP}
        element={<HomeLayout content={<Page.SignUpPage />} />}
      />
      <Route element={<Page.NotFound />} />
    </Routes>
  );
}

export default App;
