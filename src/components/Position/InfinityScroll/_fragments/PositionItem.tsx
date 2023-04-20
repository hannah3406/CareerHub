import { Box, Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button, Modal } from "antd";
import { PositionList } from "apis/webcrawling/type";
import SkillTag from "components/common/SkillTag";
import moment from "moment";
import { useEffect, useState } from "react";
import AutosizeTextarea from "react-autosize-textarea";

interface IPositionItemProps {
  data: PositionList;
}
interface IPositionDetailProps {
  title: string;
  value: string;
}
interface IPositionDetailProps {
  title: string;
  value: string;
}
interface IPositionFooterProps {
  show: boolean;
}

export const PositionItem = (props: IPositionItemProps) => {
  const { data } = props;
  const [date, setDate] = useState<string | undefined>(undefined);
  const [show, setShow] = useState<boolean>(false);

  const PositionDetail = ({ title, value }: IPositionDetailProps) => (
    <Box mt={"10px"}>
      {title !== "" && title !== "show" && (
        <BoxStyles>
          <span>{title}</span>
        </BoxStyles>
      )}
      <Box p={title !== "show" ? "20px" : "0 20px 10px 20px"}>
        <TextAreaStyle value={value} readOnly />
      </Box>
    </Box>
  );

  const PositionHeader = ({ show }: IPositionFooterProps) => (
    <>
      <Box
        borderBottom="1px solid #ddd"
        mb={show ? "20px" : "10px"}
        pb={show ? "20px" : "10px"}
        bg="#eee"
      >
        <Flex
          justifyContent="space-between"
          alignItems="top"
          p={show ? "20px" : "10px 20px"}
        >
          <Flex justifyContent="flex-start" alignItems="center">
            <Box
              display="inline-block"
              fontSize="10px"
              fontWeight="bold"
              color={data.type === "wanted" ? "#fff" : "#000"}
              p="2px 8px"
              borderRadius="8px"
              bg={data.type === "wanted" ? "#36f" : "rgb(0, 221, 109)"}
            >
              {data.type}
            </Box>
            <Box ml="5px" fontSize="14px" fontWeight="bold" color="gray.700">
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
      </Box>
      <Flex flexWrap="wrap" p="0 20px">
        {data.skill.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </Flex>
    </>
  );

  const PositionFooter = ({ show }: IPositionFooterProps) => (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      borderTop="1px solid #ddd"
      p={show ? "20px" : "10px"}
      bg="#eee"
    >
      <Box textAlign="left">
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
            {data.locationDetail === null ? data.location : data.locationDetail}
          </Text>
        </Box>
      </Box>
      {show && (
        <Button
          key="link"
          href={data.url}
          target="_blank"
          type="primary"
          style={{
            width: 200,
            fontWeight: "bold",
          }}
        >
          공고 보러가기
        </Button>
      )}
    </Flex>
  );

  const PositionBody = ({ show }: IPositionFooterProps) => (
    <>
      {!show ? (
        <PositionDetail title="show" value={data.majorTasks} />
      ) : (
        <>
          {data.description && (
            <PositionDetail title="" value={data.description} />
          )}
          <PositionDetail title="주요업무" value={data.majorTasks} />
          <PositionDetail title="자격 및 요건" value={data.experience} />
          <PositionDetail title="우대사항" value={data.preferential} />
          <PositionDetail title="복지 및 혜택" value={data.welfare} />
        </>
      )}
    </>
  );
  useEffect(() => {
    const local = moment.utc(data.updatedAt).toDate();
    setDate(moment(local).format("YYYY.MM.DD"));
  }, [data]);

  return (
    <>
      <Flex
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
        cursor="pointer"
        onClick={() => setShow(true)}
      >
        <Flex flexDirection="column" w="100%">
          <PositionHeader show={false} />
          <PositionBody show={false} />
          {/* <PositionFooter show={false} /> */}
        </Flex>
      </Flex>
      <Modal
        open={show}
        title={<PositionHeader show={true} />}
        onCancel={() => setShow(false)}
        footer={<PositionFooter show={true} />}
      >
        <PositionBody show={true} />
      </Modal>
    </>
  );
};
export default PositionItem;

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
    // &:after {
    //   content: "";
    //   position: absolute;
    //   top: 50%;
    //   transform: translateY(-50%);
    //   left: 0;
    //   width: 100%;
    //   height: 2px;
    //   background: #d89999;
    //   z-index: -1;
    // }
  }
`;

const TextAreaStyle = styled(AutosizeTextarea)`
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  resize: none !important;
  box-shadow: none !important;
  cursor: pointer;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
`;
