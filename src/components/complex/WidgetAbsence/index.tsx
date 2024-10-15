import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidgetProps";

const WidgetAbsence = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      WidgetAbsence
    </Expand>
  );
}

export default WidgetAbsence;
