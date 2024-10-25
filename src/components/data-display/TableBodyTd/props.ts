import {ITableSetting, TTableCell} from "@typing/TTable";

export interface IProps {
  k: string;
  data: TTableCell;
  settings: ITableSetting;
}
