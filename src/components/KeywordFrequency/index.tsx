import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DummyList } from "container/Statistics/types";

interface IKeywordFrequencyProps {
  dummy: DummyList;
}
export const KeywordFrequency = (props: IKeywordFrequencyProps) => {
  const { dummy } = props;
  return (
    <Box w="25%">
      <Box fontSize="16px" fontWeight="bold">
        빈도 추출 결과
      </Box>
      <TableContainer p="20px 0">
        <Table size="sm" border="1px solid #ddd">
          <Thead border="1px solid #ddd">
            <Tr border="1px solid #ddd">
              <Th w="10%" border="1px solid #ddd"></Th>
              <Th w="70%" border="1px solid #ddd" textAlign="center">
                용어
              </Th>
              <Th w="20%" border="1px solid #ddd">
                빈도수
              </Th>
            </Tr>
          </Thead>
          <Tbody border="1px solid #ddd">
            {dummy.map((el, idx) => (
              <Tr key={idx} border="1px solid #ddd">
                <Td border="1px solid #ddd">{idx + 1}</Td>
                <Td border="1px solid #ddd">{el.label}</Td>
                <Td border="1px solid #ddd" isNumeric>
                  {el.value}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default KeywordFrequency;
