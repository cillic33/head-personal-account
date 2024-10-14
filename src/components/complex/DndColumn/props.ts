import {ReactNode} from "react";
import {IInitialDataColumn, IInitialDataCell} from "@typing/TDnd";

export interface IProps {
  children: ReactNode,
  column: IInitialDataColumn,
  cells: IInitialDataCell[],
}

export interface ICellListProps {
  isDraggingOver: boolean,
}
