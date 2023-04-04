import { Icon, IconProps } from '@chakra-ui/react';

const NateLogo = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 85 22" fill="none" {...props}>
      <rect width="85" height="22" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#image0_934_6221"
            transform="translate(-0.00588235) scale(0.00588235 0.0227273)"
          />
        </pattern>
        <image
          id="image0_934_6221"
          width="172"
          height="44"
          href="data:image/png;base64,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"
        />
      </defs>
    </Icon>
  );
};

export default NateLogo;
