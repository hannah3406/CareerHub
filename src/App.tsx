import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "moment/locale/ko";
import { useEffect } from "react";
import ROUTES from "constants/routes";
import HomeLayout from "components/common/@Layout/layouts/HomeLayout";

function App() {
  const { pathname } = useLocation();

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
