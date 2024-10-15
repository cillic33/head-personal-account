import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetAbsence = (props: IProps) => {
  return (
    <Expand
      title="Отсутствия"
      $isDragIcon={true}
      $isGotoButton={true}
    >
      <div data-id={props.id}></div>

      WidgetAbsence

    </Expand>
  );
}

export default WidgetAbsence;
