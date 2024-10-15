import Expand from "@components/surfaces/Expand";
import {IProps} from "./props";

const WidgetWorkloadOfEmployees = (props: IProps) => {
  return (
    <Expand
      title={props.title}
      $isDragIcon={true}
      $externalLink="https://life.ibs.ru/stream/"
    >
      WidgetWorkloadOfEmployees
    </Expand>
  );
}

export default WidgetWorkloadOfEmployees;
