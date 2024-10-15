import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const Employees = (props: IProps) => {
  return (
    <Expand
      title="Сотрудники"
      $isDragIcon={true}
    >
      <div data-id={props.id}></div>

      Employees

    </Expand>
  );
}

export default Employees;
