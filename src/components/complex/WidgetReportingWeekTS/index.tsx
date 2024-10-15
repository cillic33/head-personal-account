import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetReportingWeekTS = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetReportingWeekTS
    </Expand>
  );
}

export default WidgetReportingWeekTS;
