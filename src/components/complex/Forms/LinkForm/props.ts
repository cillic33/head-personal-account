import {ILinkForm} from "@typing/TLinkForm";

export interface IProps {
  action: string;
  method: string;
  onChange: (dataForm: ILinkForm) => void;
}
