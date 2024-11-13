import {MouseEvent, ReactNode} from "react";

export interface Props {
  children: ReactNode;
  title: string;
  $isOpen?: boolean;
  $isDragIcon?: boolean;
  $externalLink?: string;
  $internalLink?: string;
  $isPlusIcon?: boolean;
  $onPlusClick?: (event?: MouseEvent<HTMLDivElement>) => void;
  $width?: string;
  $isSplitter?: boolean;
}
