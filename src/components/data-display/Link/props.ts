import {ReactNode} from "react";

export interface IProps {
  children: ReactNode;
  href: string;
  target?: string;
  $flex?: string;
}
