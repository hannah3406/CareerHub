import { Icon, IconProps } from '@chakra-ui/react';

const FooterLike = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 25 24" fill="none" color="#B8BCC8" {...props}>
      <g clipPath="url(#clip0_3533_22450)">
        <path
          d="M18.0996 21L12.0996 17.25L6.09961 21V4.5C6.09961 4.30109 6.17863 4.11032 6.31928 3.96967C6.45993 3.82902 6.6507 3.75 6.84961 3.75H17.3496C17.5485 3.75 17.7393 3.82902 17.8799 3.96967C18.0206 4.11032 18.0996 4.30109 18.0996 4.5V21Z"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3533_22450">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.0996094)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default FooterLike;
