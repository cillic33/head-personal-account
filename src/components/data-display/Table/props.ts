import {TTable} from "@typing/TTable";
import {MutableRefObject} from "react";

export interface IProps {
  data: TTable;
  onRowClick?: (trRef: MutableRefObject<HTMLTableRowElement | null>) => void;
}
