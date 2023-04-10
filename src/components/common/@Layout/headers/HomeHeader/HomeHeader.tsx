import { useMemo } from "react";

import { Box, Divider, Flex } from "@chakra-ui/react";
import { Popover } from "antd";
import { getToken } from "utils/sessionStorage/token";
// import Logo from "components/common/@Icons/System/Logo";

import { ROUTES } from "constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserProfileQuery } from "apis/user/query";
import { usePostLogoutUser } from "apis/auth/mutation";
import LOGO from "assets/icon/LOGO5.png";
import PROFILE_DEFAULT from "assets/image/profile-default.png";
import styled from "@emotion/styled";
const HomeHeader = () => {
  // const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const token = getToken();
  const exceptPath = useMemo(() => ["/login", "/signup"], []);
  const navigete = useNavigate();
  const { mutate: postLogoutUserMutate } = usePostLogoutUser({
    options: {
      onSuccess: () => navigete("/login"),
    },
  });
  const { data: userProfile } = useUserProfileQuery(
    token !== null ? token : undefined,
    {
      options: {
        enabled: token !== null && !exceptPath.includes(pathname),
        staleTime: 10 * 1000,
      },
    }
  );
  const confirm = async () => {
    if (!!userProfile) {
      postLogoutUserMutate({ email: userProfile.email });
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
                  <div>마이페이지</div>
                  <div onClick={confirm}>로그아웃</div>
                </ProfilePanel>
              }
              trigger="click"
            >
              <ProfileImg>
                <img src={PROFILE_DEFAULT} alt="profile" />
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

        <Link to={ROUTES.COMMUNITY}>
          <NaviText isPath={pathname === ROUTES.COMMUNITY}>커뮤니티</NaviText>
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
