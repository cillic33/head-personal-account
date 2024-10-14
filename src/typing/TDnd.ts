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
