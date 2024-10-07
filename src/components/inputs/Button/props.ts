import {ReactNode} from "react";

type ButtonType = 'button' | 'submit' | 'reset';

export interface Props {
  children: ReactNode;
  type?: ButtonType;
  $padding?: string;
}
