import {ReactNode} from "react";
import {TPosition} from "@typing/TCssValues";

type ButtonType = 'button' | 'submit' | 'reset';

export interface Props {
  children: ReactNode;
  type?: ButtonType;
  $padding?: string;
  $position?: TPosition;
}
