import { Box } from "@chakra-ui/react";
interface ISkillTagProps {
  skill: string;
}
const SkillTag = ({ skill }: ISkillTagProps) => {
  return (
    <>
      <Box
        mr="4px"
        mb="4px"
        fontSize="9px"
        borderRadius="10px"
        bg="#ffe6e6"
        border="1px solid #d89999"
        p="2px 7px"
        fontWeight="600"
      >
        #{skill}
      </Box>
    </>
  );
};
export default SkillTag;
