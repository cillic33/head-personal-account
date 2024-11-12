import {MouseEvent, ReactNode, RefObject} from "react";
import {TButtonType, TPosition} from "@typing/TCssValues";

type Variant = "primary" | "dark" | "light" | "no-style";

type Size = "s" | "m" | "no-size";

export interface IProps {
  children: ReactNode;
  id?: string;
  type?: TButtonType;
  $variant?: Variant;
  size?: Size;
  $isActive?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  $padding?: string;
  $ref?: RefObject<HTMLElement> | null;
  $position?: TPosition;
  $width?: string;
  $height?: string;
  $flex?: string;
  $opacity?: number;
  disabled?: boolean;
  $background?: string;
  $borderRadius?: string;
}
