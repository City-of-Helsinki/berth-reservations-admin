import React from 'react';
import { Logo, LogoProps } from 'hds-react';
import { useTranslation } from 'react-i18next';

export interface HelsinkiLogoProps {
  className?: string;
  size?: LogoProps['size'];
  color?: LogoProps['color'];
}

const HelsinkiLogo = ({ className, size = 'medium', color = 'standard' }: HelsinkiLogoProps) => {
  const { i18n } = useTranslation();

  let language: LogoProps['language'] = 'fi';

  switch (i18n.language) {
    case 'fi':
      language = 'fi';
      break;
    case 'sv':
      language = 'sv';
      break;
    default:
      language = 'fi';
      break;
  }

  return <Logo className={className} size={size} color={color} language={language} />;
};

export default HelsinkiLogo;
