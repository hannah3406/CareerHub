import { Flex, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userProfileState } from "recoil/users";
import PROFILE_DEFAULT from "assets/image/profile-default.png";
import styled from "@emotion/styled";
import moment from "moment";

const MyPageContainer = () => {
  const userData = useRecoilValue(userProfileState);
  const [date, setDate] = useState<string | undefined>(undefined);
  useEffect(() => {
    if (!!userData) {
      const local = moment.utc(userData.updatedAt).toDate();
      setDate(moment(local).format("YYYY.MM.DD"));
    }
  }, [userData]);
  return (
    <Box>
      <Text
        color="#fff"
        padding="3px 0"
        bg="primary.500"
        fontSize="18px"
        fontWeight="bold"
        fontStyle="italic"
        textAlign="center"
      >
        마이페이지
      </Text>
      <Flex flexDirection="column" w="900px" m="20px auto" mb="100px">
        <Text color="#000" p="10px 0" fontSize="20px">
          내프로필
        </Text>
        <Flex
          w="900px"
          m="10px auto"
          alignItems="center"
          justifyContent="start"
          p="30px 50px"
          bg="#eee"
          border="1px solid #ddd"
          borderRadius="20px"
        >
          <ProfileImg>
            <img src={PROFILE_DEFAULT} alt="profile" />
          </ProfileImg>
          <Flex flexDirection="column" ml="50px">
            <Text color="#000" p="10px 0" fontSize="20px">
              {userData?.name}
            </Text>
            <Box>{userData?.email}</Box>
            {date && <Box>{date}</Box>}
          </Flex>
        </Flex>
        <Text mt="30px" color="#000" p="10px 0" fontSize="20px">
          활동내역
        </Text>
        <Box>서비스 준비중입니다</Box>
      </Flex>
    </Box>
  );
};

export default MyPageContainer;
const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  background: #fff;
  box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.15);
  > img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
