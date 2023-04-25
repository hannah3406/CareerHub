import { Text, Box, VStack, Grid } from "@chakra-ui/react";

interface ICustomTabsProps {
  isActiveFirst: boolean;
  setIsActiveFirst: React.Dispatch<React.SetStateAction<boolean>>;
  keyText: string[];
}
const CustomTabs = ({
  isActiveFirst,
  keyText,
  setIsActiveFirst,
}: ICustomTabsProps) => {
  const ChangeTab = () => {
    setIsActiveFirst((prev) => !prev);
  };
  return (
    <VStack w="100%">
      <Grid w="100%" gridTemplateColumns="repeat(2, 1fr)">
        <Box
          py="10px"
          borderBottom="2px solid"
          borderBottomColor={isActiveFirst ? "primary.500" : "gray.200"}
          cursor={isActiveFirst ? "default" : "pointer"}
          onClick={
            isActiveFirst
              ? () => {
                  return;
                }
              : ChangeTab
          }
        >
          <Text
            color={isActiveFirst ? "primary.500" : "gray.400"}
            fontWeight="700"
            textAlign="center"
          >
            {keyText[0]}
          </Text>
        </Box>
        <Box
          py="10px"
          borderBottom="2px solid"
          borderBottomColor={!isActiveFirst ? "primary.500" : "gray.200"}
          cursor={!isActiveFirst ? "default" : "pointer"}
          onClick={
            !isActiveFirst
              ? () => {
                  return;
                }
              : ChangeTab
          }
        >
          <Text
            color={!isActiveFirst ? "primary.500" : "gray.400"}
            fontWeight="700"
            textAlign="center"
          >
            {keyText[1]}
          </Text>
        </Box>
      </Grid>
    </VStack>
  );
};
export default CustomTabs;
