import {ReactNode} from "react";
import {TPosition} from "@typing/TCssValues";

export interface Props {
  children: ReactNode;
  $width?: string;
  $height?: string;
  $background?: string;
  $borderRadius?: string;
  $position?: TPosition;
  $top?: string;
  $right?: string;
  $border?: string;
}
