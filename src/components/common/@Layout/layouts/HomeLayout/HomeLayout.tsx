// import { TimeIcon } from "@chakra-ui/icons";
import { ContainerProps, Flex, Grid } from "@chakra-ui/react";
import HomeFooter from "../../footer";

import HomeHeader from "../../headers/HomeHeader";

interface HomeLayoutProps {
  header?: JSX.Element;
  isHideHeader?: boolean;
  footer?: JSX.Element;
  menubar?: JSX.Element;
  content: JSX.Element;
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
    <>
      <Grid
        minH="100vh"
        h="100%"
        m="0 auto"
        gridTemplateRows="auto 1fr auto"
        {...containerProps}
        display={{ base: "none", sm: "grid" }}
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
      {/* <Flex
        minH="100vh"
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        display={{ base: "flex", sm: "flex" }}
      >
        <Text fontSize="18px" lineHeight="2" color="gray.800">
          <TimeIcon fontSize="30px" /> <br />
          개발 진행 중이라 오후에는 점검을 하고 있습니다.
          <br />
          운영 시간에 방문 부탁드립니다 :)
          <br />( 운영시간 : 오전 9시~ 6시 )
        </Text>
      </Flex> */}
      <Flex
        minH="100vh"
        h="100%"
        w="100%"
        justifyContent="center"
        alignItems="center"
        display={{ base: "flex", sm: "none" }}
      >
        모바일 작업중입니다!! PC 로 접속해주세요
      </Flex>
    </>
  );
};

export default HomeLayout;
