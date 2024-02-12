import React from 'react'
import Image from 'next/image';
import { LogoProps } from './Logo.types';
import { getUrl } from '../../Urls';

const Logo: React.FC<LogoProps> = ({
  organisation,
  mode="positive",
  href,
  target,
  size="medium",
  ...props
}) => (
  <a href={(href == null) ? getUrl(organisation) : href} target={target}>
    <Image
      src={`logos/${organisation}-${mode}.webp`}
      height={
        size === "small"
        ? 100
        : size === "medium"
        ? 200
        : 400
      }
      width={
        size === "small"
        ? 225
        : size === "medium"
        ? 450
        : 900
      }
      alt={`${organisation} Logo`}
      {...props}
    />
  </a>
);


export const C3SLogo = ({...props}) => (
  <Logo organisation="c3s" {...props} />
);


export const ECMWFLogo = ({...props}) => (
  <Logo organisation="ecmwf" {...props}/>
);


export const CopernicusLogo = ({...props}) => (
  <Logo organisation="copernicus" {...props}/>
);


export const EULogo = ({...props}) => (
  <Logo organisation="eu" {...props}/>
);


export default Logo;