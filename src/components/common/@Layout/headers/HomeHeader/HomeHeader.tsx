import { useEffect, useMemo, useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Popconfirm } from "antd";
import { getToken } from "utils/sessionStorage/token";
import Logo from "components/common/@Icons/System/Logo";

import { LAYOUT } from "constants/layout";
import { ROUTES } from "constants/routes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserProfileQuery } from "apis/user/query";
import { usePostLogoutUser } from "apis/auth/mutation";

const HomeHeader = () => {
  const [open, setOpen] = useState(false);
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
  const cancel = () => {
    setOpen(false);
  };
  return (
    <Flex
      w="100%"
      h={LAYOUT.HEADER.HEIGHT}
      px="16px"
      m="0 auto"
      boxShadow="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box w="50%">
        <Link to={ROUTES.HOME}>
          <Logo w="140px" h="44px" />
        </Link>
      </Box>
      <Flex w="50%" justifyContent="right">
        {!exceptPath.includes(pathname) && !!userProfile && (
          <Box
            w="50%"
            mr="20px"
            textAlign="right"
            fontWeight="bold"
            fontSize="14px"
          >
            <Text display="inline-block" p="0 5px">
              {userProfile.name}
            </Text>
            님 안녕하세요!
          </Box>
        )}
        {!exceptPath.includes(pathname) && (
          <Box textAlign="right">
            <Popconfirm
              title={"로그아웃 하시겠습니까?"}
              onConfirm={confirm}
              onCancel={cancel}
              okText="로그아웃"
              cancelText="취소"
              open={open}
              className="logout"
            >
              <Box
                display="inline-block"
                cursor="pointer"
                color="#000"
                fontWeight="bold"
                onClick={() => {
                  setOpen((prev) => !prev);
                }}
                _hover={{
                  color: "primary.500",
                }}
              >
                로그아웃
              </Box>
            </Popconfirm>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default HomeHeader;
