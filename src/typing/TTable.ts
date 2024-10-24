type TTableCellPrimitive = number | string | boolean;
type TTableCellArray = TTableCell[];
type TTableCellObject = { [key: string]: TTableCell };
export type TTableCell = TTableCellPrimitive | TTableCellArray | TTableCellObject;

export interface ITableRow {
  [key: string]: TTableCell;
}

export type TTableBody = ITableRow[];

type TTableKeys = keyof ITableRow;

export type TTableHead = {
  [Key in TTableKeys]?: string;
}

export interface TTable {
  head: TTableHead;
  body: TTableBody;
}
