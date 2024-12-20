import {ReactNode} from "react";
import {TAlign, TDirection, TJustify, TFlexWrap, TCursor, TPosition} from "@typing/TCssValues";

export interface IProps {
  children: ReactNode;
  width?: string;
  height?: string;
  align?: TAlign;
  flexWrap?: TFlexWrap;
  justify?: TJustify;
  direction?: TDirection;
  gap?: string;
  padding?: string;
  margin?: string;
  background?: string;
  borderRadius?: string;
  border?: string;
  borderWidth?: string;
  flex?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  cursor?: TCursor;
  position?: TPosition;
}
