export interface IInitialDataWidget {
  id: string,
  content: string
}

export interface IInitialDataWidgets {
  [name: string]: IInitialDataWidget
}

export interface IInitialDataColumn {
  id: string,
  widgetIds: string[]
}

export interface IInitialDataColumns {
  [name: string]: IInitialDataColumn
}

export interface IInitialData {
  widgets: IInitialDataWidgets,
  columns: IInitialDataColumns,
  columnOrder: string[]
}

export interface IWidget {
  index: number,
  data: IInitialDataWidget,
}

export interface IColumn {
  column: IInitialDataColumn,
  widgets: IInitialDataWidget[]
}
