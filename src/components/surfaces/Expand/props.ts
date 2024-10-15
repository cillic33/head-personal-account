import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
  title: string;
  $isDragIcon?: boolean;
  $externalLink?: string;
  $internalLink?: string;
  $popupId?: string;
}
