import {ReactNode} from "react";

export interface Props {
  children: ReactNode;
  title: string;
  $isOpen?: boolean;
  $isDragIcon?: boolean;
  $externalLink?: string;
  $internalLink?: string;
  $popupId?: string;
}
