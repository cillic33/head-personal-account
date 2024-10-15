import Expand from "@components/surfaces/Expand";
import {IProps} from "@components/complex/WidgetApplicationsForApproval/props";

const WidgetWorkloadOfEmployees = (props: IProps) => {
  return (
    <Expand
      title="Занятость сотрудников"
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      <div data-id={props.id}></div>

      WidgetWorkloadOfEmployees

    </Expand>
  );
}

export default WidgetWorkloadOfEmployees;
