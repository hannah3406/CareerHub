import { Icon, IconProps } from '@chakra-ui/react';

const ScrollUp = ({ ...props }: IconProps) => {
  return (
    <Icon width="80px" height="80px" viewBox="0 0 80 80" fill="none" {...props}>
      <g filter="url(#filter0_d_3491_22859)">
        <rect x="10" y="10" width="60" height="60" rx="30" fill="white" />
        <g clipPath="url(#clip0_3491_22859)">
          <path
            d="M30 43.9999L40 33.9999L50 43.9999"
            stroke="#757983"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_3491_22859"
          x="0"
          y="0"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3491_22859"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3491_22859"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_3491_22859">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(24 24)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default ScrollUp;
