import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetTraining = (props: IProps) => {
  return (
    <Expand
      title="Обучение"
      $isDragIcon={true}
      $isArrowButton={true}
    >
      <div data-id={props.id}></div>

      WidgetTraining

    </Expand>
  );
}

export default WidgetTraining;
