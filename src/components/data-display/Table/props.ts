import {TTable} from "@typing/TTable";
import {MutableRefObject, RefObject} from "react";

export interface IProps {
  data: TTable;
  $ref?: RefObject<HTMLTableElement> | null;
  onRowClick?: (trRef: MutableRefObject<HTMLTableRowElement | null>) => void;
}
