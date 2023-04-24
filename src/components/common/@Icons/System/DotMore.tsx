import { Box, Icon, IconProps } from "@chakra-ui/react";

const DotMoreIcon = ({ ...props }: IconProps) => {
  return (
    <Box cursor="pointer">
      {Array(3)
        .fill(1)
        .map((_, idx) => {
          return (
            <Icon
              key={idx}
              viewBox="0 0 2 3"
              fill="none"
              color="#B8BCC8"
              {...props}
            >
              <circle cx="1" cy="1.5" r="1" fill="currentColor" />
            </Icon>
          );
        })}
    </Box>
  );
};

export default DotMoreIcon;
