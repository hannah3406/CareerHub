import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";
interface IChakraProviderProps {
  children: JSX.Element;
}

function ChakraSetting(props: IChakraProviderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {props.children}
    </ChakraProvider>
  );
}
export default ChakraSetting;
