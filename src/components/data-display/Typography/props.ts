import {ReactNode} from "react";
import {TAlign} from "@typing/TCssValues";

type Variant = 'h2' | 'h3' | 'h4' | 'body-regular' | 'body-semibold' | 'caption-regular' | 'caption-semibold' | 'chip-xs';

export type IProps = {
  children: ReactNode;
  $variant: Variant;
  $color?: string;
  $padding?: string;
  $nowrap?: boolean;
  $align?: TAlign;
}
