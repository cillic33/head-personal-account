import {ITableRow, TTableSettings} from "@typing/TTable";
import {MutableRefObject} from "react";

export interface IProps {
  data: ITableRow;
  settings: TTableSettings;
  onClick?: (trRef: MutableRefObject<HTMLTableRowElement | null>) => void;
}
