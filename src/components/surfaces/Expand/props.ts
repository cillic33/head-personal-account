import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
  title: string;
  $isDragIcon?: boolean;
}
