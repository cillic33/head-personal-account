import {MouseEvent, ReactNode, RefObject} from "react";

type Variant = 'primary' | 'dark' | 'light';

type Size = 's' | 'm';

export interface IProps {
  children: ReactNode;
  id?: string;
  $variant: Variant;
  size?: Size;
  $isActive?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  $padding?: string;
  $ref?: RefObject<HTMLElement> | null;
}
