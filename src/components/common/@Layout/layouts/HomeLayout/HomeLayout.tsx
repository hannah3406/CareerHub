import { ContainerProps, Grid } from "@chakra-ui/react";
import HomeFooter from "../../footer";

import HomeHeader from "../../headers/HomeHeader";

interface HomeLayoutProps {
  header?: JSX.Element;
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
}: HomeLayoutProps) => {
  return (
    <Grid
      minH="100vh"
      h="100%"
      maxW="1200px"
      m="0 auto"
      gridTemplateRows="auto 1fr auto"
      {...containerProps}
    >
      <header>{header}</header>
      <main>{content}</main>
      <footer>{footer}</footer>
    </Grid>
  );
};

export default HomeLayout;
