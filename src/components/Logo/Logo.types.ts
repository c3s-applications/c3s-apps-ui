export interface LogoProps {
  organisation: "c3s" | "copernicus" | "ecmwf" | "eu";
  mode?: "positive" | "negative";
  href?: string;
  target?: "_blank";
  size?: "small" | "medium" | "large";
}