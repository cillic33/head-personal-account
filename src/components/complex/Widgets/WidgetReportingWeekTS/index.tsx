import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";

const WidgetReportingWeekTS = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      WidgetReportingWeekTS
    </Expand>
  );
}

export default WidgetReportingWeekTS;
