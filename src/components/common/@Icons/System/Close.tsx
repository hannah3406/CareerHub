import { Icon, IconProps } from '@chakra-ui/react';

const CloseIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 25 25" fill="none" color="#1A1A1A" {...props}>
      <path
        d="M18.75 5.75L5.25 19.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 19.25L5.25 5.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CloseIcon;
