import { Icon, IconProps } from '@chakra-ui/react';

const FooterMenu = ({ ...props }: IconProps) => {
  return (
    <Icon
      width="25px"
      height="24px"
      viewBox="0 0 25 24"
      fill="none"
      color="#4A4D55"
      {...props}
    >
      <g clipPath="url(#clip0_3533_22428)">
        <path
          d="M4.0498 12H20.5498"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.0498 6H20.5498"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.0498 18H20.5498"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3533_22428">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.299805)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default FooterMenu;
