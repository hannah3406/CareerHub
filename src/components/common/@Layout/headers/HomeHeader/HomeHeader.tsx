import { Box, Divider, Flex } from "@chakra-ui/react";
import { Popover } from "antd";

import { ROUTES } from "constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LOGO from "assets/icon/LOGO5.png";
import styled from "@emotion/styled";

import authApi from "apis/auth";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "constants/query-keys";
import { getToken } from "utils/sessionStorage/token";
import { ProfileDefaultImg } from "assets/style/common";
import { useGetProfileQuery } from "apis/user/query";
const HomeHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = getToken();
  const { data: userProfile } = useGetProfileQuery({
    variables: token,
    options: {
      enabled: token !== null && token !== undefined,
    },
  });
  const logout = async () => {
    if (!!userProfile) {
      await authApi.logoutUser(userProfile.email);
      await queryClient.invalidateQueries([QUERY_KEY.USER.PROFILE, token]);
      // navigate(ROUTES.LOGIN.path);
    }
  };

  return (
    <Box w="100%" p={{ base: "30px 0", sm: "15px 0" }} boxShadow="md">
      <Flex
        maxW={{ sm: "1200px" }}
        px={{ base: "30px", sm: "16px" }}
        m="0 auto"
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems="center"
      >
        <Box
          w="50%"
          display={{ base: "none", sm: "block" }}
          onClick={() => navigate(ROUTES.HOME.path)}
        >
          <LogoImg>
            <img src={LOGO} alt="logo" />
          </LogoImg>
        </Box>
        <Box
          w="50%"
          display={{ base: "block", sm: "none" }}
          textAlign="center"
          onClick={() => navigate(ROUTES.HOME.path)}
        >
          <MobileLogoImg>
            <img src={LOGO} alt="logo" />
          </MobileLogoImg>
        </Box>
        <Flex
          display={{ base: "none", sm: "flex" }}
          w="50%"
          justifyContent="right"
          alignItems="center"
        >
          {!!userProfile ? (
            <Popover
              placement="bottom"
              content={
                <ProfilePanel>
                  <div onClick={() => navigate(ROUTES.MYPAGE.path)}>
                    마이페이지
                  </div>
                  <div onClick={logout}>로그아웃</div>
                </ProfilePanel>
              }
              trigger="click"
            >
              <ProfileDefaultImg>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/image/profile/파일 ${
                      Number(userProfile.profileimg) + 1
                    }.svg`
                  }
                  alt="프로필"
                />
              </ProfileDefaultImg>
            </Popover>
          ) : (
            <>
              <Link to={ROUTES.SIGNUP.path}>
                <Box fontWeight="bold">회원가입</Box>
              </Link>
              <Divider
                orientation="vertical"
                w="1px"
                h="8px"
                bg="#000"
                mx="10px"
              />
              <Link to={ROUTES.LOGIN.path}>
                <Box fontWeight="bold">로그인</Box>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
      <Divider
        display={{ base: "none", sm: "block" }}
        bg="#ddd"
        w="100%"
        h="1px"
        m="15px 0"
      />
      <Box display={{ base: "none", sm: "block" }} maxW="1200px" m="0 auto">
        <NaviText
          isPath={pathname === ROUTES.POSITION.path}
          onClick={() => navigate(ROUTES.POSITION.path)}
        >
          채용공고
        </NaviText>

        <NaviText
          isPath={pathname === ROUTES.COMMUNITY_LIST.path}
          onClick={() => navigate(ROUTES.COMMUNITY_LIST.path)}
        >
          커뮤니티
        </NaviText>

        {/* <NaviText
          isPath={pathname === ROUTES.STATISTICSPAGE.path}
          onClick={() => navigate(ROUTES.STATISTICSPAGE.path)}
        >
          통계분석
        </NaviText> */}
      </Box>
    </Box>
  );
};

export default HomeHeader;

const LogoImg = styled.div`
  width: 140px;
  // height: 50px;
  overflow: hidden;
  display: inline-block;
  > img {
    width: 100%;
    // height: 100%;
  }
`;
const MobileLogoImg = styled.div`
  width: 180px;
  // height: 50px;
  overflow: hidden;
  display: inline-block;
  > img {
    width: 100%;
    // height: 100%;
  }
`;
const NaviText = styled.div<{ isPath: boolean }>`
  display: inline-block;
  cursor: pointer;
  margin-left: 30px;
  font-weight: ${(props) => (props.isPath ? "700" : "400")};
  position: relative;
  color: ${(props) => (props.isPath ? "#d89999" : "#000")};
  &:hover {
    color: #d89999;
  }
`;

const ProfilePanel = styled.div`
  width: 100px;
  padding: 10px;
  text-align: center;
  > div {
    padding: 3px 0;
    &:hover {
      color: #fff;
      background-color: #000;
      cursor: pointer;
    }
  }
`;
