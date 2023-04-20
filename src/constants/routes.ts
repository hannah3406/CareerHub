import SignUpPage from "pages/SignUp";
import MainPage from "pages/Main";
import MyPage from "pages/MyPage";
import PositionPage from "pages/Position";
import LoginPage from "pages/Login";
import StatisticsPage from "pages/Statistics";
import CommunityPage from "pages/Community";
import CommunityCreatePage from "pages/Community/create";

export const ROUTES = {
  HOME: {
    path: "/",
    element: MainPage,
  },
  LOGIN: {
    path: "/login",
    element: LoginPage,
  },
  POSITION: {
    path: "/position",
    element: PositionPage,
  },
  SIGNUP: {
    path: "/signup",
    element: SignUpPage,
  },
  COMMUNITY_LIST: {
    path: "/community",
    element: CommunityPage,
  },
  COMMUNITY_CREATE: {
    path: "/community/create",
    element: CommunityCreatePage,
  },
  STATISTICSPAGE: {
    path: "/statistics",
    element: StatisticsPage,
  },
  MYPAGE: {
    path: "/mypage",
    element: MyPage,
  },
};

export default ROUTES;
