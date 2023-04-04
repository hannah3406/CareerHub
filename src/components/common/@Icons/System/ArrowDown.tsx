import { Icon, IconProps } from '@chakra-ui/react';

const ArrowDownIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M20 11L13.7674 17L8 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ArrowDownIcon;
