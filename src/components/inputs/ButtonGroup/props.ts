import {IButtonGroupData} from "@typing/TButtonGroupData";
import {MouseEvent} from "react";

export interface IProps {
  buttons?: IButtonGroupData[];
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  buttonsWidth?: string;
}
