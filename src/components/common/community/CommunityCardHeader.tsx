import { Box, Flex, Text } from "@chakra-ui/react";
import { ProfileSmallImg } from "assets/style/common";
import moment from "moment";
interface ICommunityCardHeaderProps {
  profileImg: string;
  userName: string;
  updatedAt: string;
}

const CommunityCardHeader = ({
  profileImg,
  userName,
  updatedAt,
}: ICommunityCardHeaderProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" p="5px 0">
        <ProfileSmallImg>
          <img
            src={
              process.env.PUBLIC_URL +
              `/assets/image/profile/파일 ${Number(profileImg) + 1}.svg`
            }
            alt="homeheader_profile"
          />
        </ProfileSmallImg>
        <Box fontSize="14px" margin="0 5px">
          {userName}
        </Box>
      </Flex>
      <Text fontSize="12px" color="#555">
        {moment(updatedAt).fromNow()}
      </Text>
    </Flex>
  );
};
export default CommunityCardHeader;
