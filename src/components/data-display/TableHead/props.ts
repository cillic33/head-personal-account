import {TTableSettings} from "@typing/TTable";

export interface IProps {
  settings: TTableSettings;
  sortClick: (id: string, direction: string) => void;
}
