import {IWidget} from "@typing/TWidgetProps";

export interface IInitialDataCell extends IWidget {}

export interface IInitialDataCells {
  [name: string]: IInitialDataCell
}

export interface IInitialDataColumn {
  id: string,
  cellIds: string[],
}

export interface IInitialDataColumns {
  [name: string]: IInitialDataColumn
}

export interface IInitialData {
  cells: IInitialDataCells,
  columns: IInitialDataColumns,
  columnOrder: string[],
}
