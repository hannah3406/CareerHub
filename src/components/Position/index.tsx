import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { PositionList } from "apis/webcrawling/type";
import ArrowDownFillIcon from "components/common/@Icons/System/ArrowDownFill";
import moment from "moment";
import { useState } from "react";
import AutosizeTextarea from "react-autosize-textarea";
interface IPositionComponentProps {
  data?: PositionList[];
}
interface IPositionDetailProps {
  title: string;
  value: string;
}

interface IDetailButtonProps {
  txt: string;
  rotate: boolean;
  id: number;
}

const PositionComponent = (props: IPositionComponentProps) => {
  const { data } = props;
  const [more, setMore] = useState<number | null>(null);

  const PositionDetail = ({ title, value }: IPositionDetailProps) => (
    <Box mt="20px">
      <BoxStyles>
        <span>{title}</span>
      </BoxStyles>
      <TextAreaStyle value={value} readOnly />
    </Box>
  );
  const DetailButton = ({ txt, rotate, id }: IDetailButtonProps) => (
    <Box className="arrowDown" textAlign="center" m="10px " mt="0">
      <Box
        display="inline-block"
        cursor="pointer"
        onClick={() => {
          if (rotate) {
            return setMore(null);
          }
          return setMore(id);
        }}
      >
        <Text
          fontSize="12px"
          fontWeight="bold"
          display="inline-block"
          color="#000"
        >
          {txt}
        </Text>
        <ArrowDownFillIcon
          w="15px"
          h="15px"
          m="0 3px"
          color="#000"
          transform={rotate ? "rotate(180deg)" : "rotate(0)"}
        />
      </Box>
    </Box>
  );
  return (
    <Flex flexDirection="column" w="900px" m="0 auto">
      {data &&
        data.map((data, idx) => {
          const local = moment.utc(data.updatedAt).toDate();
          const date = moment(local).format("YYYY.MM.DD");
          return (
            <Flex
              key={idx}
              flexDirection="column"
              align-items="center"
              w="100%"
              m="12px 0"
              boxShadow="sm"
              border="1px solid #ddd"
              borderRadius="10px"
              transition=".3s"
              overflow="hidden"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-3px)",
              }}
            >
              <Flex flexDirection="column" w="100%">
                <Flex justifyContent="space-between" alignItems="top" p="20px">
                  <Flex justifyContent="flex-start" alignItems="center">
                    <Box
                      display="inline-block"
                      fontSize="10px"
                      fontWeight="bold"
                      color={data.url.includes("wanted") ? "#fff" : "#000"}
                      p="2px 8px"
                      borderRadius="8px"
                      bg={data.type === "wanted" ? "#36f" : "rgb(0, 221, 109)"}
                    >
                      {data.type}
                    </Box>
                    <Box ml="5px" fontSize="14px" fontWeight="bold">
                      {data.company}
                    </Box>
                  </Flex>
                  <Text display="inline-block" textStyle="sm" color="#666">
                    {date}
                  </Text>
                </Flex>
                <Box p="0 20px" fontWeight="bold" fontSize="18px">
                  {data.title}
                </Box>
                <Flex m="10px 0" flexWrap="wrap" p="0 20px">
                  {data.skill.map((skill, index) => (
                    <SkillStyle key={index}>#{skill}</SkillStyle>
                  ))}
                </Flex>
                <PositionDetail title="주요업무" value={data.majorTasks} />
                <PositionDetail title="자격 및 요건" value={data.experience} />
                {more !== idx && (
                  <DetailButton txt="상세보기" rotate={false} id={idx} />
                )}
                {more === idx && (
                  <>
                    <PositionDetail
                      title="우대사항"
                      value={data.preferential}
                    />
                    <PositionDetail title="복지 및 혜택" value={data.welfare} />
                    <Box
                      href={data.url}
                      as="a"
                      display="inline-block"
                      m="5px auto"
                      mb="10px"
                      boxShadow="md"
                      bg="primary.500"
                      color="#fff"
                      p="8px 40px"
                      borderRadius="5px"
                      fontWeight="bold"
                      cursor="pointer"
                    >
                      지원하러 가기
                    </Box>
                    <DetailButton txt="접기" rotate={true} id={idx} />
                  </>
                )}

                <Box borderTop="1px solid #ddd" p="10px 20px" bg="#ddd">
                  {data.closingdate !== null && (
                    <Box>
                      <Text
                        display="inline-block"
                        fontSize="14px"
                        fontWeight="bold"
                        color="#000"
                        m="0 5px"
                      >
                        마감일
                      </Text>
                      <Text display="inline-block" fontSize="14px" color="#333">
                        {data.closingdate}
                      </Text>
                    </Box>
                  )}
                  <Box>
                    <Text
                      display="inline-block"
                      fontSize="14px"
                      fontWeight="bold"
                      color="#000"
                      m="0 5px"
                    >
                      근무지
                    </Text>
                    <Text display="inline-block" fontSize="14px" color="#333">
                      {data.locationDetail === null
                        ? data.location
                        : data.locationDetail}
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          );
        })}
    </Flex>
  );
};

export default PositionComponent;

const SkillStyle = styled.span`
  font-size: 12px;
  color: #000;
  margin: 0px 5px 10px 0;
  text-align: center;
  padding: 3px 10px;
  border-radius: 10px;
  font-weight: 600;
  // background-color: #ffcfcf;
  background: #d89999;
`;

const BoxStyles = styled.div`
  width: 100%;
  position: relative;
  > span {
    font-size: 16px;
    padding: 0 10px;
    margin: 0 15px;
    font-weight: bold;
    background-color: #fff;
    z-index: 2;
    color: #000;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 2px;
      background: #d89999;
      z-index: -1;
    }
  }
`;

const TextAreaStyle = styled(AutosizeTextarea)`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  resize: none !important;
  box-shadow: none !important;

  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
  padding: 10px 20px;
`;
