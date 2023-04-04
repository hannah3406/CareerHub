import { Icon, IconProps } from '@chakra-ui/react';

const ResetIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 16 16" fill="none" color="#B8BCC8" {...props}>
      <path
        d="M4.48755 6.2312H1.98755V3.7312"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.11255 11.8875C4.88156 12.6571 5.86156 13.1814 6.92858 13.394C7.99559 13.6066 9.10169 13.4979 10.1069 13.0818C11.1122 12.6656 11.9714 11.9607 12.576 11.0561C13.1805 10.1515 13.5032 9.08799 13.5032 8C13.5032 6.91201 13.1805 5.84847 12.576 4.9439C11.9714 4.03933 11.1122 3.33439 10.1069 2.91824C9.10169 2.50209 7.99559 2.39343 6.92858 2.60601C5.86156 2.81859 4.88156 3.34286 4.11255 4.1125L1.98755 6.23125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default ResetIcon;
