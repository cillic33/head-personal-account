import {ReactNode} from "react";
import {TPosition} from "@typing/TCssValues";

type TButtonType = 'button' | 'submit' | 'reset';

export interface IProps {
  children: ReactNode;
  type?: TButtonType;
  $padding?: string;
  $position?: TPosition;
}
