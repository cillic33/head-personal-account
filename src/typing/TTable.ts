type TTableCellPrimitive = number | string | boolean;
type TTableCellArray = TTableCell[];
type TTableCellObject = { [key: string]: TTableCell };
export type TTableCell = TTableCellPrimitive | TTableCellArray | TTableCellObject;

export interface ITableRow {
  [key: string]: TTableCell;
}

export type TTableBody = ITableRow[];

type TTableKeys = keyof ITableRow;

export interface ITableSetting {
  name: string;
  width?: number;
  isEmployee?: boolean;
}

export type TTableSettings = {
  [Key in TTableKeys]: ITableSetting;
};

export interface TTable {
  settings: TTableSettings;
  body: TTableBody;
}
