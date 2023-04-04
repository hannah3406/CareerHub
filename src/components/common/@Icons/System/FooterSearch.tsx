import { Icon, IconProps } from '@chakra-ui/react';

const FooterSearch = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 25 24" fill="none" color="#B8BCC8" {...props}>
      <g clipPath="url(#clip0_3533_22436)">
        <path
          d="M11.8868 18.0754C15.8014 18.0754 18.9749 14.902 18.9749 10.9874C18.9749 7.07283 15.8014 3.89941 11.8868 3.89941C7.97224 3.89941 4.79883 7.07283 4.79883 10.9874C4.79883 14.902 7.97224 18.0754 11.8868 18.0754Z"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.8984 15.9996L20.9994 20.1006"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3533_22436">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.899414)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default FooterSearch;
