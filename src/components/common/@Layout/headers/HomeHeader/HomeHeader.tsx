import { Box, Divider, Flex } from "@chakra-ui/react";
import { Popover } from "antd";

import { ROUTES } from "constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LOGO from "assets/icon/LOGO5.png";
import styled from "@emotion/styled";

import authApi from "apis/auth";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "constants/query-keys";
import { userProfile as userType } from "apis/user/type";
import { getToken } from "utils/sessionStorage/token";
const HomeHeader = () => {
  const { pathname } = useLocation();
  const navigete = useNavigate();
  const queryClient = useQueryClient();
  const token = getToken();
  const userProfile = queryClient.getQueryData<userType>([
    QUERY_KEY.USER.PROFILE,
    token,
  ]);
  const logout = async () => {
    if (!!userProfile) {
      await authApi.logoutUser(userProfile.email);
      await queryClient.invalidateQueries([QUERY_KEY.USER.PROFILE, token]);
      navigete(ROUTES.LOGIN);
    }
  };

  return (
    <Box w="100%" p="15px 0" boxShadow="md">
      <Flex
        maxW="1200px"
        px="16px"
        m="0 auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box w="50%">
          <Link to={ROUTES.HOME}>
            <LogoImg>
              <img src={LOGO} alt="logo" />
            </LogoImg>
          </Link>
        </Box>
        <Flex w="50%" justifyContent="right" alignItems="center">
          {!!userProfile ? (
            <Popover
              content={
                <ProfilePanel>
                  <div onClick={() => navigete(ROUTES.MYPAGE)}>마이페이지</div>
                  <div onClick={logout}>로그아웃</div>
                </ProfilePanel>
              }
              trigger="click"
            >
              <ProfileImg>
                <img
                  src={`assets/image/profile/파일 ${
                    Number(userProfile.profileimg) + 1
                  }.svg`}
                  alt="homeheader_profile"
                />
              </ProfileImg>
            </Popover>
          ) : (
            <>
              <Link to={ROUTES.SIGNUP}>
                <Box fontWeight="bold">회원가입</Box>
              </Link>
              <Divider
                display={{ base: "none", sm: "block" }}
                orientation="vertical"
                w="1px"
                h="8px"
                bg="#000"
                mx="10px"
              />
              <Link to={ROUTES.LOGIN}>
                <Box fontWeight="bold">로그인</Box>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
      <Divider bg="#ddd" w="100%" h="1px" m="15px 0" />
      <Box maxW="1200px" m="0 auto">
        <Link to={ROUTES.POSITION}>
          <NaviText isPath={pathname === ROUTES.POSITION}>채용공고 </NaviText>
        </Link>

        <Link to={ROUTES.COMMUNITY.LIST}>
          <NaviText isPath={pathname === ROUTES.COMMUNITY.LIST}>
            커뮤니티
          </NaviText>
        </Link>
        <Link to={ROUTES.STATISTICSPAGE}>
          <NaviText isPath={pathname === ROUTES.STATISTICSPAGE}>
            통계분석
          </NaviText>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeHeader;

const LogoImg = styled.div`
  width: 140px;
  height: 30px;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
`;
const NaviText = styled.div<{ isPath: boolean }>`
  display: inline-block;
  margin-left: 30px;
  font-weight: ${(props) => (props.isPath ? "700" : "400")};
  position: relative;
  color: ${(props) => (props.isPath ? "#d89999" : "#000")};
  &:hover {
    color: #d89999;
  }
`;
const ProfileImg = styled.div`
  width: 43px;
  height: 43px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.15);
  > img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
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
