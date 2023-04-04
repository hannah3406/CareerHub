import { Icon, IconProps } from '@chakra-ui/react';

const FilterArrow = ({ ...props }: IconProps) => {
  return (
    <Icon width="12px" height="8px" viewBox="0 0 12 8" fill="none" {...props}>
      <path
        d="M6.8 6.93333C6.4 7.46667 5.6 7.46667 5.2 6.93333L1.2 1.6C0.705574 0.940762 1.17596 -9.46268e-07 2 -8.74228e-07L10 -1.74846e-07C10.824 -1.02805e-07 11.2944 0.940764 10.8 1.6L6.8 6.93333Z"
        fill="#B8BCC8"
      />
    </Icon>
  );
};

export default FilterArrow;
