import Expand from "@components/surfaces/Expand";
import {IWidget} from "@typing/TWidget";

const WidgetWorkloadOfEmployees = (props: IWidget) => {
  return (
    <Expand
      title={props.title}
      $isOpen={props.$isOpen}
      $isDragIcon={props.$isDragIcon}
      $externalLink={props.$externalLink}
    >
      WidgetWorkloadOfEmployees
    </Expand>
  );
}

export default WidgetWorkloadOfEmployees;
