import {IWidgetMyLink} from "@typing/TWidgetMyLinks";

export interface IProps {
  $item: IWidgetMyLink;
  onEditClick?: (item: IWidgetMyLink) => void;
  onDeleteClick?: (item: IWidgetMyLink) => void;
}
