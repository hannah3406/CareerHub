import { Icon, IconProps } from '@chakra-ui/react';

const RightArrowIcon = ({ ...props }: IconProps) => {
  return (
    <Icon width="20px" height="20px" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M7.5 3.75L13.75 10L7.5 16.25"
        stroke="#4A4D55"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default RightArrowIcon;
