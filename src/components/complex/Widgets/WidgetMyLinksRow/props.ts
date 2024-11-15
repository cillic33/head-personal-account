import {IWidgetMyLink} from "@typing/TWidgetMyLinks";

export interface IProps {
  $item: IWidgetMyLink;
  onEditClick?: (item: IWidgetMyLink) => void; // @barrelur эти обработчики не могут быть необязательными
  onDeleteClick?: (item: IWidgetMyLink) => void; // @barrelur эти обработчики не могут быть необязательными
}
