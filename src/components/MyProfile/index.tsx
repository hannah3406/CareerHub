import { Flex, Text, Button, Box, Tooltip } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { userProfile as userType } from "apis/user/type";
import { CameraFilled } from "@ant-design/icons";

interface IMyProfileComponentProps {
  userProfile: userType;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  date: string;
  isSelect: number | undefined;
  onSelectImg: (idx: number) => void;
  onImageEdit: (idx: number | undefined) => Promise<void>;
}
const MyProfileComponent = ({
  userProfile,
  date,
  isSelect,
  isEdit,
  onSelectImg,
  setIsEdit,
  onImageEdit,
}: IMyProfileComponentProps) => {
  return (
    <Flex
      w="900px"
      m="10px auto"
      alignItems="center"
      justifyContent="start"
      p={isEdit ? "30px 10px" : "30px 50px"}
      bg="#fff"
      border="1px solid #ddd"
      borderRadius="20px"
      flexWrap="wrap"
      h={isEdit ? "390px" : "auto"}
    >
      {isEdit ? (
        <>
          <Flex p="0 40px" flexWrap="wrap" overflowY="scroll" h="90%">
            {Array(95)
              .fill(1)
              .map((_, idx) => (
                <ProfileEditImg
                  key={idx}
                  onClick={() => onSelectImg(idx)}
                  isSelect={isSelect === idx}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/image/profile/파일 ${idx + 1}.svg`
                    }
                    alt="profile_edit"
                  />
                </ProfileEditImg>
              ))}
          </Flex>
          <Box w="100%" textAlign="right" p="10px 30px">
            <Button
              onClick={() => onImageEdit(isSelect)}
              fontSize="14px"
              bg="primary.500"
              _hover={{
                bg: "primary.500",
                color: "#fff",
                fontWeight: "bold",
              }}
              isDisabled={Number(userProfile.profileimg) === isSelect}
            >
              변경
            </Button>
            <Button
              onClick={() => setIsEdit(false)}
              fontSize="14px"
              ml="10px"
              bg="#555"
              color="#fff"
              _hover={{
                color: "#000",
                bg: "#eee",
              }}
            >
              돌아가기
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Tooltip label="프로필 이미지 변경" placement="left">
            <ProfileImg onClick={() => setIsEdit(true)}>
              <Flex
                position="absolute"
                bottom="0"
                right="0"
                w="30px"
                h="30px"
                borderRadius="100%"
                bg="#eee"
                alignItems="center"
                justifyContent="center"
                color="#000"
                fontSize="14px"
              >
                <CameraFilled />
              </Flex>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/image/profile/파일 ${
                    Number(userProfile.profileimg) + 1
                  }.svg`
                }
                alt="profile"
              />
            </ProfileImg>
          </Tooltip>

          <Flex flexDirection="column" ml="50px">
            <Text color="#000" p="10px 0" fontSize="20px">
              {userProfile?.name}
            </Text>
            <Box>이메일 {userProfile?.email}</Box>
            {date && <Box>가입일 {date}</Box>}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default MyProfileComponent;
const ProfileImg = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  background: #fff;
  box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.15);
  > img {
    z-index: -1;
    width: 100%;
  }
`;
const ProfileEditImg = styled.div<{ isSelect: boolean }>`
  position: relative;
  margin: 10px;
  width: 9.8%;
  overflow: hidden;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  background: #fff;
  border: ${(props) => (props.isSelect ? "3px solid #D89999" : "none")};
  transform: ${(props) => (props.isSelect ? "scale(1.1)" : "scale(1)")};
  box-shadow: 2.194px 2.046px 7.6px 0.4px rgba(0, 0, 0, 0.15);
  > img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
    border: 3px solid #d89999;
  }
`;
