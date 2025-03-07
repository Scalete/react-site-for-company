import { SvgProps } from "@/types/svg";
import { FC } from "react";

const LogoSvg: FC<SvgProps> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="16" height="16" rx="4" fill="#C07FF2" />
      <rect x="8" y="8" width="16" height="16" rx="8" fill="#09AFF4" />
    </svg>
  );
};

export default LogoSvg;
