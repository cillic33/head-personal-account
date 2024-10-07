import {ReactNode} from "react";

type Align = 'center' | 'flex-end' | 'flex-start';
type Justify = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
type Direction = 'row' | 'column';

export interface Props {
  children: ReactNode;
  $width?: string;
  $height?: string;
  $align?: Align;
  $justify?: Justify;
  $direction?: Direction;
  $gap?: string;
  $padding?: string;
}
