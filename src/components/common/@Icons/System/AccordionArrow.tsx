import { Icon, IconProps } from '@chakra-ui/react';

const AccordionArrow = ({ ...props }: IconProps) => {
  return (
    <Icon width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.5 9L12 16.5L4.5 9"
        stroke="#B8BCC8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default AccordionArrow;
