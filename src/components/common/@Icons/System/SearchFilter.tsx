import { Icon, IconProps } from '@chakra-ui/react';

const SearchFilterIcon = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" fill="none" color="#757983" {...props}>
      <path
        d="M13.875 16.125H3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 16.125H17.625"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 18C16.7855 18 17.625 17.1605 17.625 16.125C17.625 15.0895 16.7855 14.25 15.75 14.25C14.7145 14.25 13.875 15.0895 13.875 16.125C13.875 17.1605 14.7145 18 15.75 18Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.875 7.875H3.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.25 7.875H11.625"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 9.75C10.7855 9.75 11.625 8.91053 11.625 7.875C11.625 6.83947 10.7855 6 9.75 6C8.71447 6 7.875 6.83947 7.875 7.875C7.875 8.91053 8.71447 9.75 9.75 9.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default SearchFilterIcon;
