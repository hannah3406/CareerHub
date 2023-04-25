import { Box, Icon, IconProps } from "@chakra-ui/react";

const DotMoreIcon = ({ ...props }: IconProps) => {
  const circles = [];
  for (let i = 0; i < 3; i++) {
    circles.push(
      <Icon key={i} viewBox="0 0 2 3" fill="none" color="#B8BCC8" {...props}>
        <circle cx="1" cy="1.5" r="1" fill="currentColor" />
      </Icon>
    );
  }

  return <Box cursor="pointer">{circles}</Box>;
};

export default DotMoreIcon;
