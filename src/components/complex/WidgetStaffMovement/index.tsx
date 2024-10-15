import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidgetProps";

const WidgetStaffMovement = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      WidgetStaffMovement
    </Expand>
  );
}

export default WidgetStaffMovement;
