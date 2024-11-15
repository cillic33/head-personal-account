import {ReactNode} from "react";

export interface IProps {
  children: ReactNode;
  isShow: boolean;
  width?: string;
  onCloseClick?: () => void;
}

export interface IPanelProps {
  width?: string;
}
