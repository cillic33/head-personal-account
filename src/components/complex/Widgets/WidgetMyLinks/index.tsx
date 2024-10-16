import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";

const WidgetMyLinks = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $popupId={props.$popupId}
    >
      WidgetMyLinks
    </Expand>
  );
}

export default WidgetMyLinks;
