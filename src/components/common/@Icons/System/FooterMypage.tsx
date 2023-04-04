import { Icon, IconProps } from '@chakra-ui/react';

const FooterMypage = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 25 24" fill="none" color="#B8BCC8" {...props}>
      <g clipPath="url(#clip0_3533_22455)">
        <path
          d="M12.7002 15C16.0139 15 18.7002 12.3137 18.7002 9C18.7002 5.68629 16.0139 3 12.7002 3C9.38649 3 6.7002 5.68629 6.7002 9C6.7002 12.3137 9.38649 15 12.7002 15Z"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M3.60645 20.25C4.52795 18.6536 5.85348 17.3278 7.44978 16.4061C9.04608 15.4844 10.8569 14.9991 12.7002 14.9991C14.5435 14.9991 16.3543 15.4844 17.9506 16.4061C19.5469 17.3278 20.8724 18.6536 21.7939 20.25"
          stroke="#4A4D55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3533_22455">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.700195)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default FooterMypage;
