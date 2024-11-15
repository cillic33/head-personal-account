import {ReactNode} from "react";
import {TTextAlign} from "@typing/TCssValues";

export type FontVariant = 'h2' | 'h3' | 'h4' | 'body-regular' | 'body-semibold' | 'caption-regular' | 'caption-semibold' | 'chip-xs' | 'chip-s' | 'chip-m' | 'xs-bold';

export type IProps = {
  children: ReactNode;
  variant: FontVariant;
  color?: string;
  padding?: string;
  isNowrap?: boolean;
  textAlign?: TTextAlign;
  className?: string;
  flex?: string;
  isEllipsis?: boolean;
}
