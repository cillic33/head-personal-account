import {ILinkForm} from "@typing/TLinkForm";

export interface IProps {
  initialDataForm: ILinkForm;
  action: string;
  method: string;
  onChange: (dataForm: ILinkForm) => void;
}
