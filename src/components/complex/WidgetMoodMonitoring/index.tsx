import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";

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
