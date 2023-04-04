import { ComponentSingleStyleConfig } from '@chakra-ui/theme';

export const Text: ComponentSingleStyleConfig = {
  baseStyle: {
    textStyle: 'md',
    fontWeight: 'medium',
    color: 'gray.500',
  },
  defaultProps: {},
  sizes: {},
  variants: {},
};

// import { Text, TextProps } from '@chakra-ui/react';

// /**
//  * @see Docs https://chakra-ui.com/docs/typography/text
//  */

// const Text = ({
//   as = 'span',
//   textStyle = 'md',
//   fontWeight = 'medium',
//   color = 'gray.500',
//   ...props
// }: TextProps) => {
//   return (
//     <Text
//       as={as}
//       textStyle={textStyle}
//       fontWeight={fontWeight}
//       color={color}
//       {...props}
//     />
//   );
// };

// export default Text;
