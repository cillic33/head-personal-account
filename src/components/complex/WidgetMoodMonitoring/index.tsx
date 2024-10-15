import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetMoodMonitoring = (props: IProps) => {
  return (
    <Expand
      title="Мониторинг настроения"
      $isDragIcon={true}
      $isGotoButton={true}
    >
      <div data-id={props.id}></div>

      WidgetMoodMonitoring

    </Expand>
  );
}

export default WidgetMoodMonitoring;
