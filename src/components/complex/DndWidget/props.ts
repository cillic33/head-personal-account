import {ReactNode} from "react";
import {IInitialDataWidget} from "@typing/TDnd";

export interface Props {
  children: ReactNode,
  index: number,
  data: IInitialDataWidget,
}
