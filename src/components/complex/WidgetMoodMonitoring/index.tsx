import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidgetProps";

const WidgetMoodMonitoring = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      WidgetMoodMonitoring
    </Expand>
  );
}

export default WidgetMoodMonitoring;
