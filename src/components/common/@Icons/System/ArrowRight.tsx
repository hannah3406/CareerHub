import { Icon, IconProps } from '@chakra-ui/react';

const ArrowRightIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" color="#8C919F" {...props}>
      <path
        d="M8.48872 5.31152L15.5117 12.2598L8.48872 18.6895"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowRightIcon;
