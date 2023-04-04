import { Icon, IconProps } from '@chakra-ui/react';

const DotIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 2 3" fill="none" color="#B8BCC8" {...props}>
      <circle cx="1" cy="1.5" r="1" fill="currentColor" />
    </Icon>
  );
};

export default DotIcon;
