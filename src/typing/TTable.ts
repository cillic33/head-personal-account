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
  id: string;
  name: string;
  width?: number;
  type?: string;
  isCenter?: boolean;
  isSorted?: boolean;
}

export type TTableSettings = {
  [Key in TTableKeys]: ITableSetting;
};

export interface TTable {
  settings: TTableSettings;
  body: TTableBody;
}

export enum TTableSortDirections {
  NONE = 'none',
  ASC = 'asc',
  DESC = 'desc',
}

export enum TTableTypes {
  Person = 'person',
  Division = 'division',
  Chip = 'chip',
}
