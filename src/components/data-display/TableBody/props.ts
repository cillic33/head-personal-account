import {TTableBody, TTableSettings} from "@typing/TTable";

export interface IProps {
  data: TTableBody;
  settings: TTableSettings;
  onClick: () => void;
}
