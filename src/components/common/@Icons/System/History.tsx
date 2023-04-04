import { Icon, IconProps } from '@chakra-ui/react';

const HistoryIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 25" fill="none" color="#B8BCC8" {...props}>
      <path
        d="M12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M12 7.25V12.5H17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default HistoryIcon;
