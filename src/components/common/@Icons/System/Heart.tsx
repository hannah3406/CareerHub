import { Icon, IconProps } from '@chakra-ui/react';

const HeartIcon = ({ fill = 'none', ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 21 21" fill={fill} color="#4A4D55" {...props}>
      <path
        d="M10.3993 18.5225C10.336 18.5227 10.2745 18.5012 10.2251 18.4617C9.96008 18.2492 3.73259 13.2267 2.80175 10.2542C2.55113 9.56564 2.45379 8.83071 2.51655 8.10068C2.5793 7.37066 2.80063 6.66312 3.16508 6.02747C3.45154 5.54301 3.84787 5.1327 4.32208 4.82958C4.7963 4.52646 5.33512 4.33905 5.89509 4.28248C6.7538 4.20123 7.61898 4.34197 8.40769 4.69116C9.19639 5.04035 9.88216 5.58628 10.3993 6.27665C10.9162 5.58616 11.602 5.04013 12.3907 4.69093C13.1795 4.34173 14.0447 4.20107 14.9034 4.28248C15.4634 4.33905 16.0022 4.52646 16.4764 4.82958C16.9506 5.1327 17.347 5.54301 17.6334 6.02747C17.9986 6.66551 18.2199 7.3757 18.2818 8.10826C18.3437 8.84082 18.2447 9.57805 17.9917 10.2683C17.0642 13.2267 10.8376 18.2492 10.5751 18.4617C10.5252 18.5016 10.4631 18.523 10.3993 18.5225V18.5225Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </Icon>
  );
};

export default HeartIcon;
