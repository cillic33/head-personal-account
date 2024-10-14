import {ReactNode} from "react";
import {IInitialDataColumn, IInitialDataCell} from "@typing/TDnd";

export interface Props {
  children: ReactNode,
  column: IInitialDataColumn,
  cells: IInitialDataCell[],
}
