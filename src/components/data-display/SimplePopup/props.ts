import {MouseEvent, ReactNode} from "react";

export interface IProps {
  children: ReactNode;
  isPopupShow: boolean;
  title: string;
  submitTitle?: string;
  cancelTitle?: string;
  onClose?: () => void;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export interface IStyledOverlayProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
