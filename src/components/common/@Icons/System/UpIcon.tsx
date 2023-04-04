import { Icon, IconProps } from '@chakra-ui/react';

const UpIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 25" fill="none" color="#D1D4DD" {...props}>
      <path
        d="M5.10938 19.3906C4.24688 18.5281 4.81875 16.7188 4.37813 15.6594C3.9375 14.6 2.25 13.6719 2.25 12.5C2.25 11.3281 3.91875 10.4375 4.37813 9.34063C4.8375 8.24375 4.24688 6.47187 5.10938 5.60938C5.97187 4.74688 7.78125 5.31875 8.84063 4.87813C9.9 4.4375 10.8281 2.75 12 2.75C13.1719 2.75 14.0625 4.41875 15.1594 4.87813C16.2562 5.3375 18.0281 4.74688 18.8906 5.60938C19.7531 6.47187 19.1812 8.28125 19.6219 9.34063C20.0625 10.4 21.75 11.3281 21.75 12.5C21.75 13.6719 20.0813 14.5625 19.6219 15.6594C19.1625 16.7562 19.7531 18.5281 18.8906 19.3906C18.0281 20.2531 16.2188 19.6812 15.1594 20.1219C14.1 20.5625 13.1719 22.25 12 22.25C10.8281 22.25 9.9375 20.5813 8.84063 20.1219C7.74375 19.6625 5.97187 20.2531 5.10938 19.3906Z"
        fill="currentColor"
      />
      <path
        d="M12 16.625V8.375"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.625 11.75L12 8.375L15.375 11.75"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default UpIcon;
