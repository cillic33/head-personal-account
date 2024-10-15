import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetStaffMovement = (props: IProps) => {
  return (
    <Expand
      title="Движение персонала"
      $isDragIcon={true}
      $isGotoButton={true}
    >
      <div data-id={props.id}></div>

      WidgetStaffMovement

    </Expand>
  );
}

export default WidgetStaffMovement;
