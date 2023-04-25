import { Flex, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import moment from "moment";

import { useNavigate } from "react-router-dom";
import userApi from "apis/user";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "constants/query-keys";
import { userProfile as userType } from "apis/user/type";
import { getToken } from "utils/sessionStorage/token";
import MyProfileComponent from "components/MyProfile";
import { useGetMyArticleQuery } from "apis/user/query";

import CustomTabs from "components/common/CustomTabs";
import MyHistoryComponent from "components/MyHistory";
const MyPageContainer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = getToken();
  const userProfile = queryClient.getQueryData<userType>([
    QUERY_KEY.USER.PROFILE,
    token,
  ]);

  const [date, setDate] = useState<string | undefined>(undefined);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isActiveFirst, setIsActiveFirst] = useState<boolean>(true);
  const [isSelect, setSelect] = useState<number | undefined>(
    Number(userProfile?.profileimg)
  );
  const { data: myArticle } = useGetMyArticleQuery({
    options: {
      enabled: isActiveFirst,
    },
  });
  useEffect(() => {
    if (!!userProfile) {
      const local = moment.utc(userProfile.updatedAt).toDate();
      setDate(moment(local).format("YYYY.MM.DD"));
    }
    if (userProfile === undefined) {
      navigate("/");
    }
  }, [navigate, userProfile]);
  const onSelectImg = (idx: number) => {
    setSelect(idx);
  };

  const onImageEdit = async (idx: number | undefined) => {
    if (userProfile === undefined) return;
    try {
      await userApi.updateUser(userProfile._id, "profileimg", String(idx));
      alert("변경되었습니다.");
      await queryClient.invalidateQueries([QUERY_KEY.USER.PROFILE, token]);
      setIsEdit(!isEdit);
    } catch (e) {
      console.log("저장 실패");
    }
  };
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

        {userProfile && !!date && (
          <MyProfileComponent
            date={date}
            userProfile={userProfile}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            onSelectImg={onSelectImg}
            onImageEdit={onImageEdit}
            isSelect={isSelect}
          />
        )}

        <Text mt="30px" color="#000" p="10px 0" fontSize="20px">
          활동내역
        </Text>
        <Box>
          <Flex w="100%" flexDirection="column">
            <CustomTabs
              setIsActiveFirst={setIsActiveFirst}
              isActiveFirst={isActiveFirst}
              keyText={["작성 게시글", "작성 댓글"]}
            />
            {!!myArticle && <MyHistoryComponent data={myArticle} />}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default MyPageContainer;
