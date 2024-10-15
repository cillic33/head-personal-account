import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetMoodMonitoring = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetMoodMonitoring
    </Expand>
  );
}

export default WidgetMoodMonitoring;
