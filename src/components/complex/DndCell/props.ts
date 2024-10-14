import {ReactNode} from "react";
import {IInitialDataCell} from "@typing/TDnd";

export interface Props {
  children: ReactNode,
  index: number,
  data: IInitialDataCell,
}
