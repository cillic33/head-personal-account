import {TTableBody, TTableSettings} from "@typing/TTable";
import {MutableRefObject} from "react";

export interface IProps {
  data: TTableBody;
  settings: TTableSettings;
  onClick?: (trRef: MutableRefObject<HTMLTableRowElement | null>) => void;
}
