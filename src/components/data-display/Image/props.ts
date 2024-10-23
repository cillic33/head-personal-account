import {RefObject} from "react";

export interface IProps {
  src: string;
  alt?: string;
  $width?: string;
  $height?: string;
  className?: string;
  onClick?: () => void;
  $flex?: string;
  ref?: RefObject<HTMLElement> | null;
  $ref?: RefObject<HTMLElement> | null;
}
