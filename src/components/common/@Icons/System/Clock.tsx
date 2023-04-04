import { Icon, IconProps } from '@chakra-ui/react';

const Clock = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 16 16" fill="none" color="#B8BCC8" {...props}>
      <path
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
        stroke="currentColor"
        strokeMiterlimit="10"
      />
      <path
        d="M8 4.5V8H11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default Clock;
