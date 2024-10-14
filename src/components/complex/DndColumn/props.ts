import {ReactNode} from "react";
import {IInitialDataColumn, IInitialDataWidget} from "@typing/TDnd";

export interface Props {
  children: ReactNode,
  column: IInitialDataColumn,
  widgets: IInitialDataWidget[],
}
