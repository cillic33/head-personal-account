import {TInputType} from "@typing/TCssValues";
import {ChangeEvent, RefObject} from "react";

export interface IProps {
  type: TInputType;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: (target: HTMLInputElement) => void;
}

export interface IStyledInput {
  ref?: RefObject<HTMLInputElement> | null;
}
