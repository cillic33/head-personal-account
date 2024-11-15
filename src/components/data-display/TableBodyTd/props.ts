import {ITableSetting, TTableCell} from "@typing/TTable";

export interface IProps {
  name: string;
  data: TTableCell;
  settings: ITableSetting;
  onClick?: () => void;
}
