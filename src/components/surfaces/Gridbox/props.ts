import {ReactNode} from "react";

export interface IProps {
  children: ReactNode;
  $gridTemplateColumns?: string;
  $gridTemplateRows?: string;
  $rowGap?: string;
  $columnGap?: string;
}
