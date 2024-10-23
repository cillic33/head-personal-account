import {MouseEvent, ReactNode} from "react";

export interface IProps {
  children: ReactNode;
  isPopupShow: boolean;
  title: string;
  $width?: string;
  submitTitle?: string;
  cancelTitle?: string;
  onClose?: () => void;
  onSubmit?: () => void;
  onCancel?: () => void;
  $isDisabledSubmit?: boolean;
}

export interface IStyledOverlayProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledPopupProps {
  $width?: string;
}
