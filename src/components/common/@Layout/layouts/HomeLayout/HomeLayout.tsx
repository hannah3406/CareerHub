import { ContainerProps, Grid } from "@chakra-ui/react";
import HomeFooter from "../../footer";

import HomeHeader from "../../headers/HomeHeader";

interface HomeLayoutProps {
  header?: JSX.Element;
  isHideHeader?: boolean;
  footer?: JSX.Element;
  menubar?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const HomeLayout = ({
  header = <HomeHeader />,
  footer = <HomeFooter />,
  containerProps,
  content,
  isHideHeader,
}: HomeLayoutProps) => {
  return (
    <Grid
      minH="100vh"
      h="100%"
      // maxW="1200px"
      m="0 auto"
      gridTemplateRows="auto 1fr auto"
      {...containerProps}
    >
      {!isHideHeader && (
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 99,
            backgroundColor: "#fff",
          }}
        >
          {header}
        </header>
      )}
      <main>{content}</main>
      <footer>{footer}</footer>
    </Grid>
  );
};

export default HomeLayout;
