import {ReactNode} from "react";

type Variant = 'h2' | 'h3' | 'h4' | 'body-regular' | 'body-semibold' | 'caption-regular' | 'caption-semibold';

type Align = 'left' | 'center' | 'right';

export type Props = {
  children: ReactNode;
  $variant: Variant;
  $color?: string;
  $padding?: string;
  $nowrap?: boolean;
  $align?: Align;
}
