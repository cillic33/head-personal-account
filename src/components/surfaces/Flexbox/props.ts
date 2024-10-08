import {ReactNode} from "react";
import {TAlign, TDirection, TJustify} from "@typing/TCssValues";

export interface IProps {
  children: ReactNode;
  $width?: string;
  $height?: string;
  $align?: TAlign;
  $justify?: TJustify;
  $direction?: TDirection;
  $gap?: string;
  $padding?: string;
}
