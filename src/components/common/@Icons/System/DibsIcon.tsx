import { Icon, IconProps } from '@chakra-ui/react';

const DibsIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 25" fill="none" color="#B8BCC8" {...props}>
      <path
        d="M18 21.5L12 17.75L6 21.5V5C6 4.80109 6.07902 4.61032 6.21967 4.46967C6.36032 4.32902 6.55109 4.25 6.75 4.25H17.25C17.4489 4.25 17.6397 4.32902 17.7803 4.46967C17.921 4.61032 18 4.80109 18 5V21.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default DibsIcon;
