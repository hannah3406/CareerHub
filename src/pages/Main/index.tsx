import { useBreakpoint } from "@chakra-ui/react";
import MainContainer from "container/Main";
import MainMobileContainer from "container/Main/MobileMain";

const MainPage = () => {
  const breakpoint = useBreakpoint();
  return breakpoint === "base" ? <MainMobileContainer /> : <MainContainer />;
};

export default MainPage;
