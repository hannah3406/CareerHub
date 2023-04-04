import { Icon, IconProps } from '@chakra-ui/react';

const KaKaoIcon = ({ ...props }: IconProps) => {
  return (
    <Icon width="24px" height="25px" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M5.677 20.813C5.498 20.707 5.527 20.692 6.57 17.113C3.827 15.766 2 13.366 2 10.628C2 6.416 6.328 3 11.662 3H11.739C17.099 3 21.446 6.412 21.446 10.623C21.446 14.456 17.846 17.629 13.146 18.165C12.1006 18.2906 11.0434 18.2825 10 18.141C6.766 20.408 6.071 20.841 5.8 20.841C5.75719 20.8434 5.71457 20.8337 5.677 20.813Z"
        fill="#1A1A1A"
      />
    </Icon>
  );
};

export default KaKaoIcon;
