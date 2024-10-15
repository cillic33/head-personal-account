import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetMyLinks = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $popupId="addLinkPopup"
    >
      WidgetMyLinks
    </Expand>
  );
}

export default WidgetMyLinks;
