import {ReactNode} from "react";
import {IInitialDataCell} from "@typing/TDnd";

export interface IProps {
  children: ReactNode,
  index: number,
  data: IInitialDataCell,
}

export interface IDndCellProps {
  $isDragging: boolean,
}
