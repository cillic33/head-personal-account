import {ReactNode} from "react";

export interface IInitialDataWidget {
  id: string,
}

export interface IInitialDataWidgets {
  [name: string]: IInitialDataWidget
}

export interface IInitialDataColumn {
  id: string,
  widgetIds: string[],
}

export interface IInitialDataColumns {
  [name: string]: IInitialDataColumn
}

export interface IInitialData {
  widgets: IInitialDataWidgets,
  columns: IInitialDataColumns,
  columnOrder: string[],
}

export interface IWidget {
  children: ReactNode,
  index: number,
  data: IInitialDataWidget,
}

export interface IColumn {
  children: ReactNode,
  column: IInitialDataColumn,
  widgets: IInitialDataWidget[],
}
